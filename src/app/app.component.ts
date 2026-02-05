import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from "./core/components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sempre-ufla-angular';

  private translate = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('pt');

    this.translate.use('pt'); 
    
    this.translate.addLangs(['pt', 'en']);
  }
}