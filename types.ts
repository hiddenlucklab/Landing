export interface Review {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PackageFeature {
  text: string;
  highlight?: boolean;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  features: PackageFeature[];
  isRecommended: boolean;
  deliveryTime: string;
}