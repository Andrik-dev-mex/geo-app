import React, {useState} from "react";
import Appbar from "./layout/Appbar";
import Busqueda from "./components/Busqueda";
import Botones from "./components/Botones";
import Mapa from "./components/Mapa";

function App() {
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  
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
            <Mapa
              height = "80vh"
              width = "100%"
              keyApi = "UiUPhV0Us6gLzXYrrW4BsYbDmo09RapQ"
              center = {[lat, long]}
              titleLayer = {"map"}
              zoom = {12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
