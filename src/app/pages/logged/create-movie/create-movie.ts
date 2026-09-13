import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface Movie {
  name: string;
  description: string;
  releaseDate: string;
  rating: number | null;
  platform: string;
  category: string;
}

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-create-movie',
  styleUrl: './create-movie.css',
  templateUrl: './create-movie.html',
})
export class CreateMovie {
  movie: Movie = {
    name: '',
    description: '',
    releaseDate: '',
    rating: null,
    platform: '',
    category: '',
  };

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    console.log('Filme cadastrado:', this.movie);

    // TODO: chamar o service que envia pro backend, ex:
    // this.movieService.create(this.movie).subscribe(() => {
    //   form.resetForm();
    // });
  }
}