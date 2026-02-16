
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import { useLanguage } from '../LanguageContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/');
    } catch (err: any) {
      setError(t(err.message) || t('auth.error.invalid'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6 space-y-12 animate-in fade-in duration-1000">
      <header className="text-center space-y-6">
        <div className="inline-block px-4 py-1 text-rosaCha text-[8px] uppercase tracking-[0.4em] font-bold border-b border-rosaCha/20">
          NutriBebe Authentication
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-deepGray font-normal">{t('auth.login.title')}</h1>
        <p className="text-softGray text-sm font-light max-w-sm mx-auto opacity-70">{t('auth.login.subtitle')}</p>
      </header>

      <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-minimal border border-neutralBorder/40">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-3">
            <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-softGray/60 ml-1">{t('auth.email')}</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-8 py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-rosaCha/50 outline-none transition-all text-deepGray text-sm"
              placeholder={t('auth.placeholder.email')}
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-softGray/60">{t('auth.pass')}</label>
              <Link to="/forgot-password" size="sm" className="text-[9px] uppercase tracking-widest text-rosaCha/80 hover:text-rosaCha transition-colors font-bold">
                {t('auth.forgotLink')}
              </Link>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-8 py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-rosaCha/50 outline-none transition-all text-deepGray text-sm"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 rounded-2xl border border-red-100 flex items-center gap-3 animate-in slide-in-from-top-2">
              <div className="w-2 h-2 rounded-full bg-red-400"></div>
              <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">{error}</p>
            </div>
          )}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-6 bg-deepGray text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-rosaCha transition-all duration-700 shadow-minimal active:scale-95 disabled:opacity-50"
          >
            {loading ? t('auth.loading.enter') : t('auth.enter')}
          </button>
        </form>

        <div className="mt-12 pt-10 border-t border-neutralBorder/10 text-center">
          <p className="text-[10px] text-softGray font-medium uppercase tracking-widest">
            {t('auth.noAccount')} {' '}
            <Link to="/register" className="text-rosaCha font-bold hover:underline ml-1">
              {t('auth.registerHere')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
