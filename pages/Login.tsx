
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
    } catch (err) {
      setError(t('auth.error.login'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-4xl text-rosaCha font-bold">{t('auth.login.title')}</h1>
        <p className="text-softGray">{t('auth.login.subtitle')}</p>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-white">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-softGray uppercase tracking-wider">{t('auth.email')}</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-nude/50 border-none focus:ring-2 focus:ring-azulBebe outline-none transition-all"
              placeholder={t('auth.placeholder.email')}
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-softGray uppercase tracking-wider">{t('auth.pass')}</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-nude/50 border-none focus:ring-2 focus:ring-azulBebe outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-400 text-xs text-center">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-azulBebe text-white font-semibold rounded-xl hover:bg-azulBebe/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? t('auth.loading.enter') : t('auth.enter')}
          </button>
        </form>

        <div className="mt-8 text-center space-y-3">
          <Link to="/forgot-password" size="sm" className="block text-xs text-softGray hover:text-azulBebe transition-colors">
            {t('auth.forgotLink')}
          </Link>
          <div className="h-px bg-gray-100 w-full my-4"></div>
          <p className="text-xs text-softGray">
            {t('auth.noAccount')} {' '}
            <Link to="/register" className="text-rosaCha font-semibold hover:underline">
              {t('auth.registerHere')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
