
import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../LanguageContext';
import { BabyProfile, Meal } from '../types';

// Pool robusto com 7 opções para cada tipo de refeição em cada fase
const MEAL_POOL = {
  intro: { // 6-8 meses
    lunch: [
      { id: 'meal.intro.l1', ingredients: ['ing.potiron', 'ing.poulet'] },
      { id: 'meal.intro.l2', ingredients: ['ing.patateDouce', 'ing.carotte'] },
      { id: 'meal.intro.l3', ingredients: ['ing.chayote', 'ing.panais'] },
      { id: 'meal.intro.l4', ingredients: ['ing.petitsPois', 'ing.pommeDeTerre'] },
      { id: 'meal.intro.l5', ingredients: ['ing.abobrinha', 'ing.viandeHachee'] },
      { id: 'meal.intro.l6', ingredients: ['ing.choufleur', 'ing.poissonBlanc'] },
      { id: 'meal.intro.l7', ingredients: ['ing.brocoli', 'ing.jauneOeuf'] },
    ],
    snack: [
      { id: 'meal.intro.s1', ingredients: ['ing.papaye'] },
      { id: 'meal.intro.s2', ingredients: ['ing.banane'] },
      { id: 'meal.intro.s3', ingredients: ['ing.avocat'] },
      { id: 'meal.intro.s4', ingredients: ['ing.poire'] },
      { id: 'meal.intro.s5', ingredients: ['ing.mangue'] },
      { id: 'meal.intro.s6', ingredients: ['ing.pomme'] },
      { id: 'meal.intro.s7', ingredients: ['ing.melon'] },
    ],
    dinner: [
      { id: 'meal.intro.d1', ingredients: ['ing.lentillesCorail', 'ing.epinards'] },
      { id: 'meal.intro.d1', ingredients: ['ing.igname', 'ing.brocoli'] },
      { id: 'meal.intro.d1', ingredients: ['ing.manioc', 'ing.poulet'] },
      { id: 'meal.intro.d1', ingredients: ['ing.carotte', 'ing.viandeHachee'] },
      { id: 'meal.intro.d1', ingredients: ['ing.choufleur', 'ing.epinards'] },
      { id: 'meal.intro.d1', ingredients: ['ing.patateDouce', 'ing.poisChiches'] },
      { id: 'meal.intro.d1', ingredients: ['ing.panais', 'ing.jauneOeuf'] },
    ]
  },
  developing: { // 9-11 meses
    lunch: [
      { id: 'meal.dev.l1', ingredients: ['ing.rizComplet', 'ing.haricots', 'ing.viandeHachee'] },
      { id: 'meal.dev.l1', ingredients: ['ing.patesMais', 'ing.pouletEffiloche', 'ing.tomate'] },
      { id: 'meal.dev.l1', ingredients: ['ing.poisChiches', 'ing.poissonBlanc', 'ing.azeite'] },
      { id: 'meal.dev.l1', ingredients: ['ing.rizArboreo', 'ing.potiron', 'ing.viandeIscas'] },
      { id: 'meal.dev.l1', ingredients: ['ing.couscous', 'ing.poulet', 'ing.abobrinha'] },
      { id: 'meal.dev.l1', ingredients: ['ing.betterave', 'ing.haricots', 'ing.oeuf'] },
      { id: 'meal.dev.l1', ingredients: ['ing.patateDouce', 'ing.tilapia', 'ing.petitsPois'] },
    ],
    snack: [
      { id: 'meal.dev.s2', ingredients: ['ing.mangue'] },
      { id: 'meal.dev.s2', ingredients: ['ing.poire', 'ing.cannelle'] },
      { id: 'meal.dev.s2', ingredients: ['ing.yaourtNature', 'ing.avoine'] },
      { id: 'meal.dev.s2', ingredients: ['ing.banane', 'ing.oeuf', 'ing.farineAvoine'] },
      { id: 'meal.dev.s2', ingredients: ['ing.papaye', 'ing.avoine'] },
      { id: 'meal.dev.s2', ingredients: ['ing.raisin', 'ing.fraise'] },
      { id: 'meal.dev.s2', ingredients: ['ing.pasteque'] },
    ],
    dinner: [
      { id: 'meal.dev.d3', ingredients: ['ing.rizComplet', 'ing.poulet', 'ing.pommeDeTerre'] },
      { id: 'meal.dev.d3', ingredients: ['ing.lentille', 'ing.betterave', 'ing.oeuf'] },
      { id: 'meal.dev.d3', ingredients: ['ing.patesIntegral', 'ing.viandeHachee', 'ing.tomate'] },
      { id: 'meal.dev.d3', ingredients: ['ing.igname', 'ing.brocoli', 'ing.poissonBlanc'] },
      { id: 'meal.dev.d3', ingredients: ['ing.manioc', 'ing.haricots', 'ing.epinards'] },
      { id: 'meal.dev.d3', ingredients: ['ing.rizArboreo', 'ing.choufleur', 'ing.poulet'] },
      { id: 'meal.dev.d3', ingredients: ['ing.couscous', 'ing.viandeIscas', 'ing.carotte'] },
    ]
  },
  family: { // 12-24 meses
    lunch: [
      { id: 'meal.fam.l1', ingredients: ['ing.patesIntegral', 'ing.viandeHachee', 'ing.sauceTomate'] },
      { id: 'meal.fam.l1', ingredients: ['ing.tilapia', 'ing.rizComplet', 'ing.brocoli'] },
      { id: 'meal.fam.l1', ingredients: ['ing.rizArboreo', 'ing.salmo', 'ing.limon'] },
      { id: 'meal.fam.l1', ingredients: ['ing.boeuf', 'ing.patateDouce', 'ing.petitsPois'] },
      { id: 'meal.fam.l1', ingredients: ['ing.couscous', 'ing.poulet', 'ing.tomateCerise'] },
      { id: 'meal.fam.l1', ingredients: ['ing.patesAlpha', 'ing.haricots', 'ing.viandeIscas'] },
      { id: 'meal.fam.l1', ingredients: ['ing.rizComplet', 'ing.lentille', 'ing.oeuf'] },
    ],
    snack: [
      { id: 'meal.fam.s1', ingredients: ['ing.painIntegral', 'ing.fromageFrais'] },
      { id: 'meal.fam.s1', ingredients: ['ing.raisin', 'ing.fraise', 'ing.pasteque'] },
      { id: 'meal.fam.s1', ingredients: ['ing.yaourtNature', 'ing.mangue'] },
      { id: 'meal.fam.s1', ingredients: ['ing.avoine', 'ing.banane', 'ing.oeuf'] },
      { id: 'meal.fam.s1', ingredients: ['ing.papaye', 'ing.fromageFrais'] },
      { id: 'meal.fam.s1', ingredients: ['ing.avocat', 'ing.lait'] },
      { id: 'meal.fam.s1', ingredients: ['ing.poire', 'ing.cannelle'] },
    ],
    dinner: [
      { id: 'meal.fam.d1', ingredients: ['ing.patesAlpha', 'ing.boeuf', 'ing.vagem', 'ing.panais'] },
      { id: 'meal.fam.d1', ingredients: ['ing.oeuf', 'ing.couve', 'ing.rizComplet'] },
      { id: 'meal.fam.d1', ingredients: ['ing.alhoPoro', 'ing.pommeDeTerre', 'ing.tomateCerise'] },
      { id: 'meal.fam.d1', ingredients: ['ing.couve', 'ing.oignon', 'ing.pommeDeTerre'] },
      { id: 'meal.fam.d1', ingredients: ['ing.lentille', 'ing.rizArboreo', 'ing.carotte'] },
      { id: 'meal.fam.d1', ingredients: ['ing.poulet', 'ing.epinards', 'ing.manioc'] },
      { id: 'meal.fam.d1', ingredients: ['ing.patesIntegral', 'ing.tomate', 'ing.fromageFrais'] },
    ]
  }
};

