

// A pesar de que sí, es genérica, el utilizar
// el tipo any perdemos muchas funcionalidades del intellisense
export const printObj = ( argument: any ) => {
    console.log( argument );
}

export function genericFnAny( arg: any ){
    return arg;
}

// Declaración correcta de una generic
export function genericFn<T>( arg: T ):T {
    return arg;
}
export const genericFnArrow = <T>( arg: T ):T => arg;