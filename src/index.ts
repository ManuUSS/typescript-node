import { getPoke } from './generics/get-pokemon';


getPoke( 4 )
    .then(( value ) => console.log( value ))
    .catch(( err ) => console.error( err ))
