import React, { useState } from 'react';
import { IMAGES } from '../constants';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Use a subset for initial load if needed, but requirements say "use exactly these links".
  // Displaying in a grid.
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm">Transformações Reais</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Resultados que falam por si
          </h2>
          <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
            Veja como transformamos o sorriso e a vida de nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {IMAGES.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-xl bg-gray-100"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Resultado ${idx + 1}`} 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-90 group-hover:scale-100" />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-400 text-xs mt-6 italic">
          * Resultados podem variar de pessoa para pessoa. Imagens ilustrativas de casos reais.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-2 rounded-full transition-colors"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Zoom do resultado" 
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
          />
        </div>
      )}
    </section>
  );
};