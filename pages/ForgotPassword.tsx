
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../authContext';
import { useLanguage } from '../LanguageContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await resetPassword(email);
    setSent(true);
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto py-12 px-4 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-4xl text-rosaCha font-bold">{t('auth.forgot.title')}</h1>
        <p className="text-softGray">{t('auth.forgot.subtitle')}</p>
      </div>

      <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-white">
        {!sent ? (
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

            <button 
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-azulBebe text-white font-semibold rounded-xl hover:bg-azulBebe/90 transition-all shadow-md active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? t('auth.loading.send') : t('auth.sendLink')}
            </button>
          </form>
        ) : (
          <div className="text-center space-y-4 py-4">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">{t('auth.successReset')}</p>
            <p className="text-xs text-softGray">{t('auth.checkInbox')}</p>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link to="/login" className="text-xs text-softGray hover:text-rosaCha transition-colors">
            {t('auth.backLogin')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
