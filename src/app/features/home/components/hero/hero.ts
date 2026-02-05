import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomButton } from "../../../../core/components/custom-button/custom-button";

@Component({
  selector: 'app-hero',
  imports: [TranslateModule, CustomButton],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  entrarSig(){
    window.open('https://sig.ufla.br', '_blank');
  }
}
