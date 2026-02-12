
import { Module, Bonus, RecommendedProduct } from './types';

export const MODULES: Module[] = [
  {
    id: '1',
    title: 'module.1.title',
    description: 'module.1.desc',
    imageUrl: 'https://i.imgur.com/p1LIu0N.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1jmYXLqvZKRxl3_CaYAcXCJSteyvMDnb_/view?usp=sharing'
  },
  {
    id: '2',
    title: 'module.2.title',
    description: 'module.2.desc',
    imageUrl: 'https://i.imgur.com/fmJBPDk.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1y3fIHzLcXc9PelY8dX8lK1kB6mL9KoIi/view?usp=sharing'
  },
  {
    id: '3',
    title: 'module.3.title',
    description: 'module.3.desc',
    imageUrl: 'https://i.imgur.com/klJ23aB.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1PInfwzXcUMb0iDLwugwts9T9cFNixTkd/view?usp=sharing'
  },
  {
    id: '4',
    title: 'module.4.title',
    description: 'module.4.desc',
    imageUrl: 'https://i.imgur.com/CNbCc6z.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1JNWePpYTdggbHL5zycbat7EAbncZnmVW/view?usp=sharing'
  },
  {
    id: '5',
    title: 'module.5.title',
    description: 'module.5.desc',
    imageUrl: 'https://i.imgur.com/PVwQuF6.jpg',
    pdfUrl: 'https://drive.google.com/file/d/19X3dqlG2tnD33943eCGQKHzUbQh1kbqb/view?usp=sharing'
  },
  {
    id: '6',
    title: 'module.6.title',
    description: 'module.6.desc',
    imageUrl: 'https://i.imgur.com/5c3vSXE.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1_T2sNHvSDpj88Z7VKQGUyHzb3m6_Gtcd/view?usp=sharing'
  },
  {
    id: '7',
    title: 'module.7.title',
    description: 'module.7.desc',
    imageUrl: 'https://i.imgur.com/aEbDBek.jpg',
    pdfUrl: 'https://drive.google.com/file/d/181L1jPJA6BuZLpqH6HXth5eT5eOHD7hm/view?usp=sharing'
  },
  {
    id: '8',
    title: 'module.8.title',
    description: 'module.8.desc',
    imageUrl: 'https://i.imgur.com/cdZk62J.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1Ax7frJW5sGXkBqXHPdP2anSyCQ_Fv7gi/view?usp=sharing'
  }
];

export const BONUSES: Bonus[] = [
  {
    id: 'b1',
    title: 'bonus.1.title',
    imageUrl: 'https://i.imgur.com/HLLjaNN.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1c52VUYoWOd-6nMdVCo9z-zXIiZRXK0oJ/view?usp=sharing'
  },
  {
    id: 'b2',
    title: 'bonus.2.title',
    imageUrl: 'https://i.imgur.com/gwx7TNX.jpg',
    pdfUrl: 'https://drive.google.com/file/d/15t0Z8YCJcxcUvyi1vi5fB9cpDd3tPANC/view?usp=sharing'
  },
  {
    id: 'b3',
    title: 'bonus.3.title',
    imageUrl: 'https://i.imgur.com/mhnizt9.jpg',
    pdfUrl: 'https://drive.google.com/file/d/1T73PzIT2bOZfe0emqW5TLdJ1k19-TtjZ/view?usp=sharing'
  }
];

export const RECOMMENDED_PRODUCTS: RecommendedProduct[] = [
  {
    id: 'r1',
    title: 'prod.1.title',
    imageUrl: 'https://i.imgur.com/uJqsDn4.jpg',
    link: 'https://pay.hotmart.com/T104383998V?off=6j3d0s20'
  },
  {
    id: 'r2',
    title: 'prod.2.title',
    imageUrl: 'https://i.imgur.com/crTeSoW.jpg',
    link: 'https://pay.hotmart.com/U104384714G?off=w8voo3zf'
  },
  {
    id: 'r3',
    title: 'prod.3.title',
    imageUrl: 'https://i.imgur.com/8tMog85.jpg',
    link: 'https://pay.hotmart.com/J104384857P?off=2p2rilsg'
  },
  {
    id: 'r4',
    title: 'prod.4.title',
    imageUrl: 'https://i.imgur.com/BwyHfug.jpg',
    link: 'https://pay.hotmart.com/X104384910F?off=w470umc0'
  },
  {
    id: 'r5',
    title: 'prod.5.title',
    imageUrl: 'https://i.imgur.com/xVainV8.jpg',
    link: 'https://pay.hotmart.com/K104385084G?off=k1g4hqm5'
  }
];

