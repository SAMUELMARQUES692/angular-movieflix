import { Routes } from '@angular/router';
import {Login} from './pages/not-logged/home/login';
import { Registration } from './pages/not-logged/registration/registration';
import { ChangePassword } from './pages/not-logged/change-password/change-password';
import { Home } from './pages/logged/home/home';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'login', component: Login },
    {path: 'cadastre-se', component: Registration },
    {path: 'esqueci-senha', component: ChangePassword}
];
