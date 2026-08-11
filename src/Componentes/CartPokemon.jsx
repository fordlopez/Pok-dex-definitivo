import { useContext } from "react";
import { Button, Card, NavLink } from "react-bootstrap";
import { Link } from "react-router";
import { PokemonContext } from "../Peges/PokemonContext";

const typeColors = {
    normal: "#A8A878", fire: "#F08030", water: "#6890F0", grass: "#78C850",
    electric: "#F8D030", ice: "#98D8D8", fighting: "#C03028", poison: "#A040A0",
    ground: "#E0C068", flying: "#A890F0", psychic: "#F85888", bug: "#A8B820",
    rock: "#B8A038", ghost: "#705898", dragon: "#7038F8", dark: "#705848",
    steel: "#B8B8D0", fairy: "#EE99AC"
};

const CardPokemon = ({ id, name, types, image, isFavorite }) => {
    const { addFavorito } = useContext(PokemonContext);

    const firstType = types?.[0]?.type?.name ?? "normal";
    const accentColor = typeColors[firstType] ?? "#6c757d";

    const handleFavorito = () => {
        addFavorito({ id, name, image, types });
    };

    return (
        
        <Card
            className="h-100 border-0 shadow-sm overflow-hidden rounded-4"
            style={{ background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)" }}
        >
            <div
                className="p-3"
                style={{
                    background: `radial-gradient(circle at top, ${accentColor} 0%, ${accentColor} 25%, rgba(255,255,255,0.18) 26%, rgba(255,255,255,0) 100%)`,
                }}
            >
                
                
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <small className="text-uppercase fw-bold text-dark-emphasis">Pokémon</small>
                    <span className="badge rounded-pill bg-light text-dark px-2 py-1">#{id}</span>
                </div>


                <div
                    className="d-flex justify-content-center align-items-center rounded-circle bg-white bg-opacity-25 mx-auto"
                    style={{ width: "132px", height: "132px" }}
                >
                    <Card.Img
                        src={image}
                        alt={name}
                        className="img-fluid"
                        style={{ width: "110px", height: "110px", objectFit: "contain" }}
                    />
                </div>
            </div>

            <Card.Body className="p-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title className="text-uppercase fw-bold text-dark mb-0">{name}</Card.Title>
                </div>

                <div className="d-flex flex-wrap gap-2 mb-3">
                    {types.map((tipo) => (
                        <span
                            key={tipo.type.name}
                            className="badge rounded-pill px-3 py-2 text-white fw-semibold"
                            style={{ backgroundColor: typeColors[tipo.type.name] ?? "#6c757d" }}
                        >
                            {tipo.type.name}
                        </span>
                    ))}
                </div>

                <div className="d-flex gap-2">
                    <Link to={`/detalle/${id}`} className="flex-grow-1 text-decoration-none">
                        <Button variant="dark" className="w-100 rounded-pill fw-semibold">
                            Ver detalles
                        </Button>
                    </Link>

                    <Button
                        variant={isFavorite ? "warning" : "outline-warning"}
                        className="rounded-circle px-3"
                        aria-label="Agregar a favoritos"
                        onClick={handleFavorito}
                    >
                        ♥
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export { CardPokemon };