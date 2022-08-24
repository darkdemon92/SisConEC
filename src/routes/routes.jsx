import { Routes, Route } from "react-router-dom";

import Error404 from "../error404";
import Equipos from "../views/Equipos";
import PCs from "../views/PCs";

function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Equipos />} />
        <Route path="/PCs" element={<PCs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default Rutas;
