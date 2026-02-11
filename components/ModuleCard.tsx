
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
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img 
          src={module.imageUrl} 
          alt={t(module.title)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/babyfood/800/600';
          }}
        />
      </div>
      <div className="p-4 md:p-6 text-center">
        <h3 className="font-serif text-lg md:text-xl text-gray-700 group-hover:text-rosaCha transition-colors">
          {t(module.title)}
        </h3>
      </div>
    </Link>
  );
};

export default ModuleCard;
