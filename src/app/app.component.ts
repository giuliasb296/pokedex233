import { Component } from '@angular/core';
//import { Pokemon } from 'src/modules/pokemon'
import { Pokemon } from 'src/modules/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = "../assets/logo.png";
  imgProfile: string = "../assets/imgProfile.jpg";
  links: string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];

  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu', '../assets/pikachu.png'),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Venenoso'], 'Esse é o Bulbasaur', '../assets/bulbasaur.png'),
    new Pokemon(3, 'Charmander', ['Fogo'], 'Esse é o Charmander', '../assets/charmander.png'),
    new Pokemon(3, 'Geodude', ['Pedra'], 'Esse é o Geodude', '../assets/geodude.webp'),
  ]
}


