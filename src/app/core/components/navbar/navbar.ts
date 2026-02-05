import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {

  isMenuCollapsed = true;
  
  isLangMenuOpen = false;

  constructor(private translate: TranslateService) {}

  changeLanguage(lang: string) {
    this.translate.use(lang);
    this.closeMenu();
  }

  toggleLangMenu() {
    this.isLangMenuOpen = !this.isLangMenuOpen;
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    
    if (this.isMenuCollapsed) {
      this.isLangMenuOpen = false;
    }
  }

  closeMenu() {
    this.isMenuCollapsed = true;
    this.isLangMenuOpen = false;
  }
}