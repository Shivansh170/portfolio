import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="tech-icon-wrapper" [ngSwitch]="normalizedName">
      <!-- Angular -->
      <svg *ngSwitchCase="'angular'" class="tech-svg" viewBox="0 0 250 250">
        <polygon fill="#DD0031" points="125,30 125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,230 203.9,186.3 218.1,63.2"/>
        <polygon fill="#C3002F" points="125,30 125,52.2 125,52.1 125,153.4 125,153.4 125,230 125,230 203.9,186.3 218.1,63.2 125,30"/>
        <path fill="#FFFFFF" d="M125,52.1L66.8,182.6h21.7l11.7-29.2h49.4l11.7,29.2H183L125,52.1z M142,135h-34l17-40.9L142,135z"/>
      </svg>

      <!-- React -->
      <svg *ngSwitchCase="'react'" class="tech-svg text-[#00D8FF]" viewBox="0 0 115 102" fill="currentColor">
        <ellipse cx="57.5" cy="51" rx="55" ry="21" fill="none" stroke="currentColor" stroke-width="6"/>
        <ellipse cx="57.5" cy="51" rx="55" ry="21" fill="none" stroke="currentColor" stroke-width="6" transform="rotate(60 57.5 51)"/>
        <ellipse cx="57.5" cy="51" rx="55" ry="21" fill="none" stroke="currentColor" stroke-width="6" transform="rotate(120 57.5 51)"/>
        <circle cx="57.5" cy="51" r="9"/>
      </svg>

      <!-- Python -->
      <svg *ngSwitchCase="'python'" class="tech-svg" viewBox="0 0 128 128">
        <path fill="#387EB8" d="M63.7 3.5c-29.5 0-27.7 12.8-27.7 12.8l.1 13.2h28.2v4H24.7S5 31.2 5 63.8c0 32.7 17.2 31.5 17.2 31.5h10.3v-14.4s-.6-17.2 17-17.2h27.9s16.3.3 16.3-15.8V19.6s2.3-16.1-30-16.1zm-15.3 9.4c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5z"/>
        <path fill="#FFE052" d="M64.3 124.5c29.5 0 27.7-12.8 27.7-12.8l-.1-13.2H63.7v-4h39.6s19.7 2.3 19.7-30.3c0-32.7-17.2-31.5-17.2-31.5H95.9v14.4s.6 17.2-17 17.2H51s-16.3-.3-16.3 15.8v26.3s-2.3 16.1 29.6 16.1zm15.3-9.4c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
      </svg>

      <!-- JavaScript -->
      <svg *ngSwitchCase="'javascript'" class="tech-svg" viewBox="0 0 128 128">
        <rect fill="#F7DF1E" width="128" height="128" rx="16"/>
        <path fill="#000000" d="M67.3 100.8c3.2 5.2 7.7 8.7 15.5 8.7 6.5 0 10.7-3.2 10.7-7.7 0-5.3-4.2-7.3-11.4-10.4-10.3-4.5-17.1-10.2-17.1-22.1 0-11 8.5-19.3 21.8-19.3 9.5 0 16.3 3.3 21 11.7l-9.9 6.3c-2.3-4.1-5-6-11.1-6-4.5 0-7.7 2.9-7.7 6.7 0 4.6 3.1 6.6 9.7 9.4 12 5.2 18.9 10.4 18.9 23.3 0 13.2-10.4 20.6-24.5 20.6-13.8 0-22.6-6.6-26.6-15.2l10.7-6.5zm-39.7 1.8l10.7-6.6c2.5 4.3 4.8 7.9 10.2 7.9 5.2 0 8.6-2 8.6-9.9V50.6H66v42.8c0 14.7-8.6 21.2-21.4 21.2-11.4 0-18.4-6-22-12l5-0.1z"/>
      </svg>

      <!-- TypeScript -->
      <svg *ngSwitchCase="'typescript'" class="tech-svg" viewBox="0 0 128 128">
        <rect fill="#3178C6" width="128" height="128" rx="16"/>
        <path fill="#FFFFFF" d="M67 101.4c3.4 5.3 8.3 8.9 16.6 8.9 7 0 11.5-3.3 11.5-7.9 0-5.4-4.5-7.5-12.2-10.7-11-4.6-18.3-10.4-18.3-22.6 0-11.3 9.1-19.8 23.4-19.8 10.2 0 17.5 3.4 22.5 12l-10.6 6.5c-2.5-4.2-5.4-6.2-11.9-6.2-4.8 0-8.3 3-8.3 6.9 0 4.7 3.3 6.8 10.4 9.6 12.9 5.3 20.3 10.7 20.3 23.9 0 13.5-11.2 21.1-26.3 21.1-14.8 0-24.2-6.8-28.5-15.6L67 101.4zm-44.5-38.6h17.9v48.6H54V62.8h17.9V49.6H22.5v13.2z"/>
      </svg>

      <!-- FastAPI -->
      <svg *ngSwitchCase="'fastapi'" class="tech-svg" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="64" fill="#059669"/>
        <path fill="#FFFFFF" d="M68.5 22L36 71h25.5l-4 35L92 57H64.5l4-35z"/>
      </svg>

      <!-- Java -->
      <svg *ngSwitchCase="'java'" class="tech-svg" viewBox="0 0 128 128">
        <path fill="#E76F00" d="M47.7 87.8s-7.1 3.5 5 4.8c14.7 1.6 22.3 1.3 38.6-1.9 0 0 4.7 2.9 11.3 5.4-38.3 14.5-81.5-3-54.9-8.3zm-3.4-14.2s-7.9 4.8 4.2 6c15.7 1.6 26.6 2 48.5-2.7 0 0 3.3 2.3 8.3 4.2-45.7 13.1-89.9-1.9-61-7.5zm19.6-32.9s-14.7 14.5 13.7 29.5c0 0 6.6-6.4-5.3-13.6-9.8-6-7.8-11.2-8.4-15.9zm27.4 39.4s4 3.1 7.7 4.5c-30.8 17.5-70.5 9.3-70.9 9.1-1.3-.6 1.7-2.3 3.3-3.1 20.4 2.8 44.8 2.4 59.9-10.5z"/>
        <path fill="#5382A1" d="M78.6 37.1c6.5 7.5-4.8 14.4-4.8 14.4s12.5-6.5 6.7-18.5c-5.4-11.3-17.7-15.5-17.7-15.5s9.7 5.1 15.8 19.6zm-17.4-23.7c4.6 4.9-3.4 9.5-3.4 9.5s8.3-4.3 4.4-12.2c-3.6-7.5-11.7-10.2-11.7-10.2s6.4 3.3 10.7 12.9z"/>
      </svg>

      <!-- HTML5 -->
      <svg *ngSwitchCase="'html5'" class="tech-svg" viewBox="0 0 512 512">
        <path fill="#E44D26" d="M107.6 461l-33.2-372.4h363.2l-33.2 372.4-148.4 41.1z"/>
        <path fill="#F16529" d="M256 469.7l122.9-34.1 27.6-309.8h-150.5z"/>
        <path fill="#EBEBEB" d="M256 221.7h-56.7l-3.9-43.9h60.6v-43.9h-108.5l11.7 131.7h96.8zm0 134.6l-50.6-13.7-3.3-36.5h-44l6.4 71.9 91.5 25.4z"/>
        <path fill="#FFFFFF" d="M256 221.7h56.7l-5.4 60.3-51.3 13.9v44.9l91.5-25.4 12.3-137.6h-103.8zm0-87.8v43.9h104.5l3.9-43.9z"/>
      </svg>

      <!-- CSS3 -->
      <svg *ngSwitchCase="'css3'" class="tech-svg" viewBox="0 0 512 512">
        <path fill="#264DE4" d="M107.6 461l-33.2-372.4h363.2l-33.2 372.4-148.4 41.1z"/>
        <path fill="#2965F1" d="M256 469.7l122.9-34.1 27.6-309.8h-150.5z"/>
        <path fill="#EBEBEB" d="M256 221.7h-56.7l-3.9-43.9h60.6v-43.9h-108.5l11.7 131.7h96.8zm0 134.6l-50.6-13.7-3.3-36.5h-44l6.4 71.9 91.5 25.4z"/>
        <path fill="#FFFFFF" d="M256 221.7h56.7l-5.4 60.3-51.3 13.9v44.9l91.5-25.4 12.3-137.6h-103.8zm0-87.8v43.9h104.5l3.9-43.9z"/>
      </svg>

      <!-- Tailwind CSS -->
      <svg *ngSwitchCase="'tailwind'" class="tech-svg text-[#38BDF8]" viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 25.6c-21.3 0-34.7 10.7-40 32 8-10.7 17.3-14.7 28-12 6.1 1.5 10.4 6 15.3 10.9 7.9 8.1 17 17.5 36.7 17.5 21.3 0 34.7-10.7 40-32-8 10.7-17.3 14.7-28 12-6.1-1.5-10.4-6-15.3-10.9-7.9-8.1-17-17.5-36.7-17.5zm-40 42.7c-21.3 0-34.7 10.7-40 32 8-10.7 17.3-14.7 28-12 6.1 1.5 10.4 6 15.3 10.9 7.9 8.1 17 17.5 36.7 17.5 21.3 0 34.7-10.7 40-32-8 10.7-17.3 14.7-28 12-6.1-1.5-10.4-6-15.3-10.9-7.9-8.1-17-17.5-36.7-17.5z"/>
      </svg>

      <!-- Express.js -->
      <svg *ngSwitchCase="'express'" class="tech-svg text-slate-800" viewBox="0 0 128 128" fill="currentColor">
        <path d="M124.9 66.8c-1.3-4.8-4.4-8.8-8.8-11.4l-31.5-18.2c-7.9-4.5-17.7-4.5-25.6 0L17.5 55.4c-4.4 2.6-7.5 6.6-8.8 11.4-1.3 4.8-.7 10 1.9 14.4l31.5 54.6c3.9 6.8 11.2 11 19.1 11h63c1.6 0 3.2-.4 4.6-1.2 2.8-1.6 4.6-4.7 4.6-8V66.8h-8.5zM63.7 30.6l28.6 16.5-28.6 16.5-28.6-16.5 28.6-16.5z"/>
      </svg>

      <!-- MySQL -->
      <svg *ngSwitchCase="'mysql'" class="tech-svg" viewBox="0 0 128 128">
        <path fill="#00758F" d="M109.9 84.1c-1.8-3.4-5.2-5.7-9.1-6.1-7.8-.8-14.3 3.6-18.5 9.8-3.4 5-5.3 11-5.3 17.2h28.4c4-4.8 6.1-11 5.9-17.4-.2-1.2-.6-2.4-1.4-3.5zm-51.1-23c-3.1-6.8-8.1-12.4-14.6-16.1C32.9 38.3 17.9 44.5 12.5 57.5c-4.8 11.6-1.5 25.1 7.9 33.2 6.6 5.7 15.5 8.3 24.3 7.3 10.4-1.2 19.2-7.5 24.1-16.8 2.5-4.8 3.8-10.1 3.8-15.5 0-6.1-1.6-12.1-4.8-17.6z"/>
        <path fill="#F29111" d="M96.7 51.5c-4.3 0-8.2 2.1-10.6 5.6-2.3 3.3-3.6 7.3-3.6 11.4 0 5.4 2.2 10.4 6.1 14.1 3.5 3.3 8.3 5 13.2 4.6 7-.5 12.8-5.3 14.6-12.1 1.1-4.2.7-8.7-1.2-12.6-3.8-7-11-11-18.5-11z"/>
      </svg>

      <!-- MongoDB -->
      <svg *ngSwitchCase="'mongodb'" class="tech-svg" viewBox="0 0 128 128">
        <path fill="#47A248" d="M66.4 126.3c-2.4-2.8-8.4-13.8-8.4-13.8s-22.1-13-22.1-39.7c0-23.7 17.3-43.1 27.6-53.1.2 0 .4-.3.6-.5.1 0 .2.2.3.3.4.4.9 1 1.4 1.6 12 14.4 26.6 33.9 26.6 51.7 0 26.7-22.1 39.7-22.1 39.7s-3.4 11.2-3.9 13.8z"/>
        <path fill="#499D4A" d="M64.7 127.3c-.6 0-1.1-.3-1.4-.7-.5-2.6-3.8-13.5-3.8-13.5s-21.7-12.7-21.7-39.3c0-23.4 17.1-42.5 27.3-52.3 0 0 1.2 1.5 2.1 2.8 11.7 14.1 26.1 33.3 26.1 50.8 0 26.6-22.2 39.6-22.2 39.6s-4.6 10.4-6.4 12.6z"/>
      </svg>

      <!-- Git -->
      <svg *ngSwitchCase="'git'" class="tech-svg" viewBox="0 0 128 128">
        <path fill="#F05032" d="M125.7 57.6L70.4 2.3c-3-3-8-3-11 0L44.8 17c3.9 3.2 6.4 8 6.4 13.5 0 3.3-.9 6.3-2.5 8.9l14.9 14.9c2.6-1.6 5.6-2.5 8.9-2.5 9.3 0 16.9 7.6 16.9 16.9s-7.6 16.9-16.9 16.9-16.9-7.6-16.9-16.9c0-3.3.9-6.3 2.5-8.9L43.8 65c-2.6 1.6-5.6 2.5-8.9 2.5-9.3 0-16.9-7.6-16.9-16.9 0-5.8 2.9-10.9 7.4-14L10.7 51.2c-3 3-3 8 0 11l55.3 55.3c3 3 8 3 11 0l48.7-48.9c3.1-3 3.1-8 0-11z"/>
      </svg>

      <!-- GitHub -->
      <svg *ngSwitchCase="'github'" class="tech-svg text-slate-900" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>

      <!-- VS Code -->
      <svg *ngSwitchCase="'vscode'" class="tech-svg" viewBox="0 0 128 128">
        <path fill="#0065A9" d="M96.7 1.9L64.2 32.2 40.5 13.9c-2.3-1.8-5.6-1.5-7.5.8L2.4 43.1C.9 44.9.9 47.4 2.4 49.2l23.5 20.3L2.4 89.8c-1.5 1.8-1.5 4.3 0 6.1l30.6 28.4c1.9 2.3 5.2 2.6 7.5.8l23.7-18.3 32.5 30.3c3.2 3 8.3 1.8 9.9-2.3l21.2-56.1c1-2.7 1-5.7 0-8.4L106.6 4.2c-1.6-4.1-6.7-5.3-9.9-2.3z"/>
        <path fill="#007ACC" d="M106.6 4.2L64.2 43.7v49.6l42.4 39.5c3.2 3 8.3 1.8 9.9-2.3l21.2-56.1c1-2.7 1-5.7 0-8.4L116.5 6.5c-1.6-4.1-6.7-5.3-9.9-2.3z"/>
        <path fill="#1F9CF0" d="M64.2 43.7L40.5 13.9c-2.3-1.8-5.6-1.5-7.5.8L2.4 43.1C.9 44.9.9 47.4 2.4 49.2l23.5 20.3 38.3-25.8z"/>
      </svg>

      <!-- Postman -->
      <svg *ngSwitchCase="'postman'" class="tech-svg" viewBox="0 0 128 128">
        <circle cx="64" cy="64" r="64" fill="#FF6C37"/>
        <path fill="#FFFFFF" d="M91.8 38.6c-4.4-6.4-11.8-10.6-20.1-10.6-13.4 0-24.3 10.9-24.3 24.3 0 3.3.7 6.4 1.9 9.3l-24.6 24.6c-.6.6-.9 1.4-.9 2.3 0 1.8 1.4 3.2 3.2 3.2.9 0 1.7-.3 2.3-.9l24.6-24.6c2.8 1.2 6 1.9 9.3 1.9 13.4 0 24.3-10.9 24.3-24.3 0-2.8-.5-5.5-1.4-8z"/>
      </svg>

      <!-- ThunderClient -->
      <svg *ngSwitchCase="'thunder'" class="tech-svg text-[#6C5CE7]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h7v8l11-12h-8V2z"/>
      </svg>

      <!-- Tour.js -->
      <svg *ngSwitchCase="'tour'" class="tech-svg text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>

      <!-- Vercel -->
      <svg *ngSwitchCase="'vercel'" class="tech-svg text-slate-900" viewBox="0 0 116 100" fill="currentColor">
        <polygon points="58 0 116 100 0 100"/>
      </svg>

      <!-- Render -->
      <svg *ngSwitchCase="'render'" class="tech-svg text-[#46E3B7]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5-7 3.5-7-3.5 7-3.5zM4 8.8l7 3.5v7l-7-3.5v-7zm9 10.5v-7l7-3.5v7l-7 3.5z"/>
      </svg>

      <!-- SQL / Database -->
      <svg *ngSwitchCase="'sql'" class="tech-svg text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/>
      </svg>

      <!-- REST APIs / Network -->
      <svg *ngSwitchCase="'api'" class="tech-svg text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>

      <!-- Agile / Scrum -->
      <svg *ngSwitchCase="'agile'" class="tech-svg text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
      </svg>

      <!-- Default Code / Architecture -->
      <svg *ngSwitchDefault class="tech-svg text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    </span>
  `,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        line-height: 1;
        flex-shrink: 0;
      }
      .tech-icon-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 1.125rem;
        height: 1.125rem;
        flex-shrink: 0;
        vertical-align: middle;
      }
      .tech-svg {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `,
  ],
})
export class TechIconComponent {
  @Input() set name(val: string) {
    this.normalizedName = this.normalize(val);
  }

