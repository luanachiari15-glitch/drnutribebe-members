
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'fr' | 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  fr: {
    'nav.home': 'Accueil',
    'nav.settings': 'Paramètres',
    'nav.planner': 'Mon Plan',
    'nav.logout': 'Déconnexion',
    'nav.menu': 'Menu Principal',
    'dash.welcome': 'Bienvenue, Maman',
    'dash.subtitle': 'Tout ce dont vous avez besoin pour une diversification alimentaire sereine, nutritive et pleine d\'amour.',
    'dash.bonus': 'Bonus Exclusifs',
    'dash.recommended': 'Sélectionnés pour vous',
    'dash.feedback.title': 'Vous aimez NutriBebe ?',
    'dash.feedback.text': 'Votre avis est précieux ! Si vous avez des suggestions, des questions ou si vous souhaitez simplement nous dire à quel point vous appréciez l\'appli, nous sommes à votre écoute.',
    'dash.feedback.button': 'Contacter le Support',
    'planner.title': 'Menu de la Semaine',
    'planner.subtitle': 'Un guide personnalisé selon l\'âge et les besoins de votre bébé.',
    'planner.setup': 'Profil du Bébé',
    'planner.edit': 'Modifier le profil',
    'planner.cancel': 'Annuler',
    'planner.babyName': 'Comment s\'appelle votre petit trésor ?',
    'planner.birthDate': 'Sa date de naissance',
    'planner.method': 'Méthode choisie',
    'planner.method.blw': 'DME (Morceaux)',
    'planner.method.traditional': 'Classique (Purées)',
    'planner.method.mixed': 'Mixte',
    'planner.restrictions': 'Allergies ou aversions',
    'planner.save': 'Enregistrer le profil',
    'planner.generate': 'Générer une nouvelle semaine',
    'planner.generate.desc': 'Voulez-vous changer les repas de cette semaine ? Créons un nouveau menu de 7 jours 💛',
    'planner.menu.week': 'Menu de 7 Jours',
    'planner.shopping': 'Liste de Courses',
    'planner.day': 'Jour',
    'planner.motivation': 'Chaque bouchée est une nouvelle découverte. Vous faites un travail merveilleux ! 💛',
    'planner.disclaimer': 'Important : Ce plan est un guide nutritionnel et ne remplace pas les conseils personnalisés de votre pédiatre.',
    'planner.empty': 'Veuillez configurer le profil pour voir le menu.',
    'planner.age.month': 'mois',
    'planner.age.months': 'mois',
    'planner.milk.title': 'Toujours au lait !',
    'planner.milk.desc': 'Votre bébé a {age} mois. L\'OMS recommande l\'allaitement exclusif jusqu\'à 6 mois. Continuez l\'allaitement ou le biberon et revenez ici à ses 6 mois ! 💛',
    'settings.title': 'Préférences',
    'settings.subtitle': 'Personnalisez votre expérience.',
    'settings.lang': 'Langue',
    'settings.save': 'Enregistrer',
    'settings.saved': 'Enregistré !',
    
    'meal.lunch': 'Déjeuner',
    'meal.snack': 'Goûter',
    'meal.dinner': 'Dîner',
    'meal.ingredients_label': 'Aliments utilisés :',

    // Intro Meals (6-8m)
    'meal.intro.l1.traditional': 'Purée lisse de Potiron et Poulet',
    'meal.intro.l1.blw': 'Bâtonnets de Potiron et effiloché de Poulet',
    'meal.intro.l1.mixed': 'Purée de Potiron avec grains de Poulet',
    'meal.intro.l2.traditional': 'Purée de Patate Douce et Carotte',
    'meal.intro.l2.blw': 'Bâtonnets de Patate Douce et Carotte vapeur',
    'meal.intro.l2.mixed': 'Écrasé de Patate Douce et dés de Carotte',
    'meal.intro.l3.traditional': 'Purée de Chayote et Panais',
    'meal.intro.l3.blw': 'Fatias de Chayote et Panais fondants',
    'meal.intro.l3.mixed': 'Purée de Chayote et morceaux de Panais',
    
    'meal.intro.s1.traditional': 'Purée de Papaye',
    'meal.intro.s1.blw': 'Tranche de Papaye fondante',
    'meal.intro.s1.mixed': 'Papaye écrasée au fourchette',

    // Ingredients
    'ing.potiron': 'Potiron',
    'ing.poulet': 'Poulet',
    'ing.patateDouce': 'Patate Douce',
    'ing.carotte': 'Carotte',
    'ing.chayote': 'Chayote',
    'ing.panais': 'Panais',
    'ing.papaye': 'Papaye',
    'ing.banane': 'Banane',
    'ing.rizComplet': 'Riz Complet',
    'ing.haricots': 'Haricots',
    'ing.viandeHachee': 'Viande Hachée',

    'bonus.1.title': 'Guide visuel introduction alimentaire',
    'bonus.2.title': 'Recettes de base pour bébé',
    'bonus.3.title': 'Planner hebdomadaire imprimable',
    'module.1.title': 'Le grand départ',
    'module.1.desc': 'Tout savoir sur les premiers pas de la diversification.',
    'module.download': 'Télécharger',
    'module.exclusive': 'Exclusif pour les membres'
  },
  pt: {
    'nav.home': 'Início',
    'nav.settings': 'Configurações',
    'nav.planner': 'Meu Plano',
    'nav.logout': 'Sair',
    'nav.menu': 'Menu Principal',
    'dash.welcome': 'Olá, Mamãe',
    'dash.subtitle': 'Tudo o que você precisa para uma introdução alimentar calma, nutritiva e cheia de descobertas.',
    'dash.bonus': 'Bônus Exclusivos',
    'dash.recommended': 'Sugestões para você',
    'dash.feedback.title': 'Gostou do NutriBebe?',
    'dash.feedback.text': 'Sua opinião é fundamental para nós! Nossa equipe está pronta para te ouvir.',
    'dash.feedback.button': 'Enviar Feedback / Suporte',
    'planner.title': 'Planejador Nutri',
    'planner.subtitle': 'Um cardápio semanal de 7 dias pensado para a fase atual do seu bebê.',
    'planner.setup': 'Perfil do Bebê',
    'planner.edit': 'Editar Perfil',
    'planner.cancel': 'Cancelar',
    'planner.babyName': 'Como se chama o seu bebê?',
    'planner.birthDate': 'Data de nascimento',
    'planner.method': 'Método de Introdução',
    'planner.method.blw': 'BLW (Pedaços)',
    'planner.method.traditional': 'Tradicional (Papinhas)',
    'planner.method.mixed': 'Misto',
    'planner.restrictions': 'Restrições ou Alergias',
    'planner.save': 'Salvar Perfil',
    'planner.generate': 'Gerar Nova Semana',
    'planner.generate.desc': 'Quer variar os alimentos desta semana? Vamos criar um novo cardápio de 7 dias 💛',
    'planner.menu.week': 'Cardápio de 7 Dias',
    'planner.shopping': 'Lista de Compras',
    'planner.day': 'Dia',
    'planner.motivation': 'Cada nova cor no pratinho é um passo para uma vida saudável. Você está indo muito bem! 💛',
    'planner.disclaimer': 'Atenção: Este planejador é uma sugestão e não substitui o acompanhamento do seu pediatra.',
    'planner.empty': 'Configure o perfil para visualizar o cardápio.',
    'planner.age.month': 'mês',
    'planner.age.months': 'meses',
    'planner.milk.title': 'Ainda no leitinho!',
    'planner.milk.desc': 'Seu bebê tem {age} meses. A OMS recomenda aleitamento exclusivo até os 6 meses. Volte aqui aos 6 meses! 💛',
    'settings.title': 'Sua Conta',
    'settings.subtitle': 'Gerencie suas preferências.',
    'settings.lang': 'Idioma do App',
    'settings.save': 'Salvar Alterações',
    'settings.saved': 'Alterações salvas!',

    // Labels de refeição
    'meal.lunch': 'Almoço',
    'meal.snack': 'Lanche',
    'meal.dinner': 'Jantar',
    'meal.ingredients_label': 'Alimentos usados:',

    // --- REFEIÇÕES INTRO (6-8m) ---
    'meal.intro.l1.traditional': 'Papinha de Abóbora e Frango',
    'meal.intro.l1.blw': 'Bastões de Abóbora e Frango desfiado',
    'meal.intro.l1.mixed': 'Papinha de Abóbora com fiapos de Frango',
    'meal.intro.l2.traditional': 'Papinha de Batata Doce com Cenoura',
    'meal.intro.l2.blw': 'Batata Doce e Cenoura em cortes seguros',
    'meal.intro.l2.mixed': 'Purê de Batata Doce com Cenoura em cubinhos',
    'meal.intro.l3.traditional': 'Papinha de Chuchu com Mandioquinha',
    'meal.intro.l3.blw': 'Chuchu e Mandioquinha em fatias macias',
    'meal.intro.l3.mixed': 'Purê de Chuchu com pedaços de Mandioquinha',
    'meal.intro.l4.traditional': 'Papinha de Ervilha com Batata',
    'meal.intro.l4.blw': 'Ervilha amassada e Batata em bastões',
    'meal.intro.l4.mixed': 'Sopa de Ervilha com cubinhos de Batata',
    'meal.intro.l5.traditional': 'Papinha de Abobrinha e Carne moída',
    'meal.intro.l5.blw': 'Rodelas de Abobrinha e Carne em tiras macias',
    'meal.intro.l5.mixed': 'Purê de Abobrinha com Carne desfiada',
    'meal.intro.l6.traditional': 'Papinha de Couve-Flor e Peixe',
    'meal.intro.l6.blw': 'Floretes de Couve-Flor e Iscas de Peixe',
    'meal.intro.l6.mixed': 'Couve-Flor amassada com lascas de Peixe',
    'meal.intro.l7.traditional': 'Papinha de Brócolis e Gema de Ovo',
    'meal.intro.l7.blw': 'Floretes de Brócolis e Gema de Ovo cozida',
    'meal.intro.l7.mixed': 'Purê de Brócolis com Gema de Ovo amassada',

    'meal.intro.s1.traditional': 'Papinha de Mamão Papaia',
    'meal.intro.s1.blw': 'Fatia de Mamão Papaia',
    'meal.intro.s1.mixed': 'Mamão Papaia amassado com garfo',
    'meal.intro.s2.traditional': 'Papinha de Banana Prata',
    'meal.intro.s2.blw': 'Banana inteira descascada',
    'meal.intro.s2.mixed': 'Banana amassada com garfo',
    'meal.intro.s3.traditional': 'Purê de Abacate batido',
    'meal.intro.s3.blw': 'Fatia de Abacate maduro',
    'meal.intro.s3.mixed': 'Abacate amassado',
    'meal.intro.s4.traditional': 'Purê de Pera cozida',
    'meal.intro.s4.blw': 'Pera cozida em fatias macias',
    'meal.intro.s4.mixed': 'Pera cozida amassada',
    'meal.intro.s5.traditional': 'Purê de Manga madura',
    'meal.intro.s5.blw': 'Fatia grande de Manga',
    'meal.intro.s5.mixed': 'Manga em cubinhos macios',
    'meal.intro.s6.traditional': 'Purê de Maçã cozida',
    'meal.intro.s6.blw': 'Maçã cozida no vapor',
    'meal.intro.s6.mixed': 'Maçã cozida amassada',
    'meal.intro.s7.traditional': 'Purê de Melão batido',
    'meal.intro.s7.blw': 'Fatia de Melão bem maduro',
    'meal.intro.s7.mixed': 'Melão amassado',

    // --- REFEIÇÕES DESENVOLVIMENTO (9-11m) ---
    'meal.dev.l1.traditional': 'Arroz, Feijão e Carne moída amassadinhos',
    'meal.dev.l1.blw': 'Bolinhos de Arroz, Feijão e Iscas de Carne',
    'meal.dev.l1.mixed': 'Pratinho de Arroz, Feijão e Carne moída',

    // Ingredients
    'ing.potiron': 'Abóbora',
    'ing.poulet': 'Frango',
    'ing.patateDouce': 'Batata Doce',
    'ing.carotte': 'Cenoura',
    'ing.chayote': 'Chuchu',
    'ing.panais': 'Mandioquinha',
    'ing.petitsPois': 'Ervilha',
    'ing.pommeDeTerre': 'Batata',
    'ing.papaye': 'Mamão Papaia',
    'ing.banane': 'Banana',
    'ing.pomme': 'Maçã',
    'ing.avocat': 'Abacate',
    'ing.lentillesCorail': 'Lentilha',
    'ing.epinards': 'Espinafre',
    'ing.igname': 'Inhame',
    'ing.brocoli': 'Brócolis',
    'ing.manioc': 'Mandioca',
    'ing.viandeHachee': 'Carne moída',
    'ing.choufleur': 'Couve-flor',
    'ing.jauneOeuf': 'Gema de ovo',
    'ing.rizComplet': 'Arroz Integral',
    'ing.haricots': 'Feijão',
    'ing.mango': 'Manga',
    'ing.pear': 'Pera',
    'ing.melon': 'Melão',

    'bonus.1.title': 'Guia visual de introdução alimentar',
    'bonus.2.title': 'Introdução alimentar do bebê + Receitas',
    'bonus.3.title': 'Planner de menus práticos para o bebê',
    'module.1.title': 'O Início de Tudo',
    'module.1.desc': 'Entenda a importância dos 6 meses e os primeiros passos.',
    'module.download': 'Baixar Guia',
    'module.exclusive': 'Conteúdo exclusivo'
  },
  en: {
    'nav.home': 'Home',
    'nav.settings': 'Settings',
    'nav.planner': 'My Plan',
    'nav.logout': 'Logout',
    'nav.menu': 'Main Menu',
    'dash.welcome': 'Welcome, Mom',
    'dash.subtitle': 'Everything you need for a calm, nutritious, and joyful food introduction journey.',
    'dash.bonus': 'Exclusive Bonuses',
    'dash.recommended': 'Handpicked for you',
    'dash.feedback.title': 'Loving NutriBebe?',
    'dash.feedback.text': 'Your feedback means the world to us!',
    'dash.feedback.button': 'Contact Support',
    'planner.title': 'Weekly Planner',
    'planner.subtitle': 'A 7-day personalized menu based on your baby\'s age and needs.',
    'planner.setup': 'Baby Profile',
    'planner.edit': 'Edit Profile',
    'planner.cancel': 'Cancel',
    'planner.babyName': 'What\'s your baby\'s name?',
    'planner.birthDate': 'Birth Date',
    'planner.method': 'Feeding Method',
    'planner.method.blw': 'BLW (Finger Foods)',
    'planner.method.traditional': 'Traditional (Purees)',
    'planner.method.mixed': 'Mixed',
    'planner.restrictions': 'Allergies',
    'planner.save': 'Save Profile',
    'planner.generate': 'Generate New Week',
    'planner.generate.desc': 'Want to vary the foods? Create a new 7-day menu 💛',
    'planner.menu.week': '7-Day Menu',
    'planner.shopping': 'Shopping List',
    'planner.day': 'Day',
    'planner.motivation': 'Every new flavor is a discovery! 💛',
    'planner.disclaimer': 'Important: This is a guide and does not replace your pediatrician\'s advice.',
    'planner.empty': 'Setup profile to see your menu.',
    'planner.age.month': 'month',
    'planner.age.months': 'months',
    'planner.milk.title': 'Still on milk!',
    'planner.milk.desc': 'Your baby is {age} months old. WHO recommends exclusive breastfeeding until 6 months. 💛',
    'settings.title': 'Account',
    'settings.subtitle': 'Manage your preferences.',
    'settings.lang': 'Language',
    'settings.save': 'Save',
    'settings.saved': 'Saved!',

    'meal.lunch': 'Lunch',
    'meal.snack': 'Snack',
    'meal.dinner': 'Dinner',
    'meal.ingredients_label': 'Ingredients used:',

    'meal.intro.l1.traditional': 'Smooth Pumpkin and Chicken Puree',
    'meal.intro.l1.blw': 'Pumpkin sticks and shredded Chicken',
    'meal.intro.l1.mixed': 'Pumpkin Puree with Chicken threads',

    'ing.potiron': 'Pumpkin',
    'ing.poulet': 'Chicken',
    'ing.patateDouce': 'Sweet Potato',
    'ing.carotte': 'Carrot',
    'ing.chayote': 'Chayote',
    'ing.panais': 'Parsnip',
    'ing.papaye': 'Papaya',
    'ing.banane': 'Banana',
    'ing.rizComplet': 'Brown Rice',
    'ing.haricots': 'Beans',
    'ing.viandeHachee': 'Ground Beef',

    'bonus.1.title': 'Visual guide to feeding',
    'bonus.2.title': 'Baby feeding + Recipes',
    'bonus.3.title': 'Practical baby meal planner',
    'module.1.title': 'The Great Start',
    'module.1.desc': 'Understand the importance of the 6-month rule.',
    'module.download': 'Download',
    'module.exclusive': 'Exclusive content'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    return (localStorage.getItem('nutribebe-lang') as Language) || 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('nutribebe-lang', lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
