
import React, { useState } from 'react';
import { useLanguage, Language } from '../LanguageContext';

const Settings: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [tempLang, setTempLang] = useState<Language>(language);
  const [showSaved, setShowSaved] = useState(false);

  const handleSave = () => {
    setLanguage(tempLang);
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-6">
      <header className="text-center space-y-2">
        <h1 className="font-serif text-3xl md:text-4xl text-gray-800">{t('settings.title')}</h1>
        <p className="text-softGray text-sm">{t('settings.subtitle')}</p>
      </header>

      <div className="space-y-6">
        {/* Idioma do App */}
        <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-white/50 space-y-4">
          <label className="text-[10px] uppercase tracking-widest font-bold text-softGray block">
            {t('settings.lang')}
          </label>
          <select 
            value={tempLang}
            onChange={(e) => setTempLang(e.target.value as Language)}
            className="w-full bg-nude/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-azulBebe outline-none cursor-pointer"
          >
            <option value="fr">Français</option>
            <option value="pt">Português (Brasil)</option>
            <option value="en">English</option>
          </select>
        </div>

        {/* Botão Salvar */}
        <div className="flex flex-col items-center gap-4 pt-2">
          <button 
            onClick={handleSave}
            className="px-12 py-4 bg-rosaCha text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-rosaCha/90 transition-all active:scale-95"
          >
            {t('settings.save')}
          </button>
          {showSaved && (
            <p className="text-xs text-green-500 animate-bounce">{t('settings.saved')}</p>
          )}
        </div>

        <div className="pt-12 text-center text-[10px] text-softGray/40 uppercase tracking-[0.2em]">
          NutriBebe &bull; v1.2.0
        </div>
      </div>
    </div>
  );
};

export default Settings;
