
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';

interface ChatInputProps {
  userInput: string;
  setUserInput: React.Dispatch<React.SetStateAction<string>>;
  handleSendMessage: () => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  userInput, 
  setUserInput, 
  handleSendMessage, 
  handleKeyDown,
  inputRef 
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-3 py-2 bg-cyber-deepBlue/50 border border-cyber-purple/30 rounded-md focus:outline-none focus:border-cyber-lightBlue text-white"
        placeholder="Tanyakan sesuatu..."
      />
      <Button 
        onClick={handleSendMessage}
        className="bg-cyber-purple hover:bg-cyber-neonPurple"
      >
        <Send size={18} />
      </Button>
    </div>
  );
};

export default ChatInput;
