

import { createContext } from "react";
import { apiClient } from "./api";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {

    const getPokemons = async () => {


        const response = await apiClient.get("/pokemon");

        const pokemons = await Promise.all(

            response.data.results.map(async (pokemon) => {

                const responsePokemon = await apiClient.get(pokemon.url);

                return {
                    name: responsePokemon.data.name,
                    types: responsePokemon.data.types/* .map(item=> item.type.name) */,
                    image: responsePokemon.data.sprites.other.home.front_default
                };
            })
        );

        console.log(pokemons);

        return pokemons;
    };
    console.log(getPokemons)
    return (
        <PokemonContext.Provider value={{ getPokemons }}>
            {children}
        </PokemonContext.Provider>
    );
};

export { PokemonContext, PokemonProvider };
