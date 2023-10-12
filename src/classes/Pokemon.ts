
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

function CheckValidPokemon() {
    return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
        console.log({ target, propertyKey, descriptor });
    }
}

@blockPrototype
@printClgConditional( true )
export class Pokemon {

    public publicApi: string = "https://pokeapi.co"

    constructor ( public name: string ) {}

    @CheckValidPokemon()
    savePokemon( id: number ) {
        console.log(`Pokemon guardado ${ id }`);
    }
}