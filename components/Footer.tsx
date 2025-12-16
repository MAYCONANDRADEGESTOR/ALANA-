import React from 'react';
import { EXPERT_DATA } from '../constants';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif font-bold text-gray-900 text-lg">{EXPERT_DATA.name}</h3>
          <p className="text-gray-500 text-sm">{EXPERT_DATA.profession}</p>
          <p className="text-gray-500 text-sm">{EXPERT_DATA.city}</p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={EXPERT_DATA.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-600 transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <p className="text-xs text-gray-300">
            &copy; {currentYear} {EXPERT_DATA.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};