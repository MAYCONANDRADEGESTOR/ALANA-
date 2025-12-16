import React from 'react';
import { EXPERT_DATA } from '../../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  subtextClassName?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  subtext = "Resposta rápida • Sem compromisso",
  className = "",
  subtextClassName = "text-gray-500",
  fullWidth = false
}) => {
  return (
    <div className={`flex flex-col items-center ${fullWidth ? 'w-full' : ''}`}>
      <a 
        href={EXPERT_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group relative flex items-center justify-center gap-3
          bg-primary-600 hover:bg-primary-700 text-white 
          font-bold text-lg py-4 px-8 rounded-full 
          shadow-lg hover:shadow-primary-600/30 transition-all duration-300 
          active:scale-95
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
      >
        <MessageCircle className="w-6 h-6 animate-pulse" />
        <span>{text}</span>
      </a>
      {subtext && (
        <span className={`mt-2 text-xs font-medium tracking-wide uppercase ${subtextClassName}`}>
          {subtext}
        </span>
      )}
    </div>
  );
};