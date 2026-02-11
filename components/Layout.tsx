
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
      <nav className="glass-nav sticky top-0 z-50 px-8 py-5 border-b border-neutralBorder/40">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-serif text-2xl text-deepGray font-bold tracking-tight">
              Nutri<span className="text-rosaCha">Bebe</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link to="/" className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all ${isActive('/') ? 'text-rosaCha border-b border-rosaCha/30 pb-1' : 'text-softGray hover:text-rosaCha'}`}>{t('nav.home')}</Link>
            <Link to="/planejador" className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all ${isActive('/planejador') ? 'text-rosaCha border-b border-rosaCha/30 pb-1' : 'text-softGray hover:text-rosaCha'}`}>{t('nav.planner')}</Link>
            <Link to="/configuracoes" className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all ${isActive('/configuracoes') ? 'text-rosaCha border-b border-rosaCha/30 pb-1' : 'text-softGray hover:text-rosaCha'}`}>{t('nav.settings')}</Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-softGray p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-nude border-b border-neutralBorder/40 p-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <Link to="/" className={`text-xs uppercase tracking-widest font-semibold ${isActive('/') ? 'text-rosaCha' : 'text-softGray'}`}>{t('nav.home')}</Link>
            <Link to="/planejador" className={`text-xs uppercase tracking-widest font-semibold ${isActive('/planejador') ? 'text-rosaCha' : 'text-softGray'}`}>{t('nav.planner')}</Link>
            <Link to="/configuracoes" className={`text-xs uppercase tracking-widest font-semibold ${isActive('/configuracoes') ? 'text-rosaCha' : 'text-softGray'}`}>{t('nav.settings')}</Link>
          </div>
        )}
      </nav>

      <main className="flex-grow container mx-auto px-6 py-16 max-w-6xl fade-in">
        {children}
      </main>

      <footer className="py-24 border-t border-neutralBorder/30">
        <div className="container mx-auto px-6 text-center space-y-6">
          <div className="flex justify-center gap-6">
             <div className="w-1 h-1 rounded-full bg-rosaCha/30"></div>
             <div className="w-1 h-1 rounded-full bg-azulBebe/30"></div>
             <div className="w-1 h-1 rounded-full bg-amareloPastel/30"></div>
          </div>
          <p className="font-serif text-lg text-deepGray tracking-wide">NutriBebe</p>
          <p className="text-[9px] uppercase tracking-[0.4em] text-softGray/60 font-medium">
            © {new Date().getFullYear()} • Curadoria em Introdução Alimentar
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
