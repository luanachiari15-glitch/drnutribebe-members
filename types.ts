
export interface Module {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
}

export interface Bonus {
  id: string;
  title: string;
  imageUrl: string;
  pdfUrl: string;
}

export interface RecommendedProduct {
  id: string;
  imageUrl: string;
  link: string;
}

export interface BabyProfile {
  name: string;
  birthDate: string;
  method: 'blw' | 'traditional' | 'mixed';
  restrictions: string[];
}

export interface Meal {
  id: string;
  type: 'lunch' | 'dinner' | 'snack';
  title: string;
  ingredients: string[];
  category: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  completedModules: string[];
  baby?: BabyProfile;
}
