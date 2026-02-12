
import React, { useRef } from 'react';
import { RECOMMENDED_PRODUCTS } from '../constants';
import { useLanguage } from '../LanguageContext';

const RecommendedSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group max-w-4xl mx-auto px-4">
      <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-8 text-center">{t('dash.recommended')}</h2>
      
      {/* Setas de Navegação */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md text-rosaCha hover:bg-white transition-all focus:outline-none"
        aria-label="Anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 px-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {RECOMMENDED_PRODUCTS.map((product) => (
          <div 
            key={product.id} 
            className="min-w-[280px] md:min-w-[320px] snap-center bg-white rounded-3xl overflow-hidden shadow-sm border border-white/50 flex flex-col"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={t(product.title)} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow items-center justify-between text-center gap-4">
              <h3 className="font-serif text-lg text-gray-700 leading-snug line-clamp-2">{t(product.title)}</h3>
              <a 
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-azulBebe/10 text-azulBebe font-semibold rounded-xl hover:bg-azulBebe hover:text-white transition-all text-sm border border-azulBebe/20"
              >
                {t('module.buy')}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md text-rosaCha hover:bg-white transition-all focus:outline-none"
        aria-label="Próximo"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default RecommendedSection;
