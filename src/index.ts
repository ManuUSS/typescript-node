import { printObj, genericFnAny } from "./generics/generics";

// Definida como any
printObj( 123 );
printObj( "123" );
printObj( [ 1, 2, 3 ] );
printObj( { a: 1, b: 2, c: 3 } );

// Definida como any, no posee intellisense
console.log( genericFnAny( 3.141618 ).toFixed( 2 ) );
// console.log( genericFnAny( "3.141618" ).toFixed( 2 ) ); //! Error