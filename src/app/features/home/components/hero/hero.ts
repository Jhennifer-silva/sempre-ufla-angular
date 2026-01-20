import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  entrarSig(){
    window.open('https://sig.ufla.br', '_blank');
  }
}
