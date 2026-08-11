import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Form, InputGroup, Row, Spinner } from "react-bootstrap";
import { PokemonContext } from "./PokemonContext";
import { CardPokemon } from "../Componentes/CartPokemon";

const Personajes = () => {
    const [busqueda, setBusqueda] = useState("");
    const {
        pokemonFilter,
        filtrarPokemons,
        favoritos,
        pagina,
        totalPaginas,
        siguientePagina,
        paginaAnterior,
        cargando,
    } = useContext(PokemonContext);

    const buscador = (e) => {
        const texto = e.target.value;
        setBusqueda(texto);
        filtrarPokemons(texto);
    };

    return (
        <Container className="py-4">
            <div
                className="bg-dark text-white rounded-4 border border-warning border-4 shadow-lg p-4 mb-4"
                style={{ background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)" }}
            >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <div>
                        <p className="text-uppercase text-warning fw-bold mb-1">Pokédex</p>
                        <h2 className="mb-0">Catálogo</h2>
                    </div>

                    <Badge bg="light" text="dark" className="rounded-pill px-3 py-2 fw-bold">
                        Página {pagina + 1} de {totalPaginas || 1}
                    </Badge>
                </div>
            </div>

            <div className="mb-4">
                <InputGroup className="shadow-sm">
                    <InputGroup.Text className="bg-white border-end-0 rounded-start-pill px-3">
                        🔎
                    </InputGroup.Text>

                    <Form.Control
                        type="text"
                        placeholder="Buscar Pokémon"
                        aria-label="Buscar Pokémon"
                        className="border-start-0 rounded-end-pill"
                        value={busqueda}
                        onChange={buscador}
                    />

                    <Button variant="warning" className="rounded-pill ms-2 px-3 fw-bold" type="button">
                        Buscar
                    </Button>
                </InputGroup>
            </div>

            <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
                <Button variant="outline-dark" onClick={paginaAnterior} disabled={pagina === 0 || cargando}>
                    Atrás
                </Button>

                {/*   <span>Página {pagina + 1} de {totalPaginas || 1}</span> */}

                <Button variant="outline-dark" onClick={siguientePagina} disabled={pagina + 1 >= totalPaginas || cargando}>
                    Adelante
                </Button>
            </div>

            {cargando ? (
                <div className="text-center py-5">
                    <Spinner animation="border" variant="warning" />
                </div>
            ) : (
                <Row className="g-4">
                    {pokemonFilter.length === 0 ? (
                        <p className="text-center">No se encontraron Pokémon.</p>
                    ) : (
                        pokemonFilter.map((pokemon) => (
                            <Col key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
                                <CardPokemon
                                    {...pokemon}
                                    isFavorite={favoritos.some((fav) => fav.id === pokemon.id)}
                                />
                            </Col>
                        ))
                    )}
                </Row>
            )}
        </Container>
    );
};

export { Personajes };