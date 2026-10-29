import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Hero } from '../../core/components/hero/hero';
import { SecaoDuvidas } from "./components/secao-duvidas/secao-duvidas";

@Component({
  selector: 'app-duvidas',
  imports: [TranslateModule, Hero, SecaoDuvidas],
  templateUrl: './duvidas.html',
  styleUrl: './duvidas.scss',
})
export class Duvidas {

}
