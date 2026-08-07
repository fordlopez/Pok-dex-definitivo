import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router";

const Home = () => {

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <div
                        className="border border-warning border-4 rounded-4 bg-dark text-white shadow-lg p-4 p-md-5"
                        style={{
                            background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
                        }}
                    >
                        <p className="text-uppercase text-warning fw-bold mb-2">
                            Pokédex
                        </p>

                        <h1 className="display-6 fw-bold mb-3">
                            Descubre tus Pokémon favoritos
                        </h1>

                        <p className="text-white-50 mb-4">
                            Explora la colección y encuentra a tu compañero perfecto.
                        </p>

                        <div className="d-flex flex-wrap gap-3">
                            <NavLink
                                to="/Personajes"
                                className="btn btn-warning rounded-pill px-4 fw-bold text-dark"
                            >
                                Ver catálogo
                            </NavLink>

                            <NavLink
                                to="/favorites"
                                className="btn btn-outline-light rounded-pill px-4 fw-bold"
                            >
                                Favoritos
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;