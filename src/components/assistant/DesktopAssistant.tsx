
import React, { RefObject } from 'react';
import { motion } from 'framer-motion';
import { Bot, MessageSquareText, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Message } from './assistantData';
import ChatMessage from './ChatMessage';
import QuickQuestions from './QuickQuestions';
import ChatInput from './ChatInput';
import ContactLink from './ContactLink';

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
  inputRef
}) => {
  if (!isOpen || window.innerWidth < 640) return null;

  return (
    <motion.div
      className="fixed bottom-20 right-4 w-[350px] bg-cyber-black border border-cyber-purple/30 rounded-lg shadow-cyber z-50 overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-cyber-purple/20 bg-cyber-deepBlue/50">
        <div className="flex items-center gap-2">
          <Bot className="text-cyber-lightBlue" size={18} />
          <h3 className="font-medium text-white">ROB'sPlus Assistant</h3>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-gray-400 hover:text-white"
            onClick={handleResetChat}
          >
            <MessageSquareText size={16} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-gray-400 hover:text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={16} />
          </Button>
        </div>
      </div>
      
      {/* Chat Messages */}
      <div className="h-[300px] overflow-y-auto p-3 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Quick Questions */}
      <div className="p-3 border-t border-cyber-purple/20">
        <QuickQuestions onQuestionClick={handleQuestionClick} />
        
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
  );
};

export default DesktopAssistant;
