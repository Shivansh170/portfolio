import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { ProjectItem } from '../../models/portfolio.models';
import { TechIconComponent } from '../../components/tech-icon/tech-icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  readonly portfolioService = inject(PortfolioService);

  readonly categories = ['All', 'Full Stack', 'MERN Stack'] as const;
  readonly selectedFilter = signal<string>('All');
  readonly expandedProjectId = signal<string | null>('gaadiguru');

  readonly filteredProjects = computed<ProjectItem[]>(() => {
    const filter = this.selectedFilter();
    const all = this.portfolioService.projects;
    if (filter === 'All') return all;
    return all.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));
  });

  setFilter(cat: string): void {
    this.selectedFilter.set(cat);
  }

  toggleExpand(id: string): void {
    this.expandedProjectId.update((curr) => (curr === id ? null : id));
  }
}
