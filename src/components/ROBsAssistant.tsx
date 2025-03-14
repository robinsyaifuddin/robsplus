
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, ChevronDown, Bot, MessageSquareText, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Badge } from './ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';

// Common FAQ questions for the assistant
const commonQuestions = [
  {
    id: 1,
    question: "Apa saja layanan yang ditawarkan ROB'sPlus?",
    answer: "ROB'sPlus menawarkan 3 kategori layanan utama: Jasa Tugas (KTI, makalah, proposal), Jasa Digital (website, desain logo, editing video), dan Jasa Pembelajaran (kursus website, desain grafis, digital marketing)."
  },
  {
    id: 2,
    question: "Berapa biaya untuk jasa pembuatan website?",
    answer: "Biaya pembuatan website bervariasi mulai dari Rp 50.000 untuk website sederhana hingga Rp 700.000 untuk website e-commerce lengkap. Untuk informasi detail dan penawaran khusus, silakan hubungi kami via WhatsApp."
  },
  {
    id: 3,
    question: "Bagaimana cara memesan jasa di ROB'sPlus?",
    answer: "Anda dapat memesan jasa melalui halaman Order di website kami atau langsung menghubungi kami via WhatsApp untuk konsultasi awal. Kami akan membantu Anda memilih paket yang sesuai dengan kebutuhan Anda."
  },
  {
    id: 4,
    question: "Berapa lama waktu pengerjaan untuk jasa tugas?",
    answer: "Waktu pengerjaan bervariasi tergantung pada kompleksitas dan panjang tugas. Untuk tugas sederhana bisa selesai dalam 1-2 hari, sedangkan untuk tugas kompleks seperti KTI membutuhkan waktu lebih lama. Kami selalu berusaha memenuhi tenggat waktu yang disepakati."
  },
  {
    id: 5,
    question: "Apakah ada jaminan revisi untuk jasa yang dipesan?",
    answer: "Ya, kami menyediakan jaminan revisi sesuai dengan paket yang Anda pilih. Jumlah revisi bervariasi tergantung paket, dan kami selalu berusaha memastikan kepuasan klien dengan hasil akhir."
  },
];

// Define the Message interface with a strict union type for sender
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";  // This is a union type, only "user" or "bot" allowed
}

// Initial bot greeting messages - properly typed
const initialMessages: Message[] = [
  {
    id: 1,
    text: "Halo! Saya asisten ROB'sPlus. Ada yang bisa saya bantu?",
    sender: "bot"
  }
];

// Predefined responses based on keywords
const keywordResponses: { [key: string]: string } = {
  "harga": "Harga layanan kami bervariasi tergantung jenis dan kompleksitas. Untuk Jasa Tugas mulai dari Rp 5.000 - Rp 350.000, Jasa Digital mulai dari Rp 50.000 - Rp 700.000, dan Jasa Pembelajaran mulai dari Rp 50.000 - Rp 300.000. Untuk penawaran spesifik, silakan hubungi tim kami via WhatsApp di 082279722417.",
  "website": "Kami menyediakan jasa pembuatan website dengan berbagai pilihan mulai dari website statis sederhana hingga e-commerce lengkap. Harga mulai dari Rp 50.000 - Rp 700.000 tergantung kompleksitas. Tertarik untuk mendiskusikan lebih lanjut? Hubungi kami via WhatsApp!",
  "tugas": "Layanan Jasa Tugas kami mencakup pembuatan KTI, makalah, proposal, jurnal, presentasi, dan banyak lagi. Kami menawarkan berbagai paket mulai dari Rp 5.000 hingga Rp 350.000 tergantung kompleksitas. Untuk konsultasi lebih lanjut, silakan hubungi kami via WhatsApp.",
  "kursus": "ROB'sPlus menyediakan jasa pembelajaran dalam berbagai bidang seperti pembuatan website, desain grafis, digital marketing, dan penggunaan aplikasi Microsoft Office. Biaya mulai dari Rp 50.000 per sesi dengan format privat yang disesuaikan kebutuhan Anda.",
  "kontak": "Anda dapat menghubungi kami melalui WhatsApp di nomor 082279722417, atau melalui email di hello.robplus@gmail.com. Kami juga aktif di Instagram @ofc.robplus",
  "bayar": "Kami menerima pembayaran melalui transfer bank dan e-wallet (OVO, DANA, GoPay). Detail pembayaran akan diberikan setelah konsultasi dan kesepakatan layanan. Untuk informasi lebih lanjut, silakan hubungi kami via WhatsApp.",
  "revisi": "Kami menyediakan jaminan revisi untuk semua layanan kami. Jumlah revisi bervariasi tergantung paket yang dipilih. Kami berkomitmen untuk memberikan hasil yang memuaskan sesuai kebutuhan Anda.",
};

