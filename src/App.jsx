import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocaisDestaques from "./pages/LocaisDestaques";
import DetalhesLocal from "./pages/DetalhesLocal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LocaisDestaques />} />
        <Route path="/detalhes/:id" element={<DetalhesLocal />} />
      </Routes>
    </Router>
  );
}
