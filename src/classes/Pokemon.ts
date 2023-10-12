
const printClg = ( constructor: Function ) => {
    console.log( constructor );
}

@printClg
export class Pokemon {

    public publicApi: string = "https://pokeapi.co"

    constructor ( public name: string ) {}
}