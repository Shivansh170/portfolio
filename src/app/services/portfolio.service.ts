import { Injectable, signal } from '@angular/core';
import {
  AchievementItem,
  EducationItem,
  ExperienceItem,
  ProjectItem,
  SkillCategory,
} from '../models/portfolio.models';

export interface ToastMessage {
  id: string;
  message: string;
  type: 'success' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  readonly personalInfo = {
    name: 'Shivansh Lavaniya',
    headline: 'Full Stack Engineer',
    bio: 'Software engineer building web apps with Angular 22 and FastAPI. Currently interning at Veersa Technologies, focusing on scalable frontend architectures, RESTful API design, and intuitive user experiences.',
    phone: '+91-8267005726',
    email: 'shivanshlavaniya456@gmail.com',
    location: 'Ghaziabad, India',
    linkedin: 'https://linkedin.com/in/shivansh-lavaniya',
    linkedinDisplay: 'linkedin.com/in/shivansh-lavaniya',
    github: 'https://github.com/Shivansh170',
    githubDisplay: 'github.com/Shivansh170',
  };

  readonly toasts = signal<ToastMessage[]>([]);
  readonly isResumeModalOpen = signal<boolean>(false);

  readonly experiences: ExperienceItem[] = [
    {
      id: 'veersa',
      role: 'Full Stack Engineer Intern',
      company: 'Veersa Technologies',
      period: 'July 2026 – Present',
      location: 'Ghaziabad, India',
      type: 'Internship',
      highlights: [
        'Developing enterprise web applications using Angular 22 and FastAPI.',
        'Building responsive and reusable frontend components following modern Angular architecture.',
        'Integrating RESTful APIs and implementing client-server communication.',
        'Writing clean, maintainable, and scalable production-ready code.',
      ],
      skills: ['Angular 22', 'FastAPI', 'Python', 'TypeScript', 'REST APIs'],
    },
    {
      id: 'yourexamsaathi',
      role: 'Front End Intern',
      company: 'YourExamSaathi',
      period: 'July 2025 – Jan 2026',
      location: 'Remote, India',
      type: 'Internship',
      highlights: [
        'Built interactive product walkthroughs across diverse device viewport sizes using Tour.js.',
        'Developed responsive user interfaces with React, HTML5, and CSS.',
        'Connected frontend components to backend endpoints for seamless test flows.',
        'Collaborated in code reviews and bi-weekly agile sprint routines.',
      ],
      skills: ['React', 'Tour.js', 'HTML5', 'CSS3', 'REST APIs', 'Agile'],
    },
  ];

  readonly education: EducationItem[] = [
    {
      id: 'abes',
      institution: 'ABES Engineering College',
      degree: 'B.Tech in Computer Science & Engineering',
      period: '2023 – Present',
      location: 'Ghaziabad, India',
      score: 'CGPA: 8.4',
      details: [
        'Core coursework: Data Structures, Algorithms, Database Management Systems, Computer Networks.',
      ],
    },
    {
      id: 'pms',
      institution: 'PMS Public School',
      degree: 'Senior Secondary (Class XII)',
      period: '2022',
      location: 'Moradabad, India',
      score: '95.2% Overall (97% in PCM)',
      details: [
        'Physics, Chemistry, and Mathematics.',
      ],
    },
  ];

  readonly projects: ProjectItem[] = [
    {
      id: 'gaadiguru',
      title: 'GaadiGuru',
      tagline: 'Multi-Vehicle Discovery & Dealer Bidding Platform',
      description:
        'A full-stack marketplace for cars and bikes featuring structured vehicle specs, price calculators, side-by-side comparisons, and live dealer bidding.',
      bullets: [
        'Built modern Angular 22 interfaces with Tailwind CSS, featuring fast multi-parameter vehicle search and comparison workflows.',
        'Engineered backend REST endpoints in FastAPI for dealer authentication, inventory management, and competitive bidding.',
        'Designed normalized relational schemas on Aiven MySQL to efficiently handle quotations, specs, and user bids.',
      ],
      technologies: ['Angular 22', 'FastAPI', 'MySQL', 'Tailwind CSS', 'Python', 'TypeScript'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/Shivansh170',
      highlights: [
        { label: 'Frontend', value: 'Angular 22' },
        { label: 'Backend', value: 'FastAPI' },
        { label: 'Database', value: 'Aiven MySQL' },
        { label: 'Styling', value: 'Tailwind CSS' },
      ],
    },
    {
      id: 'bluepulse',
      title: 'BluePulse',
      tagline: 'Water Body Monitoring & Survey Application',
      description:
        'A web platform to map, track, and monitor inland water bodies across regions with role-based access for field surveyors and administrators.',
      bullets: [
        'Designed modular React.js views with role-based dashboards for field surveyors and admins.',
        'Implemented Express.js and Node.js REST services with MongoDB for survey records and report exports.',
        'Structured real-time data sync to review water test metrics and historical survey logs.',
      ],
      technologies: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'REST APIs'],
      category: 'MERN Stack',
      githubUrl: 'https://github.com/Shivansh170',
      highlights: [
        { label: 'Frontend', value: 'React.js' },
        { label: 'Backend', value: 'Express.js' },
        { label: 'Database', value: 'MongoDB' },
        { label: 'Runtime', value: 'Node.js' },
      ],
    },
  ];

  readonly skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      description: 'Languages used for core logic and queries',
      skills: ['Python', 'Java', 'SQL', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Frameworks & Frontend',
      description: 'Component architecture and UI styling',
      skills: ['Angular 22', 'React', 'FastAPI', 'Express.js', 'Tailwind CSS'],
    },
    {
      category: 'Tools & Workflow',
      description: 'Development, testing, and deployment ecosystem',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'ThunderClient', 'Vercel', 'Render'],
    },
    {
      category: 'Databases & Concepts',
      description: 'Data modeling and architecture paradigms',
      skills: ['MySQL', 'MongoDB', 'REST APIs', 'Agile / Scrum', 'Object-Oriented Design'],
    },
  ];

  readonly achievements: AchievementItem[] = [
    {
      id: 'sih-2025',
      title: 'Smart India Hackathon',
      event: 'Internal Round',
      year: '2025',
      rank: 'Top 50 Position',
      description:
        'Led a student engineering team, qualifying among the Top 50 teams out of 315 participating groups.',
      tag: 'Top 50 / 315 Teams',
    },
    {
      id: 'capgemini-hackathon',
      title: 'Capgemini Hackathon',
      event: 'National Level',
      year: '2025',
      rank: 'Top 10 Finalist',
      description:
        'Selected in the Top 10 finalist teams across India for developing an end-to-end intelligent workflow application.',
      tag: 'Top 10 Finalist (Pan-India)',
    },
  ];

  showToast(message: string, type: 'success' | 'info' | 'warning' = 'success') {
    const id = Math.random().toString(36).substring(2, 9);
    this.toasts.update((current) => [...current, { id, message, type }]);

    setTimeout(() => {
      this.dismissToast(id);
    }, 3500);
  }

  dismissToast(id: string) {
    this.toasts.update((current) => current.filter((t) => t.id !== id));
  }

  copyToClipboard(text: string, label: string) {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        this.showToast(`Copied ${label} to clipboard`, 'success');
      });
    } else {
      this.showToast(`${label}: ${text}`, 'info');
    }
  }

  openResumeModal() {
    this.isResumeModalOpen.set(true);
  }

  closeResumeModal() {
    this.isResumeModalOpen.set(false);
  }
}
