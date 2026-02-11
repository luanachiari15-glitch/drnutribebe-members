
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
      return setError(t('auth.error.match') || 'Passwords do not match');
    }
    setError('');
    setLoading(true);
    try {
      await register(email, password);
      navigate('/');
    } catch (err) {
      setError(t('auth.error.generic') || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-4xl text-rosaCha font-bold">{t('auth.register.title')}</h1>
        <p className="text-softGray">{t('auth.register.subtitle')}</p>
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

          <div className="space-y-2">
            <label className="text-xs font-semibold text-softGray uppercase tracking-wider">{t('auth.confirmPass')}</label>
            <input 
              type="password" 
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-nude/50 border-none focus:ring-2 focus:ring-azulBebe outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-400 text-xs text-center">{error}</p>}

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-rosaCha text-white font-semibold rounded-xl hover:bg-rosaCha/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
          >
            {loading ? t('auth.loading.create') : t('auth.createAccount')}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-softGray">
            {t('auth.hasAccount')} {' '}
            <Link to="/login" className="text-azulBebe font-semibold hover:underline">
              {t('auth.loginHere')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
