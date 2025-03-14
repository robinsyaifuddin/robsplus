
import React, { RefObject } from 'react';
import { Bot } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Message } from './assistantData';
import ChatMessage from './ChatMessage';
import QuickQuestions from './QuickQuestions';
import ChatInput from './ChatInput';
import ContactLink from './ContactLink';

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
  messagesEndRef
}) => {
  return (
    <Dialog open={showAssistantDialog} onOpenChange={setShowAssistantDialog}>
      <DialogContent className="max-w-[400px] bg-cyber-black border border-cyber-purple/30 text-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Bot className="text-cyber-lightBlue" size={18} />
            ROB'sPlus Assistant
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Tanyakan apa saja seputar layanan ROB'sPlus
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col h-[60vh]">
          <div className="flex-1 overflow-y-auto p-3 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-3 border-t border-cyber-purple/20">
            <h3 className="text-sm font-medium mb-2">Pertanyaan Umum:</h3>
            <QuickQuestions onQuestionClick={handleQuestionClick} limit={3} />
            
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
