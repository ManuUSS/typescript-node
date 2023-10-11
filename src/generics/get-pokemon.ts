import axios from "axios";


export const getPoke = async ( pokemonId: number ) => {

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    console.log( response );     

}