import { createContext, useEffect, useState } from "react";
import { apiClient } from "./api";

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
    const [listaCompleta, setListaCompleta] = useState([]);
    const [listaActual, setListaActual] = useState([]);
    const [pokemonFilter, setPokemonFilter] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [cargando, setCargando] = useState(false);
    const LIMIT_POR_PAGINA = 20;

    useEffect(() => {
        const getListaCompleta = async () => {
            const response = await apiClient.get("/pokemon?limit=1302");
            setListaCompleta(response.data.results);
            setListaActual(response.data.results);
        };

        getListaCompleta();
    }, []);


    useEffect(() => {

        if (listaActual.length > 0) {
            cargarPagina(0, listaActual);
        } else {
            setPokemonFilter([]);
        }
    }, [listaActual]);


    const cargarPagina = async (numeroPagina, lista) => {
        setCargando(true);

        const inicio = numeroPagina * LIMIT_POR_PAGINA;
        const itemsPagina = lista.slice(inicio, inicio + LIMIT_POR_PAGINA);

        const detalles = await Promise.all(
            itemsPagina.map(async (pokemon) => {
                const responsePokemon = await apiClient.get(pokemon.url);

                return {
                    id: responsePokemon.data.id,
                    name: responsePokemon.data.name,
                    types: responsePokemon.data.types,
                    image: responsePokemon.data.sprites.other.home.front_default,
                };
            })
        );

        setPokemonFilter(detalles);
        setPagina(numeroPagina);
        setCargando(false);
    };



    const totalPaginas = Math.ceil(listaActual.length / LIMIT_POR_PAGINA);

    const filtrarPokemons = (texto) => {
        if (!texto) {
            setListaActual(listaCompleta);
            return;
        }

        const encontrados = listaCompleta.filter((poke) =>
            poke.name.toLowerCase().includes(texto.toLowerCase())
        );


        setListaActual(encontrados);
    };

    const addFavorito = (pokemon) => {
        setFavoritos((prev) => {
            const yaExiste = prev.some((fav) => fav.id === pokemon.id);
            return yaExiste
                ? prev.filter((fav) => fav.id !== pokemon.id)
                : [...prev, pokemon];
        });
    };

    const getDetaliPolemon = async (id) => {
        const response = await apiClient.get(`/pokemon/${id}`);
        return response.data;
    };

    const siguientePagina = () => {
        if (pagina + 1 < totalPaginas) {
            cargarPagina(pagina + 1, listaActual);
        }
    };

    const paginaAnterior = () => {
        if (pagina - 1 >= 0) {
            cargarPagina(pagina - 1, listaActual);
        }
    };

    return (
        <PokemonContext.Provider
            value={{
                pokemonFilter,
                favoritos,
                filtrarPokemons,
                addFavorito,
                getDetaliPolemon,
                pagina,
                totalPaginas,
                siguientePagina,
                paginaAnterior,
                cargando,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

export { PokemonContext, PokemonProvider };