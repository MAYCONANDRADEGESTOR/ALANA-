import React from 'react';
import { IMAGES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const differentials = [
    "Especialista em Estética Dental",
    "Atendimento que respeita seu tempo",
    "Ambiente Acolhedor e Moderno",
    "Foco total na sua Autoestima"
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute inset-0 bg-primary-600 rounded-2xl rotate-3 opacity-10 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
             <img 
              src={IMAGES.about} 
              alt="Dra. Alana Rodrigues no consultório" 
              className="relative w-full rounded-2xl shadow-xl object-cover aspect-[4/5]"
             />
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-xs mb-2 block">Quem sou eu</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Muito prazer, sou a <br/> Dra. Alana Rodrigues
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
                <p>
                  Não sou apenas uma dentista, sou uma apaixonada por devolver a alegria de sorrir. Acredito que um sorriso saudável é a porta de entrada para novas oportunidades e uma vida mais plena.
                </p>
                <p>
                  Minha missão é oferecer um tratamento que vai além dos dentes: <strong>eu cuido de pessoas</strong>. Com técnica apurada e um olhar sensível, planejo cada detalhe para que você se sinta seguro e confiante.
                </p>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
                <ul className="space-y-4">
                {differentials.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                    <div className="bg-primary-50 p-1 rounded-full">
                        <CheckCircle2 className="text-primary-600" size={20} />
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                    </li>
                ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};