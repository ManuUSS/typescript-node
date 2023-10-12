
const printClg = ( constructor: Function ) => {
    console.log( constructor );
}

const printClgConditional = ( print: boolean = false ):Function => {
    if( print ) {
        return printClg
    }
    return () => {}
}

const blockPrototype = function( constructor: Function ) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

@blockPrototype
@printClgConditional( true )
export class Pokemon {

    public publicApi: string = "https://pokeapi.co"

    constructor ( public name: string ) {}

    savePokemon( id: number ) {
        console.log(`Pokemon guardado ${ id }`);
    }
}