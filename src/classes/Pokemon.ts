
const printClg = ( constructor: Function ) => {
    console.log( constructor );
}

const printClgConditional = ( print: boolean = false ):Function => {
    if( print ) {
        return printClg
    }
    return () => {}
}
@printClgConditional( true )
export class Pokemon {

    public publicApi: string = "https://pokeapi.co"

    constructor ( public name: string ) {}
}