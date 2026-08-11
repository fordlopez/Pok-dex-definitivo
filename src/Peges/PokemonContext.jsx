import { createContext, useEffect, useState } from "react";
import { apiClient } from "./api";

const PokemonContext = createContext();

const LIMIT_POR_PAGINA = 20;

const PokemonProvider = ({ children }) => {
    const [listaCompleta, setListaCompleta] = useState([]); // {name, url} de TODOS los pokemons
    const [listaActual, setListaActual] = useState([]);      // lista sobre la que se pagina (completa o filtrada)
    const [pokemonFilter, setPokemonFilter] = useState([]);  // detalles completos de la página visible
    const [favoritos, setFavoritos] = useState([]);
    const [pagina, setPagina] = useState(0);
    const [cargando, setCargando] = useState(false);

    // 1. Traer la lista liviana de TODOS los pokemons (una sola llamada, rápida)
    useEffect(() => {
        const getListaCompleta = async () => {
            const response = await apiClient.get("/pokemon?limit=1302");
            setListaCompleta(response.data.results);
            setListaActual(response.data.results);
        };

        getListaCompleta();
    }, []);

    // 2. Cuando cambia la lista activa (completa o filtrada), cargar la página 0 de detalles
    useEffect(() => {
        if (listaActual.length > 0) {
            cargarPagina(0, listaActual);
        } else {
            setPokemonFilter([]);
        }
    }, [listaActual]);

    // Trae los detalles completos SOLO de los pokemons de una página (20 a la vez)
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

    // Buscador: filtra sobre los ~1300 NOMBRES (barato, sin llamadas a la API)
    const filtrarPokemons = (texto) => {
        if (!texto) {
            setListaActual(listaCompleta); // sin búsqueda: vuelve a la lista completa
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