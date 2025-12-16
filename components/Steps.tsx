import React from 'react';
import { MessageCircle, CalendarCheck, Sparkles } from 'lucide-react';

export const Steps: React.FC = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Toque no Botão",
      desc: "Clique no botão do WhatsApp nesta página para falar diretamente com a minha equipe.",
      num: "01"
    },
    {
      icon: CalendarCheck,
      title: "Agendamento Rápido",
      desc: "Escolha o melhor horário para você. Nossa resposta é ágil e sem burocracia.",
      num: "02"
    },
    {
      icon: Sparkles,
      title: "Avaliação Completa",
      desc: "Venha ao consultório para uma avaliação detalhada e descubra o melhor plano para o seu sorriso.",
      num: "03"
    }
  ];

  return (
    <section className="py-24 px-6 bg-primary-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
            Como funciona a primeira consulta
            </h2>
            <p className="text-gray-500">Passo a passo simples e descomplicado.</p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Decorative line for desktop */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-[2px] bg-primary-100/50 -z-10 border-t-2 border-dashed border-primary-200"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white border-2 border-primary-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 relative">
                <span className="absolute -top-3 -right-3 bg-primary-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                    {step.num}
                </span>
                <step.icon size={28} className="text-primary-600" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-primary-100 py-3 px-6 rounded-full shadow-sm text-primary-800 text-sm font-medium">
                Consulta gratuita e sem compromisso.
            </div>
        </div>
      </div>
    </section>
  );
};