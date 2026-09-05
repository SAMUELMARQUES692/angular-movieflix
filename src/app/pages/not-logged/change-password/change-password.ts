import { Component } from '@angular/core';
import { Header } from '../../../components/not-logged/header/header';
import { ForgotPassword } from '../../../components/not-logged/forgot-password/forgot-password';

@Component({
  imports: [Header, ForgotPassword],
  selector: 'app-change-password',
  styleUrl: './change-password.css',
  templateUrl: './change-password.html',
})
export class ChangePassword {}
