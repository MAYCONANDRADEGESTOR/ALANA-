import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Dividir as imagens em duas linhas para o efeito marquee
  const halfLength = Math.ceil(IMAGES.gallery.length / 2);
  const row1 = IMAGES.gallery.slice(0, halfLength);
  const row2 = IMAGES.gallery.slice(halfLength);

  // Duplicar arrays para o loop infinito
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
        <div className="text-center">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Transformações Reais</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Resultados que falam por si
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            Veja como transformamos o sorriso e a vida de nossos pacientes.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 (Left) */}
      <div className="relative w-full mb-4">
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused]">
          {marqueeRow1.map((img, idx) => (
            <div 
              key={`r1-${idx}`} 
              className="relative w-40 h-40 md:w-64 md:h-64 mx-2 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-100 group"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt="Resultado" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Right) */}
      <div className="relative w-full">
        <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused]">
          {marqueeRow2.map((img, idx) => (
            <div 
              key={`r2-${idx}`} 
              className="relative w-40 h-40 md:w-64 md:h-64 mx-2 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-gray-100 group"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt="Resultado" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-gray-400 text-xs mt-8 italic">
          * Resultados podem variar de pessoa para pessoa. Clique para ampliar.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors z-50"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoom do resultado" 
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain animate-in zoom-in-50 duration-300"
          />
        </div>
      )}
    </section>
  );
};