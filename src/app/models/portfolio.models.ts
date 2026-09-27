export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  badge?: string;
  highlights: string[];
  skills: string[];
  type: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  technologies: string[];
  category: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  year: string;
  rank: string;
  description: string;
  tag: string;
}
