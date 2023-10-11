import axios from "axios";
import { PokemonResponse } from "../interfaces";


export const getPoke = async ( pokemonId: number ):Promise<PokemonResponse> => {

    const { data } = await axios.get<PokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    return data;     

}