
import React from 'react';
import { Link } from 'react-router-dom';
import { Module } from '../types';
import { useLanguage } from '../LanguageContext';

interface Props {
  module: Module;
}

const ModuleCard: React.FC<Props> = ({ module }) => {
  const { t } = useLanguage();
  return (
    <Link 
      to={`/modulo/${module.id}`}
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-neutralBorder/30 shadow-minimal hover:border-rosaCha/30 transition-all duration-700 flex flex-col h-full"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={module.imageUrl} 
          alt={t(module.title)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
        />
        <div className="absolute top-6 left-6">
          <div className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[8px] uppercase tracking-[0.3em] font-bold text-softGray border border-neutralBorder/20">
            0{module.id}
          </div>
        </div>
      </div>
      <div className="p-10 space-y-5 flex-grow flex flex-col">
        <h3 className="font-serif text-xl text-deepGray group-hover:text-rosaCha transition-colors leading-snug">
          {t(module.title)}
        </h3>
        <p className="text-softGray text-[11px] font-light leading-relaxed opacity-80 line-clamp-3">
          {t(module.description)}
        </p>
        <div className="mt-auto pt-6 flex items-center gap-2 text-rosaCha text-[9px] uppercase tracking-[0.3em] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
          Descobrir
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
