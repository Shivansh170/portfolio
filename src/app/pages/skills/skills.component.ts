import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillCategory } from '../../models/portfolio.models';
import { TechIconComponent } from '../../components/tech-icon/tech-icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, TechIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  readonly portfolioService = inject(PortfolioService);

  readonly searchQuery = signal<string>('');
  readonly activeCategory = signal<string>('All');

  readonly categories = computed<string[]>(() => {
    return ['All', ...this.portfolioService.skillCategories.map((c) => c.category)];
  });

  readonly filteredSkillCategories = computed<SkillCategory[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    const cat = this.activeCategory();
    let categories = this.portfolioService.skillCategories;

    if (cat !== 'All') {
      categories = categories.filter((c) => c.category === cat);
    }

    if (!query) {
      return categories;
    }

    return categories
      .map((c) => ({
        ...c,
        skills: c.skills.filter((s) => s.toLowerCase().includes(query)),
      }))
      .filter((c) => c.skills.length > 0);
  });

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }
}
