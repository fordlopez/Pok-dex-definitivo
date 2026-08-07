import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { PokemonContext } from "./PokemonContext";
import { CardPokemon } from "../Componentes/CartPokemon";

const Personajes = () => {

    const [pokemons, setPokemons] = useState([]);

    const { getPokemons } = useContext(PokemonContext);

    useEffect(() => {

        const getPoke = async () => {

            const pokemonsApi = await getPokemons();

            setPokemons(pokemonsApi);
               setpokemonFiltter(p)
        };

        getPoke();
     

    }, [getPokemons]);

const [buscadorPoke,setBPokemons]=useState()
    const buscador =(e)=>{

       const polemonsEncontrados= pokemons.filter(poke =>poke.name.toLoWoerCase().includes(e.targe.value)==buscador.toLoWoerCase())
    }

    const [pokemonFilter,setpokemonFiltter]=useState([])


    return (
        <Container className="py-4">
            <div
                className="bg-dark text-white rounded-4 border border-warning border-4 shadow-lg p-4 mb-4"
                style={{ background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)" }}
            >
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <div>
                        <p className="text-uppercase text-warning fw-bold mb-1">
                            Pokédex
                        </p>
                        <h2 className="mb-0">Catálogo</h2>
                    </div>

                    <Badge
                        bg="light"
                        text="dark"
                        className="rounded-pill px-3 py-2 fw-bold"
                    >
                        {pokemons.length} Pokémon
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
                        readOnly
                        className="border-start-0 rounded-end-pill"
                        onChange={(e)=>buscadorPoke(e)}
                    />

                    <Button
                        variant="warning"
                        className="rounded-pill ms-2 px-3 fw-bold"
                        type="button"
                    >
                        Buscar
                    </Button>
                </InputGroup>
            </div>

            <Row className="g-4">
                {pokemons.map((pokemon) => (
                    <Col key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
                        <CardPokemon
                            {...pokemon}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export { Personajes };