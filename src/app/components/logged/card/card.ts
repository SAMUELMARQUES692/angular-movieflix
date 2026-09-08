import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgIf, NgClass] ,
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  @Input() title!: string;
  @Input() description!: string;
  @Input() duration!: string;
  @Input() ageRating!: string;
  @Input() approvalRating!: number;
  @Input() providerLogo!: string;
  @Input() isTop10 = false;


  getRatingClass(): string {
    return this.approvalRating >= 50 ? 'rating-good' : 'rating-bad';
  }
}
