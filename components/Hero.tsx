import React from 'react';
import { EXPERT_DATA, IMAGES } from '../constants';
import { Button } from './ui/Button';
import { MapPin, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white pb-16 pt-0 lg:pt-0">
      {/* Background decoration - Animado */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3 z-0 animate-float"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 lg:px-6">
        
        {/* Image Container - Com animação e Efeito Gloss */}
        <div className="w-full relative h-[55vh] lg:h-[750px] lg:w-1/2 opacity-0 animate-slide-up lg:rounded-3xl shadow-2xl overflow-hidden group">
            {/* Gradiente inferior para mobile (legibilidade) */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent z-10 lg:hidden"></div>
            
            {/* Efeito Gloss / Brilho Vítreo Transparente */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-70 mix-blend-overlay"></div>
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/20 to-transparent opacity-40"></div>

            <img 
              src={IMAGES.hero} 
              alt={EXPERT_DATA.name}
              className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            
            {/* Float Badge */}
            <div className="absolute bottom-20 lg:bottom-6 left-6 z-20 bg-white/95 backdrop-blur-md py-3 px-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 animate-delay-600">
                <div className="bg-primary-100 p-2.5 rounded-full text-primary-600">
                    <Star size={18} fill="currentColor" />
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">+2.000 Pacientes</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Satisfeitos</p>
                </div>
            </div>
        </div>

        {/* Content Container - Com animação escalonada */}
        <div className="px-6 -mt-12 relative z-20 lg:mt-0 lg:w-1/2 lg:pl-0 lg:pr-6">
            <div className="bg-white/95 backdrop-blur-xl lg:bg-transparent rounded-2xl p-8 shadow-2xl lg:shadow-none border border-gray-50 lg:border-none">
                <div className="flex items-center gap-2 text-primary-700 font-semibold text-xs tracking-[0.2em] uppercase mb-4 opacity-0 animate-slide-up animate-delay-200">
                    <MapPin size={14} />
                    {EXPERT_DATA.city}
                </div>
                
                <h1 className="font-serif text-4xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 opacity-0 animate-slide-up animate-delay-400">
                    Eu sou <span className="text-primary-600">{EXPERT_DATA.name}</span>.
                </h1>
                
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8 max-w-lg font-light opacity-0 animate-slide-up animate-delay-600">
                    Dentista especialista em transformar sorrisos e recuperar sua confiança. Atendimento humanizado e resultados naturais.
                </p>

                <div className="w-full max-w-md opacity-0 animate-slide-up animate-delay-600">
                    <Button fullWidth className="shadow-primary-500/20" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};