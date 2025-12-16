import React from 'react';
import { Button } from './ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary-700 to-primary-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-white">
          Seu novo sorriso começa com uma mensagem
        </h2>
        <p className="text-primary-100 text-lg mb-10 font-light">
          Você está a um clique de descobrir a melhor versão do seu sorriso. Sem compromisso, sem taxas escondidas. Apenas uma conversa honesta sobre sua saúde e estética.
        </p>
        <Button 
          text="Agendar minha avaliação gratuita" 
          className="bg-white text-primary-800 hover:bg-gray-100 shadow-xl border border-transparent hover:border-gray-200"
          subtextClassName="text-primary-100/80"
        />
      </div>
    </section>
  );
};