import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./features/home/home').then((module) => module.Home) },
    { path: 'beneficios-vantagens', loadComponent: () => import('./features/beneficios-vantagens/beneficios-vantagens').then((module) => module.BeneficiosVantagens) },
    { path: 'duvidas', loadComponent: () => import('./features/duvidas/duvidas').then((module) => module.Duvidas) },
    { path: 'guia-acesso', loadComponent: () => import('./features/guia-acesso/guia-acesso').then((module) => module.GuiaAcesso) },
];
