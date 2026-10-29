import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomButton } from '../../core/components/custom-button/custom-button';
import { Hero } from '../../core/components/hero/hero';
import { Benefits } from './components/benefits/benefits';
import { AjudaUniversidade } from "./components/ajuda-universidade/ajuda-universidade";
import { SecaoEntrar } from "./components/secao-entrar/secao-entrar";

@Component({
  selector: 'app-home',
  imports: [TranslateModule, CustomButton, Hero, Benefits, AjudaUniversidade, SecaoEntrar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  entrarSig() {
    window.open('https://sig.ufla.br', '_blank');
  }
}
