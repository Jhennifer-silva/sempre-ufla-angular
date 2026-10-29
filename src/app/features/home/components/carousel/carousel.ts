import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { register } from 'swiper/element/bundle';
import { TranslateModule } from '@ngx-translate/core';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslateModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel{

  cards = [
  { 
    title: 'carrossel.biblioteca',
    icon: 'menu_book'
  },
  { 
    title: 'carrossel.google',
    icon: 'settings'
  },
  { 
    title: 'carrossel.email',
    icon: 'mail'
  },
  { 
    title: 'carrossel.wifi',
    icon: 'wifi'
  },
  { 
    title: 'carrossel.colegas',
    icon: 'person_search'
  },
  { 
    title: 'carrossel.ipetech',
    icon: 'business'
  }
];
}