import { Component } from '@angular/core';
import { Hero } from "./components/hero/hero";
import { SecaoDuvidas } from "./components/secao-duvidas/secao-duvidas";

@Component({
  selector: 'app-duvidas',
  imports: [Hero, SecaoDuvidas],
  templateUrl: './duvidas.html',
  styleUrl: './duvidas.scss',
})
export class Duvidas {

}
