import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { Benefits } from "./components/benefits/benefits";
import { SecaoEntrar } from "./components/secao-entrar/secao-entrar";

@Component({
  selector: 'app-beneficios-vantagens',
  imports: [Hero, Benefits, SecaoEntrar],
  templateUrl: './beneficios-vantagens.html',
  styleUrl: './beneficios-vantagens.scss',
})
export class BeneficiosVantagens {

}
