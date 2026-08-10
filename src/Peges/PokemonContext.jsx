import { createContext, useEffect, useState } from "react";
import { apiClient } from "./api";
import { data } from "react-router";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonFilter, setPokemonFilter] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
  const [pagina, setPagina] = useState(1);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await apiClient.get("/pokemon?limit=1351");

            const pokemonsData = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const responsePokemon = await apiClient.get(pokemon.url);

                    return {
                        id: responsePokemon.data.id,
                        name: responsePokemon.data.name,
                        types: responsePokemon.data.types,
                        image: responsePokemon.data.sprites.other.home.front_default,
                    };
                })
              
            );

         /*    setPokemons(pokemonsData);
            setPokemonFilter(pokemonsData); */
              paginate(pokemons)
                setPokemons(pokemons)
        };

       
    }, []);

    const filtrarPokemons = (texto) => {
        const encontrados = pokemons.filter((poke) =>
            poke.name.toLowerCase().includes(texto.toLowerCase())
        );
        setPokemonFilter(encontrados);
    };

    const addFavorito = (pokemon) => {
        setFavoritos((prev) => {
            const yaExiste = prev.some((fav) => fav.id === pokemon.id);
            return yaExiste
                ? prev.filter((fav) => fav.id !== pokemon.id) // quitar si ya estaba
                : [...prev, pokemon];                          // agregar si no estaba
        });
    };

    const getDetaliPolemon = async (id) => {
        const response = await apiClient.get(`/pokemon/${id}`);
        return response.data;
    };

    const paginate =(pokemons)=>{

        const limit =20
     /*    const offset=20 */
        const paginado=[]

        for(let i =0 ;i < pokemons.length;i+parse){
      paginado.push(pokemons.slive(i,i+parseInt(limit)))

        }
     
setPagina(pagina)
    setPokemonFilter(paginado[0]);

    }
   getPokemons()

    return (
        <PokemonContext.Provider
            value={{ pokemonFilter, favoritos, filtrarPokemons, addFavorito, getDetaliPolemon,pagina, setPagina }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

export { PokemonContext, PokemonProvider };

/* 

import { createContext, useEffect, useState } from "react";
import { apiClient } from "./api";

const PokemonContext = createContext();

const LIMIT_POR_PAGINA = 20;

const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);
    const [pokemonFilter, setPokemonFilter] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [pagina, setPagina] = useState(1);

    useEffect(() => {
        const getPokemons = async () => {
            const response = await apiClient.get("/pokemon?limit=151");

            const pokemonsData = await Promise.all(
                response.data.results.map(async (pokemon) => {
                    const responsePokemon = await apiClient.get(pokemon.url);

                    return {
                        id: responsePokemon.data.id,
                        name: responsePokemon.data.name,
                        types: responsePokemon.data.types,
                        image: responsePokemon.data.sprites.other.home.front_default,
                    };
                })
            );

            setPokemons(pokemonsData);
            setPokemonFilter(pokemonsData.slice(0, LIMIT_POR_PAGINA));
        };

        getPokemons();
    }, []);

    const filtrarPokemons = (texto) => {
        const encontrados = pokemons.filter((poke) =>
            poke.name.toLowerCase().includes(texto.toLowerCase())
        );
        setPokemonFilter(encontrados);
    };

    const addFavorito = (pokemon) => {
        setFavoritos((prev) => {
            const yaExiste = prev.some((fav) => fav.id === pokemon.id);
            return yaExiste
                ? prev.filter((fav) => fav.id !== pokemon.id) // quitar si ya estaba
                : [...prev, pokemon];                          // agregar si no estaba
        });
    };

    const getDetaliPolemon = async (id) => {
        const response = await apiClient.get(`/pokemon/${id}`);
        return response.data;
    };

    // page empieza en 1
    const paginate = (page) => {
        const offset = (page - 1) * LIMIT_POR_PAGINA;
        const paginado = pokemons.slice(offset, offset + LIMIT_POR_PAGINA);

        setPokemonFilter(paginado);
        setPagina(page);
    };

    const totalPaginas = Math.ceil(pokemons.length / LIMIT_POR_PAGINA);

    return (
        <PokemonContext.Provider
            value={{
                pokemonFilter,
                favoritos,
                filtrarPokemons,
                addFavorito,
                getDetaliPolemon,
                paginate,
                pagina,
                totalPaginas,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

export { PokemonContext, PokemonProvider }; */