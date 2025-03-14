import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { 
  Message, 
  initialMessages, 
  getResponse,
  commonQuestions
} from './assistant/assistantData';
import DesktopAssistant from './assistant/DesktopAssistant';
import MobileAssistant from './assistant/MobileAssistant';

const ROBsAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAssistantDialog, setShowAssistantDialog] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [userInput, setUserInput] = useState("");
  const [showPopover, setShowPopover] = useState(false);
  const [messageId, setMessageId] = useState(2);
  const [isTyping, setIsTyping] = useState(false);
  const [lastInteraction, setLastInteraction] = useState(Date.now());
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const inputRef = useRef<null | HTMLInputElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopover(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (messages.length <= 1) return;
    
    const inactivityTimer = setTimeout(() => {
      if (!isOpen && !showAssistantDialog) {
        setShowPopover(true);
      }
    }, 120000);
    
    return () => clearTimeout(inactivityTimer);
  }, [lastInteraction, isOpen, showAssistantDialog]);
  
  const simulateTyping = (response: string) => {
    setIsTyping(true);
    
    const typingDelay = Math.min(Math.max(response.length * 10, 500), 2000);
    
    setTimeout(() => {
      setIsTyping(false);
      
      const botResponse: Message = {
        id: messageId + 1,
        text: response,
        sender: "bot"
      };
      
      setMessages(prev => [...prev, botResponse]);
      setMessageId(prev => prev + 2);
    }, typingDelay);
  };
  
  const handleSendMessage = () => {
    if (userInput.trim() === "") return;
    setLastInteraction(Date.now());
    
    const newUserMessage: Message = {
      id: messageId,
      text: userInput,
      sender: "user"
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessageId(prev => prev + 1);
    setUserInput("");
    
    const responseText = getResponse(userInput);
    simulateTyping(responseText);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleQuestionClick = (question: string) => {
    setLastInteraction(Date.now());
    
    const newUserMessage: Message = {
      id: messageId,
      text: question,
      sender: "user"
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setMessageId(prev => prev + 1);
    
    const questionObj = commonQuestions.find(q => q.question === question);
    const answer = questionObj ? questionObj.answer : getResponse(question);
    
    simulateTyping(answer);
  };

  const handleResetChat = () => {
    setMessages(initialMessages);
    setMessageId(2);
    toast.success("Percakapan baru telah dimulai", {
      description: "Silakan ajukan pertanyaan Anda",
      position: "bottom-center"
    });
  };
  
  return (
    <>
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      >
        <AnimatePresence>
          {showPopover && !isOpen && (
            <motion.div 
              className="absolute bottom-[60px] right-0 bg-cyber-deepBlue/90 p-3 rounded-lg shadow-cyber max-w-[220px] border border-cyber-purple/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.9 }}
            >
              <p className="text-sm text-white">
                {messages.length <= 1 
                  ? "Ada yang bisa ROB'sPlus Assistant bantu?"
                  : "Punya pertanyaan lain tentang layanan kami?"}
              </p>
              <div className="absolute bottom-[-8px] right-5 w-4 h-4 bg-cyber-deepBlue/90 rotate-45 border-r border-b border-cyber-purple/30"></div>
              <button 
                onClick={() => setShowPopover(false)}
                className="absolute top-1 right-1.5 text-gray-400 hover:text-white p-0.5"
                aria-label="Close"
              >
                <X size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <motion.button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyber-purple to-cyber-blue shadow-[0_0_15px_rgba(121,33,223,0.6)] border border-cyber-purple/30"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(!isOpen);
            setShowPopover(false);
            setLastInteraction(Date.now());
            if (window.innerWidth < 640 && !isOpen) {
              setShowAssistantDialog(true);
            }
          }}
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <MessageSquare className="w-5 h-5 text-white" />
          )}
        </motion.button>
      </motion.div>

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
        isTyping={isTyping}
      />

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
          isTyping={isTyping}
        />
      </AnimatePresence>
    </>
  );
};

export default ROBsAssistant;
