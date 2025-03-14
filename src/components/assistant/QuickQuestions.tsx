
import React from 'react';
import { Badge } from '../ui/badge';
import { commonQuestions } from './assistantData';

interface QuickQuestionsProps {
  onQuestionClick: (question: string) => void;
  limit?: number;
}

const QuickQuestions: React.FC<QuickQuestionsProps> = ({ onQuestionClick, limit }) => {
  const questions = limit ? commonQuestions.slice(0, limit) : commonQuestions;
  
  return (
    <>
      <h3 className="text-sm font-medium mb-2 text-gray-300">Pertanyaan Umum:</h3>
      <div className="flex flex-wrap gap-2 mb-3">
        {questions.map((q) => (
          <Badge 
            key={q.id}
            variant="outline" 
            className="cursor-pointer hover:bg-cyber-purple/30 border-cyber-purple/30 text-xs py-1"
            onClick={() => onQuestionClick(q.question)}
          >
            {limit 
              ? (q.question.length > 20 ? q.question.substring(0, 20) + '...' : q.question)
              : (q.question.length > 25 ? q.question.substring(0, 25) + '...' : q.question)
            }
          </Badge>
        ))}
        {limit && (
          <Badge 
            variant="outline" 
            className="cursor-pointer hover:bg-cyber-purple/30 border-cyber-purple/30 text-xs py-1"
            onClick={() => onQuestionClick("Bagaimana cara menghubungi ROB'sPlus?")}
          >
            Hubungi Kami
          </Badge>
        )}
      </div>
    </>
  );
};

export default QuickQuestions;
