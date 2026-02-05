import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [CommonModule],
  template: `
  <div class="accordion-item" [class.active]="isOpen">
    <button class="accordion-header" (click)="toggle()">
      <span class="icon">{{ isOpen ? '-' : '+' }}</span>
      <span class="title">{{ title }}</span>
    </button>
    
    <div class="accordion-collapse" [class.open]="isOpen">
      <div class="accordion-body">
        <div class="content-wrapper">
           <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./accordion.scss']
})
export class Accordion {
  @Input() title: string = '';
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}