import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { SignIn } from '../../../components/not-logged/sign-in/sign-in';

@Component({
  imports: [Header, SignIn],
  selector: 'app-login',
  standalone: true,
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {}
