import { Pokemon } from "./classes/Pokemon";


const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Julio';

console.log( charmander );