// Importando con alias
import { Hero as HeroClass } from "./classes/Hero";
// Importando por defecto, aqui se puede usar otro nombre
import powersHero from "./classes/data/powers";

const Hero = "My Hero";

const ironman = new HeroClass('Manu', 999, 20 );
console.log( ironman );

console.log( powersHero[1] );

