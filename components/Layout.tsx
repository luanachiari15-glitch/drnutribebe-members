
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../authContext';
import { useLanguage } from '../LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-nude">
      <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 px-4 md:px-6 shadow-sm border-b border-white/50">
        <div className="container mx-auto flex flex-row justify-between items-center py-3 md:py-4">
          <div className="flex items-center">
            <Link to="/" className="font-serif text-xl md:text-2xl text-rosaCha font-bold tracking-tight shrink-0">
              NutriBebe
            </Link>
          </div>

          <div className="relative" ref={menuRef}>
            {/* Botão do Menu Principal */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center justify-center p-2.5 rounded-full transition-all border ${
                isMenuOpen 
                  ? 'bg-rosaCha text-white border-rosaCha shadow-md' 
                  : 'bg-white text-softGray border-gray-100 hover:border-rosaCha/30'
              }`}
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-white rounded-[1.5rem] shadow-xl border border-gray-100 py-3 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                <div className="px-4 py-2 mb-2">
                  <p className="text-[10px] uppercase tracking-widest text-softGray/60 font-bold">{t('nav.menu') || 'Menu'}</p>
                </div>
                
                <Link 
                  to="/" 
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive('/') ? 'bg-nude text-rosaCha font-semibold' : 'text-softGray hover:bg-nude/50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  {t('nav.home')}
                </Link>

                <Link 
                  to="/planejador" 
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive('/planejador') ? 'bg-nude text-rosaCha font-semibold' : 'text-softGray hover:bg-nude/50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  {t('nav.planner')}
                </Link>

                <Link 
                  to="/configuracoes" 
                  className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                    isActive('/configuracoes') ? 'bg-nude text-rosaCha font-semibold' : 'text-softGray hover:bg-nude/50'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  </svg>
                  {t('nav.settings')}
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <main className="flex-grow container mx-auto px-6 py-8 max-w-5xl fade-in">
        {children}
      </main>
      <footer className="py-8 text-center text-[10px] uppercase tracking-widest text-softGray/40 bg-white/20 mt-12">
        &copy; {new Date().getFullYear()} NutriBebe &bull; {t('settings.profile') || 'Introdução Alimentar'}
      </footer>
    </div>
  );
};

export default Layout;
