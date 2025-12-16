import React from 'react';
import { EXPERT_DATA } from '../constants';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-serif font-bold text-2xl mb-2 text-white">{EXPERT_DATA.name}</h3>
          <p className="text-gray-400 text-sm font-light tracking-wide">{EXPERT_DATA.profession}</p>
          <p className="text-primary-600 text-xs mt-2 uppercase tracking-widest font-semibold">{EXPERT_DATA.city}</p>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href={EXPERT_DATA.instagramUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-primary-500 transition-colors p-3 border border-gray-700 rounded-full hover:border-primary-500 bg-gray-900"
            aria-label="Instagram"
          >
            <Instagram size={22} />
          </a>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-900 text-center">
        <p className="text-xs text-gray-500 font-light">
            &copy; {currentYear} {EXPERT_DATA.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};