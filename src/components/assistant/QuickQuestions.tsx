
import React from 'react';
import { motion } from 'framer-motion';
import { commonQuestions } from './assistantData';

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void;
  limit?: number;
}

const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onQuestionClick, limit }) => {
  const questions = limit ? commonQuestions.slice(0, limit) : commonQuestions;
  
  // Animation variants for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      className="flex flex-wrap gap-2 mb-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {questions.map((q) => (
        <motion.button 
          key={q.id}
          variants={item}
          className="px-3 py-1.5 text-xs rounded-lg bg-cyber-deepBlue/70 hover:bg-cyber-purple/30 border border-cyber-purple/30 text-gray-200 cursor-pointer transition-colors"
          onClick={() => onQuestionClick(q.question)}
        >
          {limit 
            ? (q.question.length > 20 ? q.question.substring(0, 20) + '...' : q.question)
            : (q.question.length > 25 ? q.question.substring(0, 25) + '...' : q.question)
          }
        </motion.button>
      ))}
      {limit && (
        <motion.button 
          variants={item}
          className="px-3 py-1.5 text-xs rounded-lg bg-cyber-deepBlue/70 hover:bg-cyber-purple/30 border border-cyber-purple/30 text-gray-200 cursor-pointer transition-colors"
          onClick={() => onQuestionClick("Bagaimana cara menghubungi ROB'sPlus?")}
        >
          Hubungi Kami
        </motion.button>
      )}
    </motion.div>
  );
};

export default QuickQuestions;
