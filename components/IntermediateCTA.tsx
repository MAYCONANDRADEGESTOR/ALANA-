import React from 'react';
import { Button } from './ui/Button';

export const IntermediateCTA: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
          Não deixe seu sorriso para depois
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Agendar uma avaliação não custa nada e pode ser o primeiro passo para recuperar sua confiança.
        </p>
        <div className="flex justify-center">
          <Button 
            text="Quero agendar agora" 
            subtext="Totalmente gratuito e confidencial" 
            className="bg-primary-500 hover:bg-primary-400 text-white shadow-primary-900/50"
          />
        </div>
      </div>
    </section>
  );
};