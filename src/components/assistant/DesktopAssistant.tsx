
import React, { RefObject, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, MessageSquareText, X, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '../ui/button';
import { Message } from './assistantData';
import ChatMessage from './ChatMessage';
import QuickQuestions from './QuickQuestions';
import ChatInput from './ChatInput';
import ContactLink from './ContactLink';
import './assistant-animations.css';

interface DesktopAssistantProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  messages: Message[];
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleQuestionClick: (question: string) => void;
  handleResetChat: () => void;
  messagesEndRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  isTyping?: boolean;
}

const DesktopAssistant: React.FC<DesktopAssistantProps> = ({
  isOpen,
  setIsOpen,
  messages,
  userInput,
  setUserInput,
  handleSendMessage,
  handleKeyDown,
  handleQuestionClick,
  handleResetChat,
  messagesEndRef,
  inputRef,
  isTyping = false
}) => {
  const [minimized, setMinimized] = useState(false);

  if (!isOpen || window.innerWidth < 640) return null;

  return (
    <motion.div
      className="fixed bottom-20 right-4 w-[380px] bg-cyber-black border border-cyber-purple/40 rounded-xl shadow-2xl z-50 overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-cyber-purple/20 bg-gradient-to-r from-cyber-deepBlue to-cyber-black">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyber-purple/20">
            <Bot className="text-cyber-lightBlue" size={14} />
          </div>
          <h3 className="font-medium text-white text-sm">ROB'sPlus Assistant</h3>
          <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30">
            <Sparkles size={10} className="mr-1" />
            AI
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-gray-400 hover:text-white hover:bg-cyber-deepBlue/50"
            onClick={handleResetChat}
            title="Percakapan Baru"
          >
            <RefreshCw size={14} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-gray-400 hover:text-white hover:bg-cyber-deepBlue/50"
            onClick={() => setMinimized(!minimized)}
            title={minimized ? "Perluas" : "Perkecil"}
          >
            <MessageSquareText size={14} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-gray-400 hover:text-white hover:bg-cyber-deepBlue/50"
            onClick={() => setIsOpen(false)}
            title="Tutup"
          >
            <X size={14} />
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {!minimized && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chat Messages */}
            <div className="h-[320px] overflow-y-auto p-3 space-y-1 custom-scrollbar">
              {messages.map((message, index) => (
                <ChatMessage 
                  key={message.id} 
                  message={message} 
                  isLastMessage={index === messages.length - 1}
                />
              ))}
              {isTyping && (
                <div className="flex items-start gap-2 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-deepBlue/80 border border-cyber-purple/30 flex items-center justify-center">
                    <Bot size={16} className="text-cyber-lightBlue" />
                  </div>
                  <div className="max-w-[80%] rounded-lg p-4 bg-cyber-deepBlue/80 border border-cyber-purple/20 shadow-sm">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Questions */}
            <div className="p-3 border-t border-cyber-purple/20 bg-cyber-deepBlue/50">
              {messages.length < 3 && (
                <>
                  <h3 className="text-xs uppercase font-medium mb-2 text-gray-400 flex items-center">
                    <Sparkles size={12} className="mr-1 text-cyber-purple" />
                    Pertanyaan Populer
                  </h3>
                  <QuickQuestions onQuestionClick={handleQuestionClick} />
                </>
              )}
              
              {/* Input */}
              <ChatInput 
                userInput={userInput}
                setUserInput={setUserInput}
                handleSendMessage={handleSendMessage}
                handleKeyDown={handleKeyDown}
                inputRef={inputRef}
              />
              
              {/* WhatsApp Link */}
              <ContactLink />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default DesktopAssistant;
