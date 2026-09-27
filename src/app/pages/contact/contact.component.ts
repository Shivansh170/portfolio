import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  readonly portfolioService = inject(PortfolioService);

  senderName = '';
  senderEmail = '';
  subject = '';
  message = '';

  readonly isSending = signal<boolean>(false);
  readonly formSubmitted = signal<boolean>(false);
  readonly copiedItem = signal<string | null>(null);

  copyValue(val: string, label: string) {
    this.portfolioService.copyToClipboard(val, label);
    this.copiedItem.set(label);
    setTimeout(() => {
      if (this.copiedItem() === label) {
        this.copiedItem.set(null);
      }
    }, 2000);
  }

  submitMessage() {
    if (!this.senderName || !this.senderEmail || !this.message) {
      this.portfolioService.showToast('Please complete all required fields.', 'warning');
      return;
    }

    this.isSending.set(true);

    setTimeout(() => {
      this.isSending.set(false);
      this.formSubmitted.set(true);
      this.portfolioService.showToast('Message sent successfully! I will get back to you soon.', 'success');
    }, 600);
  }

  resetForm() {
    this.senderName = '';
    this.senderEmail = '';
    this.subject = '';
    this.message = '';
    this.formSubmitted.set(false);
  }
}
