import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { BeneficiosVantagens } from './features/beneficios-vantagens/beneficios-vantagens';
import { Duvidas } from './features/duvidas/duvidas';
import { GuiaAcesso } from './features/guia-acesso/guia-acesso';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'beneficios-vantagens', component: BeneficiosVantagens},
    {path: 'duvidas', component: Duvidas},
    {path: 'guia-acesso', component: GuiaAcesso},
];
