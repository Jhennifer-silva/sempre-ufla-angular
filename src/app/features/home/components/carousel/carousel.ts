import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss'
})
export class Carousel{

  cards = [
    { 
      title: 'Reencontre seus colegas', 
      icon: 'groups'
    },
    { 
      title: 'Biblioteca virtual', 
      icon: 'menu_book'
    },
    { 
      title: 'Networking', 
      icon: 'public'
    },
  ];
}