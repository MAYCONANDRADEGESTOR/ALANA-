import React from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Dúvidas Frequentes
            </h2>
            <p className="text-gray-500 font-light">
                Esclareça os principais pontos antes da sua consulta.
            </p>
        </div>

        <div className="space-y-4">
            <Details 
                summary="A avaliação inicial tem custo?" 
                content="Não. A primeira conversa para entender suas necessidades e avaliar a saúde do seu sorriso é gratuita e sem compromisso."
            />
            <Details 
                summary="Quais são as formas de pagamento?" 
                content="Trabalhamos com diversas formas de pagamento facilitadas, incluindo parcelamento no cartão de crédito, para que o tratamento caiba no seu orçamento."
            />
            <Details 
                summary="O tratamento dói?" 
                content="Priorizamos o seu conforto absoluto. Utilizamos anestesia de alta qualidade e técnicas modernas para garantir que os procedimentos sejam indolores."
            />
            <Details 
                summary="Quanto tempo dura o tratamento?" 
                content="Isso varia de acordo com o procedimento. Clareamentos podem ser rápidos, enquanto lentes e facetas exigem um planejamento detalhado. Na avaliação, te darei uma previsão exata."
            />
        </div>
      </div>
    </section>
  );
};

const Details: React.FC<{summary: string, content: string}> = ({ summary, content }) => (
    <details className="group bg-gray-50 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-medium hover:bg-gray-100 transition-colors">
            <h3 className="text-base md:text-lg">{summary}</h3>
            <div className="white-space-nowrap text-primary-600">
                <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
            </div>
        </summary>
        <div className="px-6 pb-6 pt-2">
            <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">
                {content}
            </p>
        </div>
    </details>
);