  normalizedName = 'default';

  private normalize(name: string): string {
    if (!name) return 'default';
    const n = name.toLowerCase();
    if (n.includes('angular')) return 'angular';
    if (n.includes('react')) return 'react';
    if (n.includes('python')) return 'python';
    if (n.includes('java') && !n.includes('script')) return 'java';
    if (n.includes('javascript') || n.includes('js (')) return 'javascript';
    if (n.includes('typescript')) return 'typescript';
    if (n.includes('fastapi')) return 'fastapi';
    if (n.includes('express')) return 'express';
    if (n.includes('tailwind')) return 'tailwind';
    if (n.includes('html')) return 'html5';
    if (n.includes('css')) return 'css3';
    if (n.includes('mysql')) return 'mysql';
    if (n.includes('mongo')) return 'mongodb';
    if (n.includes('sql')) return 'sql';
    if (n.includes('git') && !n.includes('hub')) return 'git';
    if (n.includes('github')) return 'github';
    if (n.includes('vs code') || n.includes('vscode')) return 'vscode';
    if (n.includes('postman')) return 'postman';
    if (n.includes('thunder')) return 'thunder';
    if (n.includes('tour')) return 'tour';
    if (n.includes('vercel')) return 'vercel';
    if (n.includes('render')) return 'render';
    if (n.includes('agile') || n.includes('scrum')) return 'agile';
    if (n.includes('api')) return 'api';
    return 'default';
  }
}
