
import React, { RefObject, useState } from 'react';
import { Bot, X, Sparkles } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Message } from './assistantData';
import ChatMessage from './ChatMessage';
import QuickQuestions from './QuickQuestions';
import ChatInput from './ChatInput';
import ContactLink from './ContactLink';
import './assistant-animations.css';

interface MobileAssistantProps {
  showAssistantDialog: boolean;
  setShowAssistantDialog: React.Dispatch<React.SetStateAction<boolean>>;
  messages: Message[];
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleQuestionClick: (question: string) => void;
  messagesEndRef: RefObject<HTMLDivElement>;
  isTyping?: boolean;
}

const MobileAssistant: React.FC<MobileAssistantProps> = ({
  showAssistantDialog,
  setShowAssistantDialog,
  messages,
  userInput,
  setUserInput,
  handleSendMessage,
  handleKeyDown,
  handleQuestionClick,
  messagesEndRef,
  isTyping = false
}) => {
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);

  return (
    <Dialog open={showAssistantDialog} onOpenChange={setShowAssistantDialog}>
      <DialogContent className="max-w-[400px] bg-cyber-black border border-cyber-purple/40 text-white rounded-xl shadow-2xl p-0 overflow-hidden">
        <DialogHeader className="px-4 py-3 border-b border-cyber-purple/20 bg-gradient-to-r from-cyber-deepBlue to-cyber-black">
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-base">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyber-purple/20">
                <Bot className="text-cyber-lightBlue" size={14} />
              </div>
              <span className="font-medium">ROB'sPlus Assistant</span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs bg-cyber-purple/20 text-cyber-lightBlue border border-cyber-purple/30">
                <Sparkles size={10} className="mr-1" />
                AI
              </span>
            </DialogTitle>
            <button 
              onClick={() => setShowAssistantDialog(false)}
              className="p-1 rounded-full hover:bg-cyber-deepBlue/50 transition-colors"
            >
              <X size={18} className="text-gray-400" />
            </button>
          </div>
        </DialogHeader>
        
        <div className="flex flex-col h-[70vh]">
          <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
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
          
          <div className="p-4 border-t border-cyber-purple/20 bg-cyber-deepBlue/50">
            {showQuickQuestions && messages.length < 3 && (
              <>
                <h3 className="text-xs uppercase font-medium mb-2 text-gray-400 flex items-center">
                  <Sparkles size={12} className="mr-1 text-cyber-purple" />
                  Pertanyaan Populer
                </h3>
                <QuickQuestions onQuestionClick={handleQuestionClick} limit={3} />
              </>
            )}
            
            <ChatInput 
              userInput={userInput}
              setUserInput={setUserInput}
              handleSendMessage={handleSendMessage}
              handleKeyDown={handleKeyDown}
            />
            
            <ContactLink />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MobileAssistant;
