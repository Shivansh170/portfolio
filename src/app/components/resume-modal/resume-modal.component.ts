import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-resume-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume-modal.component.html',
  styleUrl: './resume-modal.component.css',
})
export class ResumeModalComponent {
  readonly portfolioService = inject(PortfolioService);

  printResume() {
    const resumeElement = document.getElementById('resumeBody');
    if (!resumeElement) {
      window.print();
      return;
    }

    // Open dedicated print window to avoid modal overflow/shrink/overlap bugs
    const printWindow = window.open('', '_blank', 'width=850,height=1100');
    if (!printWindow) {
      window.print();
      return;
    }

    const resumeContent = resumeElement.innerHTML;

    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <title>Shivansh Lavaniya - Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
          <style>
            @page {
              size: A4;
              margin: 15mm 15mm;
            }
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
              color: #1e293b;
              background: #ffffff;
              line-height: 1.5;
              font-size: 13px;
              padding: 0;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .resume-wrapper {
              max-width: 100%;
              margin: 0 auto;
            }
            h1 {
              font-size: 24px;
              font-weight: 700;
              color: #0f172a;
              margin-bottom: 4px;
            }
            h2 {
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.08em;
              font-weight: 700;
              color: #0f172a;
              border-bottom: 1.5px solid #e2e8f0;
              padding-bottom: 4px;
              margin-top: 14px;
              margin-bottom: 8px;
            }
            h3 {
              font-size: 13px;
              font-weight: 700;
              color: #0f172a;
            }
            a {
              color: #ea580c;
              text-decoration: none;
            }
            .font-mono {
              font-family: 'JetBrains Mono', monospace;
            }
            .border-b {
              border-bottom: 1px solid #e2e8f0;
              padding-bottom: 8px;
              margin-bottom: 12px;
            }
            .flex {
              display: flex;
            }
            .flex-col {
              display: flex;
              flex-direction: column;
            }
            .flex-wrap {
              flex-wrap: wrap;
            }
            .items-center {
              align-items: center;
            }
            .items-baseline {
              align-items: baseline;
            }
            .justify-between {
              justify-content: space-between;
            }
            .gap-x-3 {
              column-gap: 12px;
            }
            .gap-y-1 {
              row-gap: 4px;
            }
            .space-y-4 > * + * {
              margin-top: 12px;
            }
            .space-y-3 > * + * {
              margin-top: 10px;
            }
            .space-y-1\\.5 > * + * {
              margin-top: 5px;
            }
            .space-y-1 > * + * {
              margin-top: 4px;
            }
            .space-y-6 > * + * {
              margin-top: 14px;
            }
            ul {
              padding-left: 18px;
              margin-top: 4px;
              margin-bottom: 6px;
            }
            li {
              font-size: 12px;
              color: #334155;
              margin-bottom: 3px;
              line-height: 1.45;
            }
            .text-xs {
              font-size: 11px;
            }
            .text-sm {
              font-size: 12.5px;
            }
            .text-slate-900 {
              color: #0f172a;
            }
            .text-slate-800 {
              color: #1e293b;
            }
            .text-slate-700 {
              color: #334155;
            }
            .text-slate-600 {
              color: #475569;
            }
            .text-slate-500 {
              color: #64748b;
            }
            .text-orange-600 {
              color: #ea580c;
            }
            .font-bold {
              font-weight: 700;
            }
            .font-semibold {
              font-weight: 600;
            }
            .font-medium {
              font-weight: 500;
            }
            .font-normal {
              font-weight: 400;
            }
            /* Avoid page break right inside an item */
            .space-y-4 > div, .space-y-3 > div {
              page-break-inside: avoid;
              break-inside: avoid;
            }
          </style>
        </head>
        <body>
          <div class="resume-wrapper">
            ${resumeContent}
          </div>
          <script>
            window.onload = function() {
              window.focus();
              setTimeout(function() {
                window.print();
                window.close();
              }, 300);
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  }
}
