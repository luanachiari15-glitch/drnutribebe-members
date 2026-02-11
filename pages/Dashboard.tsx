
import React from 'react';
import { Link } from 'react-router-dom';
import ModuleCard from '../components/ModuleCard';
import BonusCarousel from '../components/BonusCarousel';
import RecommendedSection from '../components/RecommendedSection';
import { MODULES } from '../constants';
import { useLanguage } from '../LanguageContext';

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      <header className="text-center space-y-8 max-w-3xl mx-auto px-4">
        <div className="inline-block px-5 py-2 bg-rosaCha/10 text-rosaCha text-[10px] uppercase tracking-[0.3em] font-bold rounded-full border border-rosaCha/5">
          Bem-vinda à sua jornada
        </div>
        <h1 className="font-serif text-5xl md:text-7xl text-deepGray leading-[1.1] font-black">
          {t('dash.welcome')}
        </h1>
        <p className="text-softGray text-base md:text-xl leading-relaxed font-light">
          {t('dash.subtitle')}
        </p>
      </header>

      <section className="px-4">
        <Link 
          to="/planejador"
          className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-white border border-gray-100 rounded-[3.5rem] group hover:border-rosaCha/30 hover:shadow-soft transition-all duration-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amareloPastel/10 rounded-full blur-3xl -mr-32 -mt-32 transition-all group-hover:bg-amareloPastel/20"></div>
          
          <div className="flex items-center gap-8 relative z-10">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-rosaCha/5 rounded-[2.5rem] flex items-center justify-center text-rosaCha shadow-inner transition-transform group-hover:scale-105 duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-serif text-3xl md:text-4xl text-deepGray">{t('planner.title')}</h2>
              <p className="text-xs text-rosaCha font-bold tracking-widest uppercase mt-2">{t('planner.subtitle')}</p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 flex w-16 h-16 bg-rosaCha text-white rounded-full items-center justify-center group-hover:translate-x-3 transition-all duration-500 shadow-xl shadow-rosaCha/20 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </section>

      <section className="px-4 space-y-12">
        <div className="text-center">
          <h2 className="font-serif text-4xl text-deepGray mb-4">Trilhas de Conhecimento</h2>
          <div className="w-16 h-1 bg-rosaCha/20 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="bg-white/50 py-24 border-y border-gray-100">
        <BonusCarousel />
      </section>

      <section className="py-12">
        <RecommendedSection />
      </section>

      <section className="px-6 pb-12">
        <div className="max-w-3xl mx-auto px-10 py-16 bg-azulBebe/5 rounded-[4rem] border border-azulBebe/10 text-center space-y-10">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-soft ring-8 ring-azulBebe/5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-azulBebe" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <div className="space-y-4">
            <h2 className="font-serif text-4xl text-deepGray">{t('dash.feedback.title')}</h2>
            <p className="text-softGray text-base max-w-lg mx-auto leading-relaxed font-light">
              {t('dash.feedback.text')}
            </p>
          </div>
          <a 
            href="mailto:suporte@nutribebe.com" 
            className="inline-flex items-center gap-4 px-12 py-5 bg-azulBebe text-white font-bold rounded-3xl hover:bg-azulBebeDark transition-all shadow-xl shadow-azulBebe/20 active:scale-95 text-lg"
          >
            {t('dash.feedback.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
