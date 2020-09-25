import React, { useState } from "react";
import Appbar from "./layout/Appbar";
import Busqueda from "./components/Busqueda";
import Botones from "./components/Botones";
import Mapa from "./components/Mapa";

function App() {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  let markers = [];

  const setCenter = (lat, long) => {
    setLat(lat);
    setLong(long);
    window.L.mapquest.Map.getMap("map").setView(new window.L.latLng(lat, long), 12);
    console.log(lat, long)
  };

  const addMarker = (lat, long, tititle, subtitle) => {
    const marker = window.L.mapquest.textMarker(
      new window.L.latLng(lat, long),
      {
        text: tititle || 'marcador',
        subtext: subtitle,
        position: "right",
        type: "marker",
        icon: {
          primaryColor: "#a8190f",
          secondaryColor: "#db2c2c",
          size: "md",
        },
      }
    )
    .addTo(window.L.mapquest.Map.getMap('map'));
    markers.push(marker)
  };

  return (
    <div>
      <Appbar />
      <div className="container mt-2">
        <div className="row">
          <div className="col-sm-8">
            <Busqueda />
          </div>
          <div className="col-sm-4">
            <Botones setCenter={setCenter} setMarker={addMarker} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Mapa
              height="80vh"
              width="100%"
              keyApi="UiUPhV0Us6gLzXYrrW4BsYbDmo09RapQ"
              center={[lat, long]}
              titleLayer={"map"}
              zoom={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
