import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { TechIconComponent } from '../../components/tech-icon/tech-icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TechIconComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  readonly portfolioService = inject(PortfolioService);
}
