
export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureSection {
  title: string;
  subtitle?: string;
  content: string[];
  imageUrl: string;
  imageAlt: string;
  reverse?: boolean;
}
