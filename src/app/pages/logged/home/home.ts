import { Component } from '@angular/core';
import { Header } from '../../../components/logged/header/header';
import { Card } from '../../../components/logged/card/card';

@Component({
  imports: [Header, Card],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
