import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService } from '../../services/portfolio.service';
import { ThreeSceneComponent } from '../../components/three-scene/three-scene.component';
import { TechIconComponent } from '../../components/tech-icon/tech-icon.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ThreeSceneComponent, TechIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly portfolioService = inject(PortfolioService);
  readonly copiedEmail = signal<boolean>(false);

  copyEmail(): void {
    this.portfolioService.copyToClipboard(this.portfolioService.personalInfo.email, 'Email');
    this.copiedEmail.set(true);
    setTimeout(() => {
      this.copiedEmail.set(false);
    }, 2000);
  }
}
