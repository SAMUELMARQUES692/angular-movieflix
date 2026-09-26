import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../components/logged/header/header';
import { Card } from '../../../components/logged/card/card';
import { Movie } from '../../../interface/movie';

@Component({
  imports: [CommonModule, Header, Card],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})

export class Home {
  movies: Movie[] = [
      {
          title: 'O Poderoso Chefão',
          description: 'Don Corleone, chefe da máfia, precisa passar o legado para seu filho Michael, que reluta em assumir os negócios da família.',
          duration: '2:55h',
          ageRating: 'Somente +18',
          approvalRating: 67,
          providerLogo: '/img/patrocinadores/netflix-logo.webp',
          isTop10: true
      },
      {
          title: 'Interestelar',
          description: 'Um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade.',
          duration: '2:49h',
          ageRating: '+12',
          approvalRating: 89,
          providerLogo: '/img/patrocinadores/netflix-logo.webp',
          isTop10: true
      },
      {
          title: 'Cidade de Deus',
          description: 'Buscapé cresce em meio à violência de uma comunidade carioca e encontra na fotografia uma saída.',
          duration: '2:10h',
          ageRating: 'Somente +18',
          approvalRating: 92,
          providerLogo: '/img/patrocinadores/netflix-logo.webp',
          isTop10: false
      },
      {
          title: 'Matrix',
          description: 'Neo descobre que o mundo em que vive é uma simulação e se junta à resistência contra as máquinas.',
          duration: '2:16h',
          ageRating: '+14',
          approvalRating: 85,
          providerLogo: '/img/patrocinadores/netflix-logo.webp',
          isTop10: true
      },
      {
          title: 'Parasita',
          description: 'Uma família pobre se infiltra aos poucos na vida de uma família rica, até que tudo sai do controle.',
          duration: '2:12h',
          ageRating: '+16',
          approvalRating: 94,
          providerLogo: '/img/patrocinadores/netflix-logo.webp',
          isTop10: false
      },
      {
          title: 'Toy Story',
          description: 'Woody sente seu posto de brinquedo favorito ameaçado com a chegada do astronauta Buzz Lightyear.',
          duration: '1:21h',
          ageRating: 'Livre',
          approvalRating: 96,
          providerLogo: '/img/patrocinadores/netflix-logo.webp',
          isTop10: false
      }
  ];

}
