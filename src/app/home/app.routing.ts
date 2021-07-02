import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component'
import{ HomeComponent } from './home.component'
import { ModuleWithProviders } from '@angular/core';
import { RegistrarComponent } from '../registrar/registrar.component'

const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'login', component: LoginComponent },
    {path: 'registrar', component: RegistrarComponent }

];

export const routing = RouterModule.forRoot(APP_ROUTES);