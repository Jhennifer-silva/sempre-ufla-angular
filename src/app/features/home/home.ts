import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Benefits } from './components/benefits/benefits';
import { AjudaUniversidade } from "./components/ajuda-universidade/ajuda-universidade";
import { SecaoEntrar } from "./components/secao-entrar/secao-entrar";

@Component({
  selector: 'app-home',
  imports: [Hero, Benefits, AjudaUniversidade, SecaoEntrar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
