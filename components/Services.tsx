import React from 'react';
import { Gem, Smile, Sparkles, ScanFace } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: "Lentes em Resina",
      desc: "Transformação do sorriso com durabilidade e estética refinada, sem desgastes excessivos.",
      icon: Gem
    },
    {
      title: "Facetas de Porcelana",
      desc: "O padrão ouro da estética dental. Brilho, textura e resistência idênticos aos dentes naturais.",
      icon: Smile
    },
    {
      title: "Clareamento Dental",
      desc: "Técnicas seguras para devolver a luminosidade do seu sorriso sem causar sensibilidade.",
      icon: Sparkles
    },
    {
      title: "Harmonização Facial",
      desc: "Procedimentos sutis que integram a estética do sorriso com os traços do seu rosto.",
      icon: ScanFace
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <span className="text-primary-600 font-bold tracking-wider uppercase text-xs">Especialidades</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Como posso transformar seu sorriso
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, idx) => (
                <div key={idx} className="bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 border border-transparent hover:border-primary-100 hover:shadow-lg group">
                    <div className="w-12 h-12 bg-white group-hover:bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 shadow-sm transition-colors">
                        <item.icon size={24} />
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};