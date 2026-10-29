import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  @Input() backgroundImage = '';
  @Input() alignment: 'center' | 'left' = 'center';
  @Input() title = '';
  @Input() subtitle = '';
}
