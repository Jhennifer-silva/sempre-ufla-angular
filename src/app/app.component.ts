import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Navbar } from "./core/components/navbar/navbar";
import { Footer } from "./core/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sempre-ufla-angular';

  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['pt', 'en']);
    this.translate.setDefaultLang('pt');

    const idiomaSalvo = localStorage.getItem('language');

    if (idiomaSalvo) {
      this.translate.use(idiomaSalvo);
    } else {
      const browserLang = this.translate.getBrowserLang();
      const langToUse = browserLang?.match(/en|pt/) ? browserLang : 'pt';
      this.translate.use(langToUse);
    }
  }
}