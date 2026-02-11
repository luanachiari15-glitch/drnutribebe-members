
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MODULES } from '../constants';
import { useLanguage } from '../LanguageContext';

const ModuleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const module = MODULES.find(m => m.id === id);

  if (!module) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-serif">Módulo não encontrado</h2>
        <Link to="/" className="text-azulBebe underline">{t('nav.home')}</Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-6">
      <button 
        onClick={() => navigate(-1)}
        className="text-sm flex items-center gap-2 text-softGray hover:text-rosaCha transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t('module.back')}
      </button>

      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm space-y-8 text-center border border-white/50">
        <div className="w-24 h-24 mx-auto rounded-full bg-amareloPastel/30 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl text-gray-800 leading-tight">
          {t(module.title)}
        </h1>

        <p className="text-gray-600 leading-relaxed max-w-lg mx-auto">
          {t(module.description)}
        </p>

        <div className="pt-6">
          <a 
            href={module.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-azulBebe text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-azulBebe/90 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {t('module.download')}
          </a>
          <p className="mt-4 text-[10px] text-softGray uppercase tracking-widest">
            {t('module.exclusive')}
          </p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="flex justify-center gap-4 opacity-20">
        <div className="w-2 h-2 rounded-full bg-rosaCha"></div>
        <div className="w-2 h-2 rounded-full bg-amareloPastel"></div>
        <div className="w-2 h-2 rounded-full bg-azulBebe"></div>
      </div>
    </div>
  );
};

export default ModuleDetail;
