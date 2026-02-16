import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hello! Welcome to Al Shomoukh International School. How can I assist you today?", isUser: false },
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = inputValue.trim();
        setMessages((prev) => [...prev, { text: userMessage, isUser: true }]);
        setInputValue("");

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "Thank you for your message. Our team will get back to you shortly.", isUser: false },
            ]);
        }, 1000);
    };

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-[#F4F1EA] shadow-2xl rounded-2xl overflow-hidden z-50 border border-[#C9A45C]/20 font-inter"
                    >
                        {/* Header */}
                        <div className="bg-[#0B1E2F] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-[#C9A45C] flex items-center justify-center text-[#0B1E2F]">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <h3 className="font-medium text-sm">School Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                                        <span className="text-xs text-gray-300">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <Minus size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#F4F1EA]">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${message.isUser
                                                ? 'bg-[#0B1E2F] text-white rounded-br-none'
                                                : 'bg-white border border-[#C9A45C]/20 text-[#0B1E2F] rounded-bl-none shadow-sm'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-[#C9A45C]/20">
                            <div className="flex items-center gap-2 bg-[#F4F1EA] rounded-full px-4 py-2 border border-transparent focus-within:border-[#C9A45C]/50 transition-colors">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Type a message..."
                                    className="flex-1 bg-transparent text-sm outline-none text-[#0B1E2F] placeholder:text-gray-400"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="p-1.5 bg-[#C9A45C] text-[#0B1E2F] rounded-full hover:bg-[#b8944d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 p-4 bg-[#0B1E2F] text-[#C9A45C] rounded-full shadow-lg z-50 hover:shadow-xl transition-shadow border-2 border-[#C9A45C]"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </>
    );
}
