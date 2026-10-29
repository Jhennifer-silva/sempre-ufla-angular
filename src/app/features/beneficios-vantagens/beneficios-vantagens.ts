import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Hero } from '../../core/components/hero/hero';
import { Benefits } from "./components/benefits/benefits";
import { SecaoEntrar } from "./components/secao-entrar/secao-entrar";

@Component({
  selector: 'app-beneficios-vantagens',
  imports: [TranslateModule, Hero, Benefits, SecaoEntrar],
  templateUrl: './beneficios-vantagens.html',
  styleUrl: './beneficios-vantagens.scss',
})
export class BeneficiosVantagens {

}
