

// A pesar de que sí, es genérica, el utilizar
// el tipo any perdemos muchas funcionalidades del intellisense
export const printObj = ( argument: any ) => {
    console.log( argument );
}

export function genericFn( arg: any ){
    return arg;
}