
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../authContext';
import { useLanguage } from '../LanguageContext';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError(t('auth.error.match'));
    }
    setError('');
    setLoading(true);
    try {
      await register(email, password);
      navigate('/');
    } catch (err: any) {
      setError(t(err.message) || t('auth.error.ip_limit'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-6 space-y-12 animate-in fade-in duration-1000">
      <header className="text-center space-y-6">
        <div className="inline-block px-4 py-1 text-azulBebe text-[8px] uppercase tracking-[0.4em] font-bold border-b border-azulBebe/20">
          Join NutriBebe
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-deepGray font-normal">{t('auth.register.title')}</h1>
        <p className="text-softGray text-sm font-light max-w-sm mx-auto opacity-70">{t('auth.register.subtitle')}</p>
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
              className="w-full px-8 py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-azulBebe/50 outline-none transition-all text-deepGray text-sm"
              placeholder={t('auth.placeholder.email')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-softGray/60 ml-1">{t('auth.pass')}</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-8 py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-azulBebe/50 outline-none transition-all text-deepGray text-sm"
                placeholder="••••••••"
              />
            </div>
            <div className="space-y-3">
              <label className="text-[9px] uppercase tracking-[0.3em] font-bold text-softGray/60 ml-1">{t('auth.confirmPass')}</label>
              <input 
                type="password" 
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-8 py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-azulBebe/50 outline-none transition-all text-deepGray text-sm"
                placeholder="••••••••"
              />
            </div>
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
            className="w-full py-6 bg-deepGray text-white text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-azulBebe transition-all duration-700 shadow-minimal active:scale-95 disabled:opacity-50"
          >
            {loading ? t('auth.loading.create') : t('auth.createAccount')}
          </button>
        </form>

        <div className="mt-12 pt-10 border-t border-neutralBorder/10 text-center">
          <p className="text-[10px] text-softGray font-medium uppercase tracking-widest">
            {t('auth.hasAccount')} {' '}
            <Link to="/login" className="text-azulBebe font-bold hover:underline ml-1">
              {t('auth.loginHere')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
