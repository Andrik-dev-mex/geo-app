import React from "react";
import Appbar from "./layout/Appbar";
import Busqueda from "./components/Busqueda";
import Botones from "./components/Botones";
import Mapa from "./components/Mapa"

function App() {
  return (
    <div>
      <Appbar />
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-8">
            <Busqueda></Busqueda>
          </div>
          <div className="col-sm-4">
            <Botones></Botones>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Mapa></Mapa>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
