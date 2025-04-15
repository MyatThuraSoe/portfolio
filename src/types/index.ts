export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  demoLink?: string;
  githubLink?: string;
  image: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  duration: string;
  description: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}