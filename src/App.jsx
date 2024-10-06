import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetail from "./components/PokemonDetail";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </>
  );
}

export default App;