const Planner: React.FC = () => {
  const { t } = useLanguage();
  const [baby, setBaby] = useState<BabyProfile | null>(() => {
    const saved = localStorage.getItem('nutribebe-baby');
    return saved ? JSON.parse(saved) : null;
  });

  const [isEditing, setIsEditing] = useState(false);
  const [menuSeed, setMenuSeed] = useState(() => Number(localStorage.getItem('nutribebe-menu-seed')) || 0);
  const [selectedDay, setSelectedDay] = useState(0);

  const [form, setForm] = useState<BabyProfile>({
    name: '',
    birthDate: '',
    method: 'mixed',
    restrictions: []
  });

  const [activeTab, setActiveTab] = useState<'menu' | 'shopping'>('menu');

  const handleEdit = () => {
    if (baby) {
      setForm(baby);
      setIsEditing(true);
    }
  };

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

  // Gerador de Cardápio de 7 Dias
  const fullWeekMenu = useMemo(() => {
    if (ageInMonths < 6) return [];
    
    let poolKey: 'intro' | 'developing' | 'family' = 'intro';
    if (ageInMonths >= 9 && ageInMonths < 12) poolKey = 'developing';
    else if (ageInMonths >= 12) poolKey = 'family';

    const pool = MEAL_POOL[poolKey];
    const method = baby?.method || 'mixed';
    
    const week = [];
    for (let d = 0; d < 7; d++) {
      const select = (arr: any[], offset: number) => {
        const index = (menuSeed + d + offset) % arr.length;
        return arr[index];
      };

      const lunchData = select(pool.lunch, 10);
      const snackData = select(pool.snack, 20);
      const dinnerData = select(pool.dinner, 30);

      week.push({
        day: d + 1,
        meals: [
          { id: `l-${d}`, type: 'lunch', title: `${lunchData.id}.${method}`, ingredients: lunchData.ingredients },
          { id: `s-${d}`, type: 'snack', title: `${snackData.id}.${method}`, ingredients: snackData.ingredients },
          { id: `d-${d}`, type: 'dinner', title: `${dinnerData.id}.${method}`, ingredients: dinnerData.ingredients }
        ]
      });
    }
    return week;
  }, [ageInMonths, baby?.method, menuSeed]);

  if (!baby || isEditing) {
    return (
      <div className="max-w-md mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-500">
        <header className="text-center space-y-2">
          <h1 className="font-serif text-3xl text-gray-800">{isEditing ? t('planner.edit') : t('planner.setup')}</h1>
          <p className="text-softGray text-sm">{t('planner.subtitle')}</p>
        </header>

        <form onSubmit={handleSaveProfile} className="bg-white p-8 rounded-[2rem] shadow-sm border border-white space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-semibold text-softGray uppercase tracking-wider">{t('planner.babyName')}</label>
            <input 
              type="text" 
              required
              value={form.name}
              onChange={e => setForm({...form, name: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-nude/50 border-none focus:ring-2 focus:ring-rosaCha outline-none"
              placeholder="Ex: Theo"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-softGray uppercase tracking-wider">{t('planner.birthDate')}</label>
            <input 
              type="date" 
              required
              value={form.birthDate}
              onChange={e => setForm({...form, birthDate: e.target.value})}
              className="w-full px-4 py-3 rounded-xl bg-nude/50 border-none focus:ring-2 focus:ring-rosaCha outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-semibold text-softGray uppercase tracking-wider">{t('planner.method')}</label>
            <select 
              value={form.method}
              onChange={e => setForm({...form, method: e.target.value as any})}
              className="w-full px-4 py-3 rounded-xl bg-nude/50 border-none focus:ring-2 focus:ring-rosaCha outline-none"
            >
              <option value="blw">{t('planner.method.blw')}</option>
              <option value="traditional">{t('planner.method.traditional')}</option>
              <option value="mixed">{t('planner.method.mixed')}</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              type="submit"
              className="w-full py-4 bg-rosaCha text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:bg-rosaCha/90 transition-all active:scale-95"
            >
              {t('planner.save')}
            </button>
            {isEditing && (
              <button 
                type="button"
                onClick={() => setIsEditing(false)}
                className="w-full py-3 text-softGray font-medium rounded-2xl border border-gray-100 hover:bg-gray-50 transition-all"
              >
                {t('planner.cancel')}
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8 py-6">
      <header className="flex items-center justify-between px-2">
        <div>
          <h1 className="font-serif text-3xl text-gray-800">{baby.name} 🍼</h1>
          <p className="text-rosaCha font-medium text-sm">
            {ageInMonths} {ageInMonths === 1 ? t('planner.age.month') : t('planner.age.months')} • {t(`planner.method.${baby.method}`)}
          </p>
        </div>
        <button 
          onClick={handleEdit}
          className="p-2 rounded-full bg-white shadow-sm border border-gray-100 text-softGray hover:text-rosaCha transition-colors"
          title={t('planner.edit')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
      </header>

      {ageInMonths < 6 ? (
        <div className="bg-white p-12 rounded-[2.5rem] shadow-sm text-center space-y-6 border border-white">
          <div className="w-20 h-20 bg-nude rounded-full flex items-center justify-center mx-auto">
            <span className="text-3xl">🥛</span>
          </div>
          <h2 className="font-serif text-2xl text-gray-800">{t('planner.milk.title')}</h2>
          <p className="text-softGray leading-relaxed">
            {t('planner.milk.desc').replace('{age}', ageInMonths.toString())}
          </p>
        </div>
      ) : (
        <>
          <div className="bg-amareloPastel/15 p-6 rounded-[2.5rem] border border-amareloPastel/30 space-y-6 shadow-sm">
            <p className="text-sm font-medium text-gray-700 italic text-center">“{t('planner.motivation')}”</p>
            
            <div className="bg-white/60 p-4 rounded-3xl border border-white flex flex-col sm:flex-row items-center justify-between gap-4">
               <p className="text-xs text-softGray text-center sm:text-left leading-relaxed">
                 {t('planner.generate.desc')}
               </p>
               <button 
                 onClick={handleGenerateNewMenu}
                 className="flex items-center gap-2 px-6 py-2.5 bg-rosaCha text-white text-xs font-bold rounded-full shadow-md hover:bg-rosaCha/90 transition-all active:scale-95 shrink-0"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                 </svg>
                 {t('planner.generate')}
               </button>
            </div>
          </div>

          <div className="flex bg-white/50 p-1.5 rounded-full border border-gray-100 shadow-inner">
            <button 
              onClick={() => setActiveTab('menu')}
              className={`flex-1 py-3 rounded-full text-xs font-bold transition-all ${activeTab === 'menu' ? 'bg-white text-rosaCha shadow-sm' : 'text-softGray hover:text-gray-600'}`}
            >
              {t('planner.menu.week')}
            </button>
            <button 
              onClick={() => setActiveTab('shopping')}
              className={`flex-1 py-3 rounded-full text-xs font-bold transition-all ${activeTab === 'shopping' ? 'bg-white text-azulBebe shadow-sm' : 'text-softGray hover:text-gray-600'}`}
            >
              {t('planner.shopping')}
            </button>
          </div>

          {activeTab === 'menu' ? (
            <div className="space-y-6">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
                {fullWeekMenu.map((day, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setSelectedDay(idx)}
                    className={`snap-center flex-none w-14 h-14 rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${
                      selectedDay === idx 
                        ? 'bg-rosaCha border-rosaCha text-white shadow-md scale-110' 
                        : 'bg-white border-gray-100 text-softGray hover:border-rosaCha/30'
                    }`}
                  >
                    <span className="text-[10px] uppercase font-bold">{t('planner.day')}</span>
                    <span className="text-lg font-serif">{day.day}</span>
                  </button>
                ))}
              </div>

              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                {fullWeekMenu[selectedDay].meals.map((meal) => (
                  <div key={meal.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-white hover:border-rosaCha/20 transition-all">
                    <div className="flex flex-col">
                      <h3 className="font-serif text-lg text-gray-800">
                        <span className="text-rosaCha font-bold">{t(`meal.${meal.type}`)}:</span> {t(meal.title)}
                      </h3>
                      <div className="mt-2 flex items-start gap-2">
                        <span className="text-[11px] font-bold text-softGray uppercase tracking-wider shrink-0 mt-0.5">
                          {t('meal.ingredients_label')}
                        </span>
                        <p className="text-sm text-softGray/80 leading-snug">
                          {meal.ingredients.map(ing => t(ing)).join(', ')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-white space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-azulBebe/10 rounded-full flex items-center justify-center text-azulBebe">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="font-serif text-xl text-gray-800">{t('planner.shopping')}</h2>
              </div>
              <p className="text-xs text-softGray mb-4 italic">Lista consolidada da semana inteira (7 dias).</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Array.from(new Set(fullWeekMenu.flatMap(d => d.meals.flatMap(m => m.ingredients)))).map((ingKey, i) => (
                  <label key={i} className="flex items-center gap-4 p-4 hover:bg-nude/40 rounded-2xl cursor-pointer transition-all border border-transparent hover:border-azulBebe/10">
                    <input type="checkbox" className="w-5 h-5 rounded-lg border-gray-200 text-azulBebe focus:ring-azulBebe transition-all" />
                    <span className="text-sm text-gray-700 font-medium">{t(ingKey)}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <footer className="text-center pt-8 border-t border-gray-200/50 mt-12">
        <p className="text-[10px] text-softGray/50 uppercase tracking-[0.2em] px-8 leading-relaxed">
          ⚠️ {t('planner.disclaimer')}
        </p>
      </footer>
    </div>
  );
};

export default Planner;
