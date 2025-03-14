
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
    <div className="flex items-center gap-2 mt-3 relative">
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2.5 bg-cyber-deepBlue/90 border border-cyber-purple/30 rounded-lg focus:outline-none focus:border-cyber-lightBlue focus:ring-1 focus:ring-cyber-purple/30 text-white text-sm"
        placeholder="Tanyakan sesuatu..."
        autoComplete="off"
      />
      <Button 
        onClick={handleSendMessage}
        disabled={!userInput.trim()}
        className={`rounded-lg bg-gradient-to-r from-cyber-purple to-cyber-neonPurple hover:opacity-90 transition-all ${!userInput.trim() ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <Send size={18} />
      </Button>
    </div>
  );
};

export default ChatInput;
