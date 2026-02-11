
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
    <div className="space-y-16 pb-12">
      <header className="text-center space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl text-gray-800">{t('dash.welcome')}</h1>
        <p className="text-softGray max-w-md mx-auto px-4">
          {t('dash.subtitle')}
        </p>
      </header>

      {/* Atalho para o Planejador */}
      <section className="px-4">
        <Link 
          to="/planejador"
          className="max-w-2xl mx-auto flex items-center justify-between p-6 md:p-8 bg-rosaCha/10 border-2 border-rosaCha/20 rounded-[2.5rem] group hover:bg-rosaCha/20 transition-all shadow-sm"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-rosaCha shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </div>
            <div>
              <h2 className="font-serif text-xl md:text-2xl text-gray-800">{t('planner.title')}</h2>
              <p className="text-sm text-rosaCha font-medium">{t('planner.subtitle')}</p>
            </div>
          </div>
          <div className="hidden md:flex w-12 h-12 bg-white rounded-full items-center justify-center text-rosaCha group-hover:scale-110 transition-transform">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </Link>
      </section>

      {/* Lista de Módulos */}
      <section className="space-y-8 px-4">
        <div className="flex flex-col gap-8 max-w-2xl mx-auto">
          {MODULES.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      {/* Seção de Bônus */}
      <section className="pt-8 border-t border-gray-200/50">
        <BonusCarousel />
      </section>

      {/* Seção de Recomendações */}
      <section className="pt-8 border-t border-gray-200/50">
        <RecommendedSection />
      </section>

      {/* Seção de Suporte e Feedback */}
      <section className="pt-16 pb-8 border-t border-gray-200/50 text-center space-y-6">
        <div className="max-w-xl mx-auto px-6 py-10 bg-white/40 rounded-[2.5rem] border border-white/60 shadow-sm">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-4">
            {t('dash.feedback.title')}
          </h2>
          <p className="text-sm text-softGray mb-8 leading-relaxed">
            {t('dash.feedback.text')}
          </p>
          <a 
            href="mailto:drnutribebe@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-3 bg-azulBebe text-white font-semibold rounded-2xl hover:bg-azulBebe/90 transition-all shadow-md active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            {t('dash.feedback.button')}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
