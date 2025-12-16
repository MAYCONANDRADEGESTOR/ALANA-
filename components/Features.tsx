import React from 'react';
import { FEATURES } from '../constants';
import * as Icons from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          {/* Imagem Pulsante Adicionada - Tamanho Aumentado */}
          <div className="flex justify-center mb-10">
            <img 
              src="https://i.imgur.com/YweKXdz.jpeg" 
              alt="Selo de Qualidade" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover animate-heartbeat drop-shadow-2xl rounded-full"
            />
          </div>
          
          <span className="text-primary-600 font-bold tracking-wider uppercase text-xs">Diferenciais</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Por que confiar no meu trabalho?
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Segurança, transparência e excelência técnica são os pilares que guiam cada atendimento no meu consultório.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const IconComponent = (Icons as any)[feature.icon] || Icons.Star;
            
            return (
              <div key={idx} className="group bg-gray-50 p-8 rounded-2xl border border-transparent hover:border-primary-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-white group-hover:bg-primary-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-primary-600 mb-6 shadow-sm transition-colors duration-300">
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-primary-800 transition-colors">
                    {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};