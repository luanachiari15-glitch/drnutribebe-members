
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-nude">
      <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 px-6 py-4 border-b border-gray-100/50">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-rosaCha rounded-2xl flex items-center justify-center text-white font-serif font-bold text-2xl shadow-lg shadow-rosaCha/20 group-hover:rotate-3 transition-transform">N</div>
            <span className="font-serif text-2xl text-deepGray font-bold tracking-tight">
              Nutri<span className="text-rosaCha">Bebe</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/') ? 'text-rosaCha' : 'text-softGray hover:text-rosaCha'}`}>{t('nav.home')}</Link>
            <Link to="/planejador" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/planejador') ? 'text-rosaCha' : 'text-softGray hover:text-rosaCha'}`}>{t('nav.planner')}</Link>
            <Link to="/configuracoes" className={`text-xs uppercase tracking-widest font-bold transition-colors ${isActive('/configuracoes') ? 'text-rosaCha' : 'text-softGray hover:text-rosaCha'}`}>{t('nav.settings')}</Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-softGray"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
            <Link to="/" className={`text-sm font-bold ${isActive('/') ? 'text-rosaCha' : 'text-softGray'}`}>{t('nav.home')}</Link>
            <Link to="/planejador" className={`text-sm font-bold ${isActive('/planejador') ? 'text-rosaCha' : 'text-softGray'}`}>{t('nav.planner')}</Link>
            <Link to="/configuracoes" className={`text-sm font-bold ${isActive('/configuracoes') ? 'text-rosaCha' : 'text-softGray'}`}>{t('nav.settings')}</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow container mx-auto px-6 py-12 max-w-5xl fade-in">
        {children}
      </main>

      <footer className="py-20 bg-white/50 border-t border-gray-100 mt-auto">
        <div className="container mx-auto px-6 text-center space-y-8">
          <div className="flex justify-center gap-4">
             <div className="w-2 h-2 rounded-full bg-rosaCha"></div>
             <div className="w-2 h-2 rounded-full bg-azulBebe"></div>
             <div className="w-2 h-2 rounded-full bg-amareloPastel"></div>
          </div>
          <div className="space-y-2">
            <p className="font-serif text-xl text-deepGray font-bold">NutriBebe</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-softGray font-bold">
              © {new Date().getFullYear()} • Introdução Alimentar com Amor
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
