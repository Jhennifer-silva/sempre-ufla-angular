import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-guia-acesso',
  imports: [TranslateModule, MatTabsModule, MatIconModule],
  templateUrl: './guia-acesso.html',
  styleUrl: './guia-acesso.scss',
})
export class GuiaAcesso {
  opcoesRecuperacao = [
    { chave: 'senha', link: 'https://sig.ufla.br/modulos/login/nova_senha.php' },
    { chave: 'usuario', link: 'https://sig.ufla.br/modulos/login/recuperar_login.php' },
    { chave: 'formulario', link: 'https://docs.google.com/forms/d/e/1FAIpQLSevx01rXMpbYANT6urpSSth1fkKgFPuvKskXM0tzgUgvkvC0w/viewform' },
  ];

  passosPosAcesso = [
    { chave: 'passo1', },
    { chave: 'passo2', },
    { chave: 'passo3', },
  ];
}
