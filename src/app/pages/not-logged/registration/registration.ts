import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { SignUp } from '../../../components/not-logged/sign-up/sign-up';

@Component({
  imports: [Header, SignUp],
  selector: 'app-registration',
  styleUrl: './registration.css',
  templateUrl: './registration.html',
})
export class Registration {}
