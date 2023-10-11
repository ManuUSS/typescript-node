import { printObj, genericFnAny, genericFn } from "./generics/generics";
import { Hero } from "./interfaces/hero";

// Definida como any
// printObj( 123 );
// printObj( "123" );
// printObj( [ 1, 2, 3 ] );
// printObj( { a: 1, b: 2, c: 3 } );

//? Definida como any, no posee intellisense
// console.log( genericFnAny( 3.141618 ).toFixed( 2 ) );
// console.log( genericFnAny( "3.141618" ).toFixed( 2 ) ); //! Error

//? Me ayuda con el tipado y el intellisense
// console.log( genericFn( 3.141618 ).toFixed( 2 ) );
// console.log( genericFn( "3.141618" ).toUpperCase() );


const deadPool = {
    name: 'Deadpool',
    realName: 'Wade Winston',
    dangerLevel: 130
}

console.log( genericFn<Hero>( deadPool ).dangerLevel );
