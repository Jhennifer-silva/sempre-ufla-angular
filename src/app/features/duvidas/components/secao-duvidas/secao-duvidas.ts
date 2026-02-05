import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Accordion } from "../../../../core/components/accordion/accordion";

@Component({
  selector: 'app-secao-duvidas',
  imports: [TranslateModule, Accordion],
  templateUrl: './secao-duvidas.html',
  styleUrl: './secao-duvidas.scss',
})
export class SecaoDuvidas {

}
