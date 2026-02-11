
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
      className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100/60 shadow-sm hover:shadow-soft transition-all duration-500 flex flex-col h-full"
    >
      <div className="aspect-[16/11] overflow-hidden relative">
        <div className="absolute inset-0 bg-deepGray/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
        <img 
          src={module.imageUrl} 
          alt={t(module.title)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute top-6 left-6 z-20">
          <div className="px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-black text-rosaCha shadow-sm">
            Módulo {module.id}
          </div>
        </div>
      </div>
      <div className="p-10 space-y-4 flex-grow flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className="font-serif text-2xl text-deepGray group-hover:text-rosaCha transition-colors leading-tight">
            {t(module.title)}
          </h3>
          <p className="text-softGray text-xs line-clamp-3 font-light leading-relaxed">
            {t(module.description)}
          </p>
        </div>
        <div className="pt-6 flex items-center gap-3 text-rosaCha font-black text-[10px] uppercase tracking-[0.2em] transition-all group-hover:translate-x-2 duration-300">
          Continuar trilha
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
