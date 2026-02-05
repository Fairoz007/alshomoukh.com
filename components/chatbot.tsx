"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
    id: string
    content: string
    role: "user" | "bot"
    timestamp: Date
}

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            content: "Hello! Welcome to Al Shomoukh International School. How can I assist you today?",
            role: "bot",
            timestamp: new Date(),
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages, isTyping])

    const handleSendMessage = async (e?: React.FormEvent) => {
        e?.preventDefault()

        if (!inputValue.trim()) return

        const userMessageContent = inputValue
        const newUserMessage: Message = {
            id: Date.now().toString(),
            content: userMessageContent,
            role: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, newUserMessage])
        setInputValue("")
        setIsTyping(true)

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessageContent,
                    sessionId: 'user-session-' + Date.now().toString() // Simple session ID
                }),
            })

            if (!response.ok) {
                throw new Error('Failed to fetch response')
            }

            const data = await response.json()

            const newBotMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: data.reply || "I'm having trouble connecting to the school servers right now.",
                role: "bot",
                timestamp: new Date(),
            }

            setMessages((prev) => [...prev, newBotMessage])
        } catch (error) {
            console.error('Chat error:', error)
            const errorMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: "I apologize, but I'm currently unable to reach the server. Please try again later or contact the school directly.",
                role: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, errorMessage])
        } finally {
            setIsTyping(false)
        }
    }

    return (
        <>
            {/* Toggle Button */}
            <Button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110",
                    isOpen ? "bg-destructive hover:bg-destructive/90" : "bg-primary hover:bg-primary/90"
                )}
                size="icon"
            >
                {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
                <span className="sr-only">Toggle Chat</span>
            </Button>

            {/* Chat Window */}
            <div
                className={cn(
                    "fixed bottom-24 right-6 w-[350px] sm:w-[380px] h-[500px] rounded-2xl z-40 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right shadow-2xl border border-white/20",
                    "glass-card",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-10 pointer-events-none"
                )}
            >
                {/* Header */}
                <div className="p-4 bg-primary/10 border-b border-primary/10 flex items-center justify-between backdrop-blur-md">
                    <div className="flex items-center gap-3">
                        <div className="bg-primary/20 p-2 rounded-full">
                            <Bot className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">School Assistant</h3>
                            <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Online
                            </p>
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4 bg-white/40 dark:bg-black/20">
                    <div className="flex flex-col gap-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={cn(
                                    "flex gap-3 max-w-[85%]",
                                    message.role === "user" ? "ml-auto flex-row-reverse" : ""
                                )}
                            >
                                <Avatar className="h-8 w-8 mt-1">
                                    {message.role === "bot" ? (
                                        <div className="h-full w-full bg-primary/20 flex items-center justify-center rounded-full">
                                            <Bot className="h-4 w-4 text-primary" />
                                        </div>
                                    ) : (
                                        <div className="h-full w-full bg-secondary/20 flex items-center justify-center rounded-full">
                                            <User className="h-4 w-4 text-secondary-foreground" />
                                        </div>
                                    )}
                                </Avatar>

                                <div
                                    className={cn(
                                        "p-3 rounded-2xl text-sm shadow-sm",
                                        message.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-br-none"
                                            : "bg-white dark:bg-zinc-800 text-foreground rounded-bl-none"
                                    )}
                                >
                                    {message.content}
                                    <div
                                        className={cn(
                                            "text-[10px] mt-1 opacity-70",
                                            message.role === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                                        )}
                                    >
                                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex gap-3 max-w-[85%]">
                                <Avatar className="h-8 w-8 mt-1">
                                    <div className="h-full w-full bg-primary/20 flex items-center justify-center rounded-full">
                                        <Bot className="h-4 w-4 text-primary" />
                                    </div>
                                </Avatar>
                                <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        )}
                        <div ref={scrollRef} />
                    </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 bg-white/60 dark:bg-black/40 border-t border-primary/10 backdrop-blur-md">
                    <form
                        onSubmit={handleSendMessage}
                        className="flex items-center gap-2"
                    >
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your message..."
                            className="bg-white/50 dark:bg-zinc-900/50 border-primary/20 focus-visible:ring-primary/50"
                        />
                        <Button
                            type="submit"
                            size="icon"
                            disabled={!inputValue.trim() || isTyping}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground shrink-0"
                        >
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
