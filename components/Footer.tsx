import React from 'react';
import { EXPERT_DATA } from '../constants';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif font-bold text-white text-xl mb-1">{EXPERT_DATA.name}</h3>
          <p className="text-gray-400 text-sm font-light">{EXPERT_DATA.profession}</p>
          <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{EXPERT_DATA.city}</p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={EXPERT_DATA.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-500 transition-colors p-2 border border-gray-800 rounded-full hover:border-primary-500"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-10 pt-6 border-t border-gray-900 text-center">
        <p className="text-xs text-gray-600">
            &copy; {currentYear} {EXPERT_DATA.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};