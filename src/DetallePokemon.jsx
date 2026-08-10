import { useContext, useEffect, useState } from "react";
import {  useParams } from "react-router";
import { PokemonContext } from "./Peges/PokemonContext";

const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    grass: "#78C850",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC"
};

const DetallePokemon = () => {
    const { id } = useParams();
    const { getDetaliPolemon } = useContext(PokemonContext);
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await getDetaliPolemon(id);
            setPokemon(response);
        };

        if (id) {
            getData();
        }
    }, [id, getDetaliPolemon]);

    if (!pokemon) {
        return (
            <div className="app-shell detail-page">
                <p className="description">Cargando información del Pokémon...</p>
            </div>
        );
    }

    const primaryType = pokemon.types?.[0]?.type?.name ?? "normal";
    const accentColor = typeColors[primaryType] ?? "#6c757d";
    const image = pokemon.sprites?.other?.home?.front_default ?? pokemon.sprites?.front_default;
    const stats = pokemon.stats ?? [];
    const maxStat = Math.max(...stats.map((stat) => stat.base_stat), 100);

    return (
        <div className="app-shell detail-page">
            <header className="topbar detail-topbar">
                <div className="brand-lockup">
                    <span className="eyebrow">Pokédex</span>
                    <h1>{pokemon.name}</h1>
                </div>

            </header>

            <div className="pokedex-layout">
                <aside
                    className="selector-panel detail-aside"
                    style={{
                        "--accent-color": accentColor,
                        "--accent-soft": `${accentColor}22`
                    }}
                >
                    <div className="mini-header">
                        <span className="badge-number">#{id}</span>
                        <span className="status-pill">Activo</span>
                    </div>

                    <div className="identity-block">
                        <h2>{pokemon.name}</h2>
                        <div className="type-row">
                            {pokemon.types?.map((tipo) => (
                                <span
                                    key={tipo.type.name}
                                    className="pokemon-type big"
                                    style={{ backgroundColor: typeColors[tipo.type.name] ?? "#6c757d" }}
                                >
                                    {tipo.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="info-grid compact-grid">
                        <div className="info-box">
                            <span>Altura</span>
                            <strong>{(pokemon.height / 10).toFixed(1)} m</strong>
                        </div>
                        <div className="info-box">
                            <span>Peso</span>
                            <strong>{(pokemon.weight / 10).toFixed(1)} kg</strong>
                        </div>
                        <div className="info-box">
                            <span>XP</span>
                            <strong>{pokemon.base_experience}</strong>
                        </div>
                        <div className="info-box">
                            <span>Habilidad</span>
                            <strong>{pokemon.abilities?.[0]?.ability?.name}</strong>
                        </div>
                    </div>
                </aside>

                <main className="detail-panel" style={{ "--accent-color": accentColor }}>
                    <div className="detail-header">
                        <div>
                            <span className="eyebrow">Perfil</span>
                            <h2>{pokemon.name}</h2>
                        </div>

                        <div className="type-row">
                            {pokemon.types?.map((tipo) => (
                                <span
                                    key={tipo.type.name}
                                    className="pokemon-type"
                                    style={{ backgroundColor: typeColors[tipo.type.name] ?? "#6c757d" }}
                                >
                                    {tipo.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="sprite-wrap" style={{ background: `radial-gradient(circle at center, ${accentColor} 0%, #f8fafc 42%, #eef2ff 100%)` }}>
                        <div className="pokeball-ring" />
                        <img src={image} alt={pokemon.name} className="pokemon-art" />
                    </div>

                    <p className="description">
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} tiene un estilo de combate {pokemon.types?.map((tipo) => tipo.type.name).join(" y ")}, con presencia, equilibrio y gran potencial estratégico.
                    </p>

                    <div className="info-grid">
                        <div className="info-box bright-box">
                            <span>Altura</span>
                            <strong>{(pokemon.height / 10).toFixed(1)} m</strong>
                        </div>
                        <div className="info-box bright-box">
                            <span>Peso</span>
                            <strong>{(pokemon.weight / 10).toFixed(1)} kg</strong>
                        </div>
                        <div className="info-box bright-box">
                            <span>HP</span>
                            <strong>{pokemon.stats?.[0]?.base_stat ?? 0}</strong>
                        </div>
                        <div className="info-box bright-box">
                            <span>Velocidad</span>
                            <strong>{pokemon.stats?.[5]?.base_stat ?? 0}</strong>
                        </div>
                    </div>

                    <div className="stats">
                        {stats.map((stat) => (
                            <div key={stat.stat.name} className="stat-row">
                                <label>{stat.stat.name}</label>
                                <div className="meter">
                                    <span
                                        style={{
                                            width: `${(stat.base_stat / maxStat) * 100}%`,
                                            background: `linear-gradient(90deg, ${accentColor}, #fbbf24)`
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DetallePokemon;