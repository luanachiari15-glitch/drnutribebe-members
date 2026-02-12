
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { BabyProfile, Meal } from '../types';
import { MEAL_POOL } from '../constants';

const Planner: React.FC = () => {
  const { t } = useLanguage();
  const [baby, setBaby] = useState<BabyProfile | null>(() => {
    const saved = localStorage.getItem('nutribebe-baby');
    return saved ? JSON.parse(saved) : null;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [menuSeed, setMenuSeed] = useState(() => Number(localStorage.getItem('nutribebe-menu-seed')) || 0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [activeTab, setActiveTab] = useState<'menu' | 'shopping'>('menu');

  const [form, setForm] = useState<BabyProfile>({
    name: '', birthDate: '', method: 'mixed', restrictions: []
  });

  const handleEdit = () => { if (baby) { setForm(baby); setIsEditing(true); } };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setBaby(form);
    localStorage.setItem('nutribebe-baby', JSON.stringify(form));
    setIsEditing(false);
  };

  const handleGenerateNewMenu = () => {
    const newSeed = Math.floor(Math.random() * 1000);
    setMenuSeed(newSeed);
    localStorage.setItem('nutribebe-menu-seed', String(newSeed));
    setSelectedDay(0);
  };

  const calculateAgeInMonths = (dateStr: string) => {
    if (!dateStr) return 0;
    const birth = new Date(dateStr);
    const today = new Date();
    let months = (today.getFullYear() - birth.getFullYear()) * 12;
    months += today.getMonth() - birth.getMonth();
    return Math.max(0, months);
  };

  const ageInMonths = baby ? calculateAgeInMonths(baby.birthDate) : 0;

  const fullWeekMenu = useMemo(() => {
    if (ageInMonths < 6) return [];
    let poolKey: 'intro' | 'developing' | 'family' = ageInMonths < 9 ? 'intro' : ageInMonths < 12 ? 'developing' : 'family';
    const pool = MEAL_POOL[poolKey];
    return Array.from({ length: 7 }, (_, d) => {
      const select = (arr: any[], offset: number) => arr.length ? arr[(menuSeed + d + offset) % arr.length] : { id: '...', ingredients: [] };
      const lunchData = select(pool.lunch, 10);
      const snackData = select(pool.snack, 20);
      const dinnerData = select(pool.dinner, 30);
      return {
        day: d + 1,
        meals: [
          { type: 'lunch', title: lunchData.id, ingredients: lunchData.ingredients },
          { type: 'snack', title: snackData.id, ingredients: snackData.ingredients },
          { type: 'dinner', title: dinnerData.id, ingredients: dinnerData.ingredients }
        ]
      };
    });
  }, [ageInMonths, menuSeed]);

  if (!baby || isEditing) {
    return (
      <div className="max-w-xl mx-auto py-8 md:py-12 px-6 space-y-12 md:space-y-16 animate-in fade-in duration-700">
        <div className="text-center space-y-4 md:space-y-6">
          <h1 className="font-serif text-3xl md:text-5xl text-deepGray font-normal">{t('planner.setup')}</h1>
          <p className="text-softGray text-xs md:text-sm font-light opacity-80">{t('planner.subtitle')}</p>
        </div>

        <form onSubmit={handleSaveProfile} className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-neutralBorder/40 shadow-minimal space-y-8 md:space-y-10">
          <div className="space-y-2 md:space-y-3">
            <label className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-softGray/60 ml-1">{t('planner.babyName')}</label>
            <input 
              type="text" required value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              className="w-full px-6 md:px-8 py-4 md:py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-rosaCha/50 outline-none transition-all text-deepGray text-sm"
              placeholder={t('planner.name_placeholder')}
            />
          </div>
          <div className="space-y-2 md:space-y-3">
            <label className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-softGray/60 ml-1">{t('planner.birthDate')}</label>
            <input 
              type="date" required value={form.birthDate}
              onChange={e => setForm({...form, birthDate: e.target.value})}
              className="w-full px-6 md:px-8 py-4 md:py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-rosaCha/50 outline-none transition-all text-deepGray text-sm"
            />
          </div>
          <div className="space-y-2 md:space-y-3">
            <label className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold text-softGray/60 ml-1">{t('planner.method')}</label>
            <select 
              value={form.method}
              onChange={e => setForm({...form, method: e.target.value as any})}
              className="w-full px-6 md:px-8 py-4 md:py-5 rounded-full bg-nude border border-neutralBorder/20 focus:border-rosaCha/50 outline-none transition-all text-deepGray text-sm appearance-none cursor-pointer"
            >
              <option value="blw">{t('planner.method.blw')}</option>
              <option value="traditional">{t('planner.method.traditional')}</option>
              <option value="mixed">{t('planner.method.mixed')}</option>
            </select>
          </div>
          <button type="submit" className="w-full py-5 md:py-6 bg-deepGray text-white text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-bold rounded-full hover:bg-rosaCha transition-all duration-700 shadow-minimal active:scale-95">
            {t('planner.save')}
          </button>
        </form>
      </div>
    );
  }

  if (ageInMonths < 6) {
    return (
      <div className="max-w-xl mx-auto py-20 px-6 text-center space-y-8">
        <div className="w-24 h-24 bg-amareloPastel/30 rounded-full flex items-center justify-center mx-auto text-softGray">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="space-y-4">
          <h2 className="font-serif text-3xl text-deepGray">{t('planner.milk.title')}</h2>
          <p className="text-softGray text-sm leading-relaxed opacity-80">{t('planner.milk.desc').replace('{age}', String(ageInMonths))}</p>
        </div>
        <button onClick={handleEdit} className="text-xs uppercase tracking-widest text-rosaCha font-bold hover:underline">{t('planner.edit')}</button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-10 md:space-y-20 py-4 md:py-8 animate-in fade-in px-4">
      <header className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
        <div className="text-center md:text-left space-y-2 md:space-y-4">
          <h1 className="font-serif text-3xl md:text-5xl text-deepGray font-normal">{baby.name}</h1>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <span className="text-[10px] font-bold text-rosaCha uppercase tracking-widest">{ageInMonths} {ageInMonths === 1 ? t('planner.age.month') : t('planner.age.months')}</span>
            <span className="w-4 h-[1px] bg-neutralBorder/50"></span>
            <span className="text-softGray text-[10px] font-medium uppercase tracking-widest">{t(`planner.method.${baby.method}`)}</span>
          </div>
        </div>
        <div className="flex gap-3 md:gap-4">
          <button onClick={handleGenerateNewMenu} className="p-3 md:p-4 border border-neutralBorder/40 rounded-full text-softGray hover:text-rosaCha transition-all shadow-sm bg-white active:scale-90" title={t('planner.generate')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
          <button onClick={handleEdit} className="p-3 md:p-4 border border-neutralBorder/40 rounded-full text-softGray hover:text-rosaCha transition-all shadow-sm bg-white active:scale-90" title={t('planner.edit')}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
          </button>
        </div>
      </header>

      <div className="space-y-8 md:space-y-12">
        <div className="flex justify-center bg-white/40 p-1 rounded-full border border-neutralBorder/30 max-w-[280px] md:max-w-sm mx-auto shadow-minimal">
          <button onClick={() => setActiveTab('menu')} className={`flex-1 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] uppercase tracking-widest font-bold transition-all ${activeTab === 'menu' ? 'bg-white text-rosaCha shadow-minimal' : 'text-softGray'}`}>{t('planner.menu.week')}</button>
          <button onClick={() => setActiveTab('shopping')} className={`flex-1 py-2.5 md:py-3 rounded-full text-[8px] md:text-[9px] uppercase tracking-widest font-bold transition-all ${activeTab === 'shopping' ? 'bg-white text-azulBebe shadow-minimal' : 'text-softGray'}`}>{t('planner.shopping')}</button>
        </div>

        {activeTab === 'menu' ? (
          <div className="space-y-8 md:space-y-16">
            <div className="relative -mx-4 px-4 overflow-hidden">
               <div className="flex flex-nowrap gap-4 md:gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
                {fullWeekMenu.map((day, idx) => (
                  <button 
                    key={idx} onClick={() => setSelectedDay(idx)}
                    className={`flex-none w-16 h-24 md:w-20 md:h-28 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-700 flex flex-col items-center justify-center snap-center ${selectedDay === idx ? 'bg-rosaCha border-rosaCha text-white shadow-elegant -translate-y-1' : 'bg-white border-neutralBorder/40 text-softGray hover:border-rosaCha/30'}`}
                  >
                    <span className="text-[7px] md:text-[8px] uppercase font-bold opacity-60 mb-1 md:mb-2">{t('planner.day')}</span>
                    <span className="text-xl md:text-3xl font-serif">{day.day}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {fullWeekMenu[selectedDay].meals.map((meal, i) => (
                <div key={i} className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-neutralBorder/30 shadow-minimal space-y-4 md:space-y-6 flex flex-col min-h-[220px]">
                  <div className="space-y-1 md:space-y-2">
                    <div className="flex items-center justify-between">
                       <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] font-bold text-rosaCha/60">{t(`meal.${meal.type}`)}</span>
                    </div>
                    <h3 className="font-serif text-lg md:text-xl text-deepGray leading-snug">{t(meal.title)}</h3>
                  </div>
                  <div className="space-y-3 pt-4 md:pt-6 border-t border-neutralBorder/10 mt-auto">
                    <span className="text-[7px] md:text-[8px] uppercase tracking-[0.2em] font-bold text-softGray/40">{t('meal.ingredients_label')}</span>
                    <div className="flex flex-wrap gap-2">
                      {meal.ingredients.map((ing, j) => (
                        <span key={j} className="px-3 py-1 bg-nude text-softGray text-[9px] md:text-[10px] rounded-full border border-neutralBorder/20">{t(ing)}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <p className="text-center text-[10px] text-softGray/60 font-light max-w-[280px] md:max-w-sm mx-auto leading-relaxed">
              {t('planner.motivation')}
            </p>
          </div>
        ) : (
          <div className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-neutralBorder/30 shadow-minimal max-w-2xl mx-auto space-y-8 md:space-y-10 animate-in fade-in">
            <h2 className="font-serif text-2xl md:text-3xl text-deepGray text-center">{t('planner.shopping')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {Array.from(new Set(fullWeekMenu.flatMap(d => d.meals.flatMap(m => m.ingredients)))).sort().map((ingKey, i) => (
                <label key={i} className="flex items-center gap-4 p-4 md:p-5 hover:bg-nude rounded-2xl md:rounded-3xl cursor-pointer transition-all border border-transparent hover:border-neutralBorder/20 group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" className="peer w-5 h-5 md:w-6 md:h-6 rounded-full border-neutralBorder/40 text-rosaCha focus:ring-rosaCha cursor-pointer" />
                  </div>
                  <span className="text-[11px] md:text-xs text-gray-700 font-medium group-hover:text-deepGray">{t(ingKey)}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Planner;