export const MEAL_POOL = {
  intro: { 
    lunch: [
      { id: 'meal.l1', ingredients: ['ing.potiron', 'ing.poulet', 'ing.patateDouce'] },
      { id: 'meal.l2', ingredients: ['ing.carotte', 'ing.riz', 'ing.viandeHachee'] },
      { id: 'meal.l3', ingredients: ['ing.chayote', 'ing.haricots', 'ing.pommeDeTerre'] },
      { id: 'meal.l4', ingredients: ['ing.petitsPois', 'ing.oeuf', 'ing.brocoli'] },
      { id: 'meal.l5', ingredients: ['ing.abobrinha', 'ing.poissonBlanc', 'ing.mais'] },
      { id: 'meal.l6', ingredients: ['ing.choufleur', 'ing.lentilles', 'ing.potiron'] },
      { id: 'meal.l7', ingredients: ['ing.epinards', 'ing.viandeHachee', 'ing.chayote'] },
    ],
    snack: [
      { id: 'meal.s1', ingredients: ['ing.papaye'] },
      { id: 'meal.s2', ingredients: ['ing.banane'] },
      { id: 'meal.s3', ingredients: ['ing.avocat'] },
      { id: 'meal.s4', ingredients: ['ing.pear'] },
      { id: 'meal.s5', ingredients: ['ing.mango'] },
      { id: 'meal.s6', ingredients: ['ing.pomme'] },
      { id: 'meal.s7', ingredients: ['ing.melon'] },
    ],
    dinner: [
      { id: 'meal.d1', ingredients: ['ing.potiron', 'ing.avocat'] },
      { id: 'meal.d2', ingredients: ['ing.banane', 'ing.pomme'] },
      { id: 'meal.d3', ingredients: ['ing.choufleur', 'ing.pommeDeTerre'] },
      { id: 'meal.d4', ingredients: ['ing.petitsPois', 'ing.riz'] },
      { id: 'meal.d5', ingredients: ['ing.abobrinha', 'ing.chayote'] },
      { id: 'meal.d6', ingredients: ['ing.lentilles', 'ing.carotte'] },
      { id: 'meal.d7', ingredients: ['ing.brocoli', 'ing.riz'] },
    ]
  },
  developing: { 
    lunch: [
      { id: 'meal.l8', ingredients: ['ing.boeuf', 'ing.quinoa', 'ing.brocoli', 'ing.carotte'] },
      { id: 'meal.l9', ingredients: ['ing.poulet', 'ing.riz', 'ing.haricots', 'ing.epinards'] },
      { id: 'meal.l10', ingredients: ['ing.poissonBlanc', 'ing.pommeDeTerre', 'ing.petitsPois', 'ing.potiron'] },
      { id: 'meal.l11', ingredients: ['ing.oeuf', 'ing.mais', 'ing.abobrinha', 'ing.lentilles'] },
      { id: 'meal.l1', ingredients: ['ing.poulet', 'ing.patateDouce', 'ing.choufleur'] },
      { id: 'meal.l2', ingredients: ['ing.boeuf', 'ing.riz', 'ing.chayote'] },
      { id: 'meal.l3', ingredients: ['ing.haricots', 'ing.petitsPois', 'ing.carotte'] },
    ],
    snack: [
      { id: 'meal.s8', ingredients: ['ing.yaourt', 'ing.banane'] },
      { id: 'meal.s9', ingredients: ['ing.fraise', 'ing.avoine'] },
      { id: 'meal.s3', ingredients: ['ing.avocat'] },
      { id: 'meal.s4', ingredients: ['ing.pear'] },
      { id: 'meal.s5', ingredients: ['ing.mango'] },
      { id: 'meal.s6', ingredients: ['ing.pomme'] },
      { id: 'meal.s7', ingredients: ['ing.melon'] },
    ],
    dinner: [
      { id: 'meal.d8', ingredients: ['ing.soupe', 'ing.lentilles', 'ing.carotte'] },
      { id: 'meal.d9', ingredients: ['ing.pates', 'ing.tomate', 'ing.poulet'] },
      { id: 'meal.d3', ingredients: ['ing.choufleur', 'ing.pommeDeTerre'] },
      { id: 'meal.d4', ingredients: ['ing.petitsPois', 'ing.riz'] },
      { id: 'meal.d5', ingredients: ['ing.abobrinha', 'ing.chayote'] },
      { id: 'meal.d6', ingredients: ['ing.lentilles', 'ing.carotte'] },
      { id: 'meal.d7', ingredients: ['ing.brocoli', 'ing.riz'] },
    ]
  },
  family: { 
    lunch: [
      { id: 'meal.l12', ingredients: ['ing.saumon', 'ing.riz_complet', 'ing.asperges', 'ing.tomate'] },
      { id: 'meal.l13', ingredients: ['ing.poulet_roti', 'ing.pomme_de_terre', 'ing.legumes_vapeur'] },
      { id: 'meal.l8', ingredients: ['ing.boeuf', 'ing.quinoa', 'ing.brocoli'] },
      { id: 'meal.l9', ingredients: ['ing.poulet', 'ing.riz', 'ing.haricots'] },
      { id: 'meal.l10', ingredients: ['ing.poissonBlanc', 'ing.pommeDeTerre', 'ing.petitsPois'] },
      { id: 'meal.l11', ingredients: ['ing.oeuf', 'ing.mais', 'ing.abobrinha'] },
      { id: 'meal.l1', ingredients: ['ing.poulet', 'ing.patateDouce', 'ing.choufleur'] },
    ],
    snack: [
      { id: 'meal.s10', ingredients: ['ing.pain_perdu', 'ing.pomme'] },
      { id: 'meal.s11', ingredients: ['ing.gateau_banane', 'ing.avoine'] },
      { id: 'meal.s3', ingredients: ['ing.avocat'] },
      { id: 'meal.s4', ingredients: ['ing.pear'] },
      { id: 'meal.s5', ingredients: ['ing.mango'] },
      { id: 'meal.s6', ingredients: ['ing.pomme'] },
      { id: 'meal.s7', ingredients: ['ing.melon'] },
    ],
    dinner: [
      { id: 'meal.d10', ingredients: ['ing.risotto', 'ing.champignons', 'ing.epinards'] },
      { id: 'meal.d11', ingredients: ['ing.quiche', 'ing.poireaux', 'ing.fromage'] },
      { id: 'meal.d3', ingredients: ['ing.choufleur', 'ing.pommeDeTerre'] },
      { id: 'meal.d4', ingredients: ['ing.petitsPois', 'ing.riz'] },
      { id: 'meal.d5', ingredients: ['ing.abobrinha', 'ing.chayote'] },
      { id: 'meal.d6', ingredients: ['ing.lentilles', 'ing.carotte'] },
      { id: 'meal.d7', ingredients: ['ing.brocoli', 'ing.riz'] },
    ]
  }
};
