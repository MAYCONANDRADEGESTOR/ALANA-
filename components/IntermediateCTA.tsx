import React from 'react';
import { Button } from './ui/Button';

export const IntermediateCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6 text-white">
          Não deixe seu sorriso para depois
        </h2>
        <p className="text-gray-300 mb-10 text-lg font-light leading-relaxed">
          Agendar uma avaliação não custa nada e pode ser o primeiro passo para recuperar sua confiança e bem-estar.
        </p>
        <div className="flex justify-center">
          <Button 
            text="Agendar Agora" 
            subtext="Gratuito e confidencial" 
            className="!bg-primary-600 hover:!bg-primary-500 !text-white shadow-lg shadow-primary-900/50"
            subtextClassName="text-gray-400"
          />
        </div>
      </div>
    </section>
  );
};