import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn',
  imports: [CommonModule, RouterModule],
  templateUrl: './custom-button.html',
  styleUrls: ['./custom-button.scss']
})
export class CustomButton {
  @Input() texto: string = '';
  @Input() rota: string | null = null;
  @Input() variant: 'primary-green' | 'secondary-green' | 'primary-blue' | 'secondary-blue' = 'primary-blue';
}