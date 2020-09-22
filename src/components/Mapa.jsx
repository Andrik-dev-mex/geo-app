import React, { useEffect } from "react";

export default function Mapa({height, width, keyApi, center, titleLayer, zoom}) {
  useEffect(() => {

    window.L.mapquest.key  = keyApi;

    const map = window.L.mapquest.map('map', {
      center,
      layers: window.L.mapquest.tileLayer(titleLayer),
      zoom
    });

    map.addControl(window.L.mapquest.control({position : "topleft"}));
  }, []);

  return (
  <div id = "map" style = {{width, height}}>
    <p>Cargando mapa...</p>
  </div>);
}
