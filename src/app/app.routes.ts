import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Shivansh Lavaniya | Full Stack Engineer',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'projects',
    title: 'Projects | Shivansh Lavaniya',
    loadComponent: () => import('./pages/projects/projects.component').then((m) => m.ProjectsComponent),
  },
  {
    path: 'experience',
    title: 'Experience & Education | Shivansh Lavaniya',
    loadComponent: () => import('./pages/experience/experience.component').then((m) => m.ExperienceComponent),
  },
  {
    path: 'skills',
    title: 'Skills | Shivansh Lavaniya',
    loadComponent: () => import('./pages/skills/skills.component').then((m) => m.SkillsComponent),
  },
  {
    path: 'contact',
    title: 'Contact | Shivansh Lavaniya',
    loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
