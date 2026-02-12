
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
    <div className="space-y-24 md:space-y-32">
      <header className="text-center space-y-8 md:space-y-10 max-w-4xl mx-auto px-4">
        <div className="inline-block px-4 py-1 text-rosaCha text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold border-b border-rosaCha/20">
          {t('dash.welcome_badge')}
        </div>
        <h1 className="font-serif text-4xl md:text-7xl text-deepGray leading-[1.2] font-normal">
          {t('dash.welcome')}
        </h1>
        <p className="text-softGray text-xs md:text-base leading-relaxed font-light max-w-2xl mx-auto opacity-80">
          {t('dash.subtitle')}
        </p>
      </header>

      <section className="px-4">
        <Link 
          to="/planejador"
          className="max-w-4xl mx-auto flex flex-row items-center justify-between p-5 md:p-16 border border-neutralBorder/50 rounded-[2.5rem] md:rounded-[4rem] group hover:border-rosaCha/40 transition-all duration-700 bg-white shadow-minimal hover:shadow-elegant"
        >
          <div className="flex flex-row items-center gap-4 md:gap-12">
            <div className="w-10 h-10 md:w-20 md:h-20 bg-nude border border-neutralBorder/40 rounded-full flex items-center justify-center text-rosaCha/60 transition-transform group-hover:scale-110 duration-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-left space-y-0.5 md:space-y-1">
              <h2 className="font-serif text-lg md:text-3xl text-deepGray font-normal">
                <span className="md:hidden">{t('dash.app_mobile')}</span>
                <span className="hidden md:inline">{t('planner.title')}</span>
              </h2>
              <p className="hidden md:block text-[9px] md:text-[10px] text-softGray font-medium tracking-[0.2em] uppercase">
                {t('planner.subtitle')}
              </p>
            </div>
          </div>
          
          <div className="hidden md:flex w-12 h-12 border border-rosaCha/20 text-rosaCha rounded-full items-center justify-center group-hover:bg-rosaCha group-hover:text-white transition-all duration-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </Link>
      </section>

      <section className="px-4 space-y-12 md:space-y-20">
        <div className="text-center space-y-3">
          <h2 className="font-serif text-2xl md:text-3xl text-deepGray font-normal">{t('dash.modules')}</h2>
          <div className="w-8 h-[1px] bg-rosaCha/30 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 border-y border-neutralBorder/20">
        <BonusCarousel />
      </section>

      <section className="py-12 md:py-12">
        <RecommendedSection />
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-lg mx-auto p-8 md:p-12 border border-azulBebe/20 rounded-[2.5rem] md:rounded-[3.5rem] text-center space-y-6 md:space-y-8 bg-white/40 shadow-minimal">
          <div className="space-y-3">
            <h2 className="font-serif text-xl md:text-2xl text-deepGray font-normal">{t('dash.feedback.title')}</h2>
            <p className="text-softGray text-[10px] md:text-xs max-w-[260px] md:max-w-sm mx-auto leading-relaxed font-light opacity-80">
              {t('dash.feedback.text')}
            </p>
          </div>
          <a 
            href="mailto:suporte@nutribebe.com" 
            className="inline-block px-8 py-3.5 md:px-10 md:py-4 border border-azulBebe text-azulBebe text-[9px] md:text-[10px] font-semibold tracking-widest uppercase rounded-full hover:bg-azulBebe hover:text-white transition-all duration-500"
          >
            {t('dash.feedback.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
