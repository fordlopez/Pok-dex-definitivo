import {
    BrowserRouter,
    Route,
    Routes
} from "react-router";

import Home from "./Peges/Home";
import { Personajes } from "./Peges/Personajes";
import { PokemonProvider } from "./Peges/PokemonContext";
import DetallePokemon from "./DetallePokemon";
import { Favoritos } from "./Peges/Favorito";
import NavMenu from "./Componentes/NavMenu";

function App() {

    return (

        <BrowserRouter>

            <PokemonProvider>
                <div className="app-root">
                    <NavMenu />

                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/Personajes"
                            element={<Personajes />}
                        />
                        <Route path="/detalle/:id" element={<DetallePokemon />} />
                        <Route path="/favoritos" element={<Favoritos />} />
                    </Routes>
                </div>
            </PokemonProvider>

        </BrowserRouter>
    );
}

export default App;