// Get a response based on user input
const getResponse = (userMessage: string): string => {
  const lowerCaseMessage = userMessage.toLowerCase();
  
  // Check if any keywords match
  for (const keyword in keywordResponses) {
    if (lowerCaseMessage.includes(keyword)) {
      return keywordResponses[keyword];
    }
  }
  
  // Default response if no keywords match
  return "Terima kasih atas pertanyaan Anda. Untuk informasi lebih detail dan konsultasi langsung, silakan hubungi tim kami melalui WhatsApp di nomor 082279722417. Tim kami siap membantu Anda dengan solusi yang tepat sesuai kebutuhan.";
};

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

      {/* Full-screen dialog for mobile */}
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
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" 
                        ? "bg-cyber-purple/30 text-white" 
                        : "bg-cyber-deepBlue/70 border border-cyber-purple/20"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-3 border-t border-cyber-purple/20">
              <h3 className="text-sm font-medium mb-2">Pertanyaan Umum:</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {commonQuestions.slice(0, 3).map((q) => (
                  <Badge 
                    key={q.id}
                    variant="outline" 
                    className="cursor-pointer hover:bg-cyber-purple/30 border-cyber-purple/30 text-xs py-1"
                    onClick={() => handleQuestionClick(q.question)}
                  >
                    {q.question.length > 25 ? q.question.substring(0, 25) + '...' : q.question}
                  </Badge>
                ))}
                <Badge 
                  variant="outline" 
                  className="cursor-pointer hover:bg-cyber-purple/30 border-cyber-purple/30 text-xs py-1"
                  onClick={() => handleQuestionClick("Bagaimana cara menghubungi ROB'sPlus?")}
                >
                  Hubungi Kami
                </Badge>
              </div>
              
              <div className="flex items-center gap-2">
                <input
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
              
              <div className="mt-4 text-center">
                <a 
                  href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20tertarik%20dengan%20layanan%20Anda." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs flex items-center justify-center gap-1 text-cyber-lightBlue hover:underline"
                >
                  <Phone size={12} />
                  <span>Konsultasi lebih lanjut via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Desktop Assistant Panel */}
      <AnimatePresence>
        {isOpen && window.innerWidth >= 640 && (
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
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === "user" 
                        ? "bg-cyber-purple/30 text-white" 
                        : "bg-cyber-deepBlue/70 border border-cyber-purple/20"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Questions */}
            <div className="p-3 border-t border-cyber-purple/20">
              <h3 className="text-sm font-medium mb-2 text-gray-300">Pertanyaan Umum:</h3>
              <div className="flex flex-wrap gap-2 mb-3">
                {commonQuestions.map((q) => (
                  <Badge 
                    key={q.id}
                    variant="outline" 
                    className="cursor-pointer hover:bg-cyber-purple/30 border-cyber-purple/30 text-xs py-1"
                    onClick={() => handleQuestionClick(q.question)}
                  >
                    {q.question.length > 20 ? q.question.substring(0, 20) + '...' : q.question}
                  </Badge>
                ))}
              </div>
              
              {/* Input */}
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
              
              {/* WhatsApp Link */}
              <div className="mt-4 text-center">
                <a 
                  href="https://wa.me/6282279722417?text=Halo%20ROB'sPlus,%20saya%20tertarik%20dengan%20layanan%20Anda." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs flex items-center justify-center gap-1 text-cyber-lightBlue hover:underline"
                >
                  <Phone size={12} />
                  <span>Konsultasi lebih lanjut via WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ROBsAssistant;
