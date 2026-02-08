
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
type Message = {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
};

type QA = {
    id: string;
    question: string;
    answer: string;
};

const QA_DATA: QA[] = [
    { id: '1', question: "Start Application", answer: "You can apply by visiting our Admissions section and filling out the online application form." },
    { id: '2', question: "School Hours", answer: "The school hours are from 7:30 AM to 2:30 PM, Sunday through Thursday." },
    { id: '3', question: "Tuition Fees", answer: "Our tuition fees vary by grade level. Please visit the Admissions page for the detailed fee structure." },
    { id: '4', question: "Locate Us", answer: "We are located in Hay Al Hail South, Muscat, Sultanate of Oman." },
    { id: '5', question: "Curriculum", answer: "We follow an international curriculum provided by Cambridge International Examinations (CIE) alongside the Omani bilingual curriculum." },
];

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            text: "Hello! 👋 I'm the Al Shomoukh AI Assistant. How can I help you regarding admissions, academics, or campus life today?",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [messages, isOpen, isTyping]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim()) return;

        // Add user message
        const userMessage: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate network delay / "thinking"
        setTimeout(() => {
            const lowerText = text.toLowerCase();
            let botResponseText = "I see. Could you please specify more details or choose one of the quick topics below?";

            // Simple keyword matching
            const foundQA = QA_DATA.find(qa => lowerText.includes(qa.question.toLowerCase()) || qa.question.toLowerCase().includes(lowerText));

            if (foundQA) {
                botResponseText = foundQA.answer;
            } else if (lowerText.includes("hello") || lowerText.includes("hi")) {
                botResponseText = "Hello again! How can I be of service?";
            } else if (lowerText.includes("contact") || lowerText.includes("call")) {
                botResponseText = "You can reach us at admission@alshomoukh.com or call +968 24 284 756.";
            }

            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                text: botResponseText,
                sender: 'bot',
                timestamp: new Date()
            };

            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSendMessage(inputValue);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-[60] p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 group",
                    isOpen ? "bg-white text-[#7A1F2E] rotate-90" : "bg-gradient-to-r from-[#7A1F2E] to-[#9A2F3E] text-white"
                )}
                aria-label="Toggle chat"
            >
                <span className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 duration-1000" />
                {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
            </button>

            {/* Chat Container */}
            <div
                className={cn(
                    "fixed bottom-24 right-6 z-[60] w-[380px] max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right",
                    isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-20 pointer-events-none"
                )}
                style={{ height: '600px', maxHeight: 'calc(100vh - 120px)' }}
            >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#7A1F2E] to-[#5A1722] p-6 pb-8 text-white">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sparkles className="w-24 h-24" />
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-inner">
                            <span className="font-serif text-xl font-bold italic">AS</span>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg tracking-wide">Al Shomoukh Assistant</h3>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <p className="text-xs text-white/80 font-medium">Online & Ready to Help</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col h-[calc(100%-88px)] -mt-4 bg-white rounded-t-3xl relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex w-full gap-3",
                                    msg.sender === 'user' ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                {msg.sender === 'bot' && (
                                    <div className="w-8 h-8 rounded-full bg-[#7A1F2E]/10 flex-shrink-0 flex items-center justify-center">
                                        <span className="text-[10px] font-bold text-[#7A1F2E]">AI</span>
                                    </div>
                                )}
                                <div
                                    className={cn(
                                        "max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm transition-all relative group",
                                        msg.sender === 'user'
                                            ? "bg-gradient-to-br from-[#D9A021] to-[#B98011] text-white rounded-tr-sm"
                                            : "bg-slate-100 text-gray-700 rounded-tl-sm hover:shadow-md hover:bg-white border border-transparent hover:border-gray-100"
                                    )}
                                >
                                    {msg.text}
                                    <span className={cn("text-[10px] absolute -bottom-5 opacity-40 whitespace-nowrap", msg.sender === 'user' ? "right-0" : "left-0")}>
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex w-full gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#7A1F2E]/10 flex-shrink-0 flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-[#7A1F2E]">AI</span>
                                </div>
                                <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-sm w-16 flex items-center justify-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-[#7A1F2E]/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <span className="w-1.5 h-1.5 bg-[#7A1F2E]/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <span className="w-1.5 h-1.5 bg-[#7A1F2E]/40 rounded-full animate-bounce" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} className="h-4" />
                    </div>

                    {/* Quick Actions */}
                    <div
                        className="px-6 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2 pb-4"
                        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
                    >
                        {QA_DATA.map((qa) => (
                            <button
                                key={qa.id}
                                onClick={() => handleSendMessage(qa.question)}
                                className="inline-flex items-center px-4 py-2 rounded-full bg-slate-50 hover:bg-[#7A1F2E] hover:text-white border border-slate-200 text-xs font-medium text-slate-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                            >
                                {qa.question}
                            </button>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-slate-100 bg-white rounded-b-3xl">
                        <div className="relative flex items-center bg-slate-50 rounded-full border border-slate-200 focus-within:border-[#7A1F2E] focus-within:ring-4 focus-within:ring-[#7A1F2E]/5 transition-all shadow-inner">
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask me anything..."
                                className="w-full pl-5 pr-12 py-3.5 bg-transparent rounded-full text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                            />
                            <button
                                onClick={() => handleSendMessage(inputValue)}
                                disabled={!inputValue.trim() || isTyping}
                                className="absolute right-2 p-2 bg-[#7A1F2E] hover:bg-[#9A2F3E] text-white rounded-full transition-all disabled:opacity-50 disabled:scale-90 shadow-md hover:shadow-lg active:scale-95"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="text-center mt-2">
                            <p className="text-[10px] text-slate-400">Powered by Al Shomoukh AI</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
