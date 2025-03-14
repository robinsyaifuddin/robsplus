
import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';
import { Message } from './assistantData';

interface ChatMessageProps {
  message: Message;
  isLastMessage?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isLastMessage }) => {
  return (
    <motion.div 
      className={`flex items-start gap-2 mb-4 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {message.sender === "bot" && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-deepBlue/80 border border-cyber-purple/30 flex items-center justify-center">
          <Bot size={16} className="text-cyber-lightBlue" />
        </div>
      )}
      
      <div 
        className={`max-w-[80%] rounded-lg p-4 ${
          message.sender === "user" 
            ? "bg-gradient-to-br from-cyber-purple/40 to-cyber-purple/30 text-white border border-cyber-purple/30" 
            : "bg-cyber-deepBlue/80 border border-cyber-purple/20 shadow-sm"
        } ${isLastMessage && message.sender === "bot" ? "animate-pulse-subtle" : ""}`}
      >
        <p className="text-sm md:text-base">{message.text}</p>
      </div>
      
      {message.sender === "user" && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyber-purple/30 border border-cyber-purple/50 flex items-center justify-center">
          <User size={16} className="text-white" />
        </div>
      )}
    </motion.div>
  );
};

export default ChatMessage;
