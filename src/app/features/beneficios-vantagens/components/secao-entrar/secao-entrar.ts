import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CustomButton } from "../../../../core/components/custom-button/custom-button";

@Component({
  selector: 'app-secao-entrar',
  imports: [TranslateModule, CustomButton],
  templateUrl: './secao-entrar.html',
  styleUrl: './secao-entrar.scss',
})
export class SecaoEntrar {
  entrarSig(){
    window.open('https://sig.ufla.br', '_blank');
  }
}
