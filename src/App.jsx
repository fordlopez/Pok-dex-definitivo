import {
    BrowserRouter,
    Route,
    Routes
} from "react-router";

import Home from "./Peges/Home";
import { Personajes } from "./Peges/Personajes";
import { PokemonProvider } from "./Peges/PokemonContext";

function App() {

    return (

        <BrowserRouter>

            <PokemonProvider>

                <Routes>

                    <Route
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        path="/Personajes"
                        element={<Personajes />}
                    />

                </Routes>

            </PokemonProvider>

        </BrowserRouter>
    );
}

export default App;