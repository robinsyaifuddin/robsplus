
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { 
  Message, 
  initialMessages, 
  getResponse 
} from './assistant/assistantData';
import DesktopAssistant from './assistant/DesktopAssistant';
import MobileAssistant from './assistant/MobileAssistant';

const ROBsAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAssistantDialog, setShowAssistantDialog] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const [messageId, setMessageId] = useState(2); // Start from 2 since we have initial message with id 1
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Show the assistant bubble after a delay when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    
    // Add user message
    const newUserMessage: Message = {
      id: messageId,
      text: userInput,
      sender: "user"
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessageId(prev => prev + 1);
    setUserInput("");
    
    // Simulate bot thinking then respond
    setTimeout(() => {
      const botResponse: Message = {
        id: messageId + 1,
        text: getResponse(userInput),
        sender: "bot"
      };
      
      setMessages(prev => [...prev, botResponse]);
      setMessageId(prev => prev + 2);
    }, 500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  const handleQuestionClick = (question: string) => {
    // Find the question object in common questions
    import('./assistant/assistantData').then(({ commonQuestions }) => {
      // Add the question as if the user asked it
      const newUserMessage: Message = {
        id: messageId,
        text: question,
        sender: "user"
      };
      
      setMessages(prev => [...prev, newUserMessage]);
      setMessageId(prev => prev + 1);
      
      // Find answer in common questions
      const questionObj = commonQuestions.find(q => q.question === question);
      const answer = questionObj ? questionObj.answer : getResponse(question);
      
      // Simulate bot thinking then respond
      setTimeout(() => {
        const botResponse: Message = {
          id: messageId + 1,
          text: answer,
          sender: "bot"
        };
        
        setMessages(prev => [...prev, botResponse]);
        setMessageId(prev => prev + 2);
      }, 500);
    });
  };

  // Reset the chat
  const handleResetChat = () => {
    setMessages(initialMessages);
    setMessageId(2);
  };
  
  // Main Assistant bubble that replaces the Lovable badge
  return (
    <>
      {/* Assistant Icon Button */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <AnimatePresence>
          {showPopover && !isOpen && (
            <motion.div 
              className="absolute bottom-[60px] right-0 bg-cyber-deepBlue p-3 rounded-lg shadow-cyber max-w-[220px] border border-cyber-purple/30"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
            >
              <p className="text-sm text-white">
                Ada yang bisa ROB'sPlus Assistant bantu?
              </p>
              <div className="absolute bottom-[-8px] right-5 w-4 h-4 bg-cyber-deepBlue rotate-45 border-r border-b border-cyber-purple/30"></div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <Button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue shadow-[0_0_15px_rgba(121,33,223,0.6)]"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPopover(false);
            // If on mobile, open the full dialog instead
            if (window.innerWidth < 640 && !isOpen) {
              setShowAssistantDialog(true);
            }
          }}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Bot className="w-5 h-5" />
          )}
        </Button>
      </motion.div>

      {/* Mobile Assistant Dialog */}
      <MobileAssistant 
        showAssistantDialog={showAssistantDialog}
        setShowAssistantDialog={setShowAssistantDialog}
        messages={messages}
        userInput={userInput}
        setUserInput={setUserInput}
        handleSendMessage={handleSendMessage}
        handleKeyDown={handleKeyDown}
        handleQuestionClick={handleQuestionClick}
        messagesEndRef={messagesEndRef}
      />

      {/* Desktop Assistant Panel */}
      <AnimatePresence>
        <DesktopAssistant 
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          messages={messages}
          userInput={userInput}
          setUserInput={setUserInput}
          handleSendMessage={handleSendMessage}
          handleKeyDown={handleKeyDown}
          handleQuestionClick={handleQuestionClick}
          handleResetChat={handleResetChat}
          messagesEndRef={messagesEndRef}
          inputRef={inputRef}
        />
      </AnimatePresence>
    </>
  );
};

export default ROBsAssistant;
