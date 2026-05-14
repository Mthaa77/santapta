'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const QUICK_ACTIONS = [
  { label: 'I need help', message: 'I need help with addiction. Can you tell me what to do?' },
  { label: 'Tell me about treatment', message: 'What treatment programmes does SANCA Pretoria offer?' },
  { label: 'How do admissions work?', message: 'How do admissions work at SANCA Pretoria?' },
  { label: 'Cost & medical aid', message: 'What are the costs and does SANCA accept medical aid?' },
];

const WELCOME_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    'Welcome to SANCA Pretoria. I\'m here to help you with information about our addiction recovery services. Whether you need support for yourself or a loved one, you\'re not alone. How can I assist you today?',
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading) return;

      const userMessage: ChatMessage = { role: 'user', content: text.trim() };
      setMessages((prev) => [...prev, userMessage]);
      setInput('');
      setIsLoading(true);

      try {
        const chatHistory = [...messages, userMessage]
          .filter((m) => m.role === 'user' || m.role === 'assistant')
          .map((m) => ({ role: m.role, content: m.content }));

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: chatHistory }),
        });

        const data = await response.json();
        const botMessage: ChatMessage = {
          role: 'assistant',
          content: data.message || 'I apologise, something went wrong. Please try again.',
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch {
        const errorMessage: ChatMessage = {
          role: 'assistant',
          content:
            'I apologise, I\'m having trouble connecting right now. Please try again shortly, or call SANCA directly at 012 542 1121 for immediate assistance.',
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuickAction = (message: string) => {
    sendMessage(message);
  };

  const showQuickActions = messages.length === 1;

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-6 z-50 group flex items-center gap-3"
            aria-label="Open SANCA chat assistant"
          >
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="hidden sm:block bg-white text-sanca-green text-sm font-medium px-3 py-1.5 rounded-lg shadow-premium-md whitespace-nowrap pointer-events-none"
            >
              Chat with SANCA
            </motion.span>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 rounded-full bg-sanca-green text-white shadow-premium-xl flex items-center justify-center animate-pulse-glow premium-focus"
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-sanca-gold rounded-full badge-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="fixed bottom-0 left-0 sm:bottom-6 sm:left-6 z-50 w-full sm:w-[380px] flex flex-col rounded-t-2xl sm:rounded-2xl shadow-premium-2xl overflow-hidden bg-white safe-bottom"
            style={{ maxHeight: '520px' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-sanca-green to-sanca-green-light px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm font-serif">
                    SANCA Assistant
                  </h3>
                  <p className="text-white/70 text-xs">Here to help 24/7</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-3 bg-sanca-cream/30">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-sanca-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold font-serif">S</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-sanca-green text-white rounded-br-md'
                        : 'bg-sanca-cream text-sanca-green-dark rounded-bl-md'
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-7 h-7 rounded-full bg-sanca-green flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold font-serif">S</span>
                  </div>
                  <div className="bg-sanca-cream px-4 py-3 rounded-2xl rounded-bl-md">
                    <div className="flex gap-1.5">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-sanca-green/50 rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-sanca-green/50 rounded-full"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-sanca-green/50 rounded-full"
                    />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <AnimatePresence>
              {showQuickActions && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-4 py-2 flex flex-wrap gap-2 border-t border-sanca-green/10 bg-white"
                >
                  {QUICK_ACTIONS.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.message)}
                      className="text-xs px-3 py-1.5 rounded-full bg-sanca-sage text-sanca-green hover:bg-sanca-green hover:text-white transition-colors duration-200 font-medium"
                    >
                      {action.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-3 border-t border-sanca-green/10 bg-white flex-shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                disabled={isLoading}
                className="flex-1 text-sm bg-sanca-cream/50 rounded-full px-4 py-2.5 border border-sanca-green/10 focus:border-sanca-green focus:outline-none placeholder:text-sanca-green/40 text-sanca-green-dark disabled:opacity-50 glow-focus"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-full bg-sanca-green text-white flex items-center justify-center hover:bg-sanca-green-light transition-colors disabled:opacity-40 disabled:cursor-not-allowed premium-focus flex-shrink-0"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
