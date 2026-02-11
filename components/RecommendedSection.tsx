
import React, { useRef } from 'react';
import { RECOMMENDED_PRODUCTS } from '../constants';
import { useLanguage } from '../LanguageContext';

const RecommendedSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8; // Rola 80% da largura visível
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative group">
      <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-8 text-center">
        {t('dash.recommended')}
      </h2>
      
      {/* Setas de Navegação */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-[60%] -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow-sm text-rosaCha hover:bg-white transition-all focus:outline-none opacity-0 group-hover:opacity-100 hidden md:block border border-gray-100"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Esteira de Produtos */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {RECOMMENDED_PRODUCTS.map((product) => (
          <a 
            key={product.id}
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none w-[160px] md:w-[200px] snap-start group/item relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt="Sugestão NutriBebe"
                className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Overlay sutil ao passar o mouse */}
            <div className="absolute inset-0 bg-rosaCha/0 group-hover/item:bg-rosaCha/5 transition-colors pointer-events-none"></div>
          </a>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-[60%] -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow-sm text-rosaCha hover:bg-white transition-all focus:outline-none opacity-0 group-hover:opacity-100 hidden md:block border border-gray-100"
        aria-label="Próximo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores Visuais para Mobile (setas menores sempre visíveis) */}
      <div className="flex justify-between mt-4 md:hidden">
         <button onClick={() => scroll('left')} className="p-2 text-rosaCha/50 hover:text-rosaCha">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
         </button>
         <button onClick={() => scroll('right')} className="p-2 text-rosaCha/50 hover:text-rosaCha">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
         </button>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RecommendedSection;
