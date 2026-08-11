import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PokemonContext } from "./PokemonContext";
import { CardPokemon } from "../Componentes/CartPokemon";
import { Link } from "react-router";

const Favoritos = () => {
    const { favoritos } = useContext(PokemonContext);

    if (favoritos.length === 0) {
        return (
            <Container className="py-5 text-center">
                <p>No tienes Pokémon favoritos todavía.</p>
            </Container>
        );
    }

    return (
        <Container className="py-4">
            <Row className="g-4">
             
                {favoritos.map((pokemon) => (
                    <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                        <CardPokemon {...pokemon} isFavorite={true} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export { Favoritos };