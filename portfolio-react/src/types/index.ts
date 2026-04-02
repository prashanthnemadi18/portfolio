export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  domain: string;
  stack: string[];
  image: string;
  gallery?: string[];
  link?: string;
}

export interface Education {
  year: string;
  institution: string;
  degree: string;
  location: string;
  score: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface KeyAchievement {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  location: string;
}
