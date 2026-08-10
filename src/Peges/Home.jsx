import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router";

const Home = () => {
    return (
        <Container className="py-4 py-md-5">
            <Row className="justify-content-center g-4">
                <Col xs={12} lg={10}>
                    <div className="welcome-shell">
                        <div className="welcome-copy">
                            <span className="welcome-tag">Pokédex • Nueva aventura</span>
                            <h1>Bienvenido a tu mundo Pokémon</h1>
                            <p>
                                Explora nuevos compañeros, descubre raridades y guarda tus favoritos en un solo lugar.
                            </p>

                            <div className="welcome-actions">
                                <NavLink to="/Personajes" className="cta-primary">
                                    Ver categoría
                                </NavLink>
                                <NavLink to="/favoritos" className="cta-secondary">
                                    Mis favoritos
                                </NavLink>
                            </div>

                            <div className="mini-stats">
                                <div>
                                    <strong>151</strong>
                                    <span>Pokémon</span>
                                </div>
                                <div>
                                    <strong>18+</strong>
                                    <span>Tipos</span>
                                </div>
                                <div>
                                    <strong>1</strong>
                                    <span>Tu equipo</span>
                                </div>
                            </div>
                        </div>

                        <div className="welcome-visual">
                            <div className="pokemon-orb orb-one" />
                            <div className="pokemon-orb orb-two" />
                            <div className="hero-card">
                                <div className="hero-card-top">
                                    <span>Pokémon del día</span>
                                    <span>🔥</span>
                                </div>
                                <div className="hero-image-wrap">
                                    <img
                                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
                                        alt="Pikachu"
                                    />
                                </div>
                                <h3>Pikachu</h3>
                                <div className="type-row-home">
                                    <span>Eléctrico</span>
                                    <span>Rápido</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={12} md={4}>
                    <div className="feature-card">
                        <span className="feature-icon">⚡</span>
                        <h3>Explora</h3>
                        <p>Descubre la colección por tipo, nombre y estilo.</p>
                    </div>
                </Col>

                <Col xs={12} md={4}>
                    <div className="feature-card">
                        <span className="feature-icon">💙</span>
                        <h3>Guarda favoritos</h3>
                        <p>Marca tus Pokémon preferidos y accede a ellos rápido.</p>
                    </div>
                </Col>

                <Col xs={12} md={4}>
                    <div className="feature-card">
                        <span className="feature-icon">🎯</span>
                        <h3>Encuentra tu estilo</h3>
                        <p>Elige a tu compañero ideal según su personalidad.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;