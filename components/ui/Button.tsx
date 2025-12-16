import React from 'react';
import { EXPERT_DATA } from '../../constants';

interface ButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  subtextClassName?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar Avaliação", 
  subtext = "Rápido e sem compromisso",
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
          group relative flex items-center justify-center gap-2 overflow-hidden
          bg-primary-600 hover:bg-primary-700 text-white 
          font-bold text-base md:text-lg py-4 px-10 rounded-full 
          shadow-lg hover:shadow-primary-600/30 transition-all duration-300 
          active:scale-95 tracking-wide uppercase
          ${fullWidth ? 'w-full' : ''}
          ${className}
        `}
      >
        {/* Shimmer Effect Layer */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 w-full h-full skew-x-12"></div>
        
        <span className="relative z-20">{text}</span>
      </a>
      {subtext && (
        <span className={`mt-3 text-[10px] md:text-xs font-medium tracking-widest uppercase ${subtextClassName}`}>
          {subtext}
        </span>
      )}
    </div>
  );
};