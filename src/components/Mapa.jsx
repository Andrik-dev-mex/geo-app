import React, { useEffect } from "react";

export default function Mapa({height, width, keyApi, center, titleLayer, zoom}) {
  useEffect(() => {
    window.L.mapquest.key  = keyApi;

    var map = window.L.mapquest.map('map', {
      center: [37.7749, -122.4194],
      layers: window.L.mapquest.tileLayer('map'),
      zoom: 12
    });

    map.addControl(window.L.mapquest.control());
  }, []);

  return (
  <div className = "map" style = {{height:height, width: width}}>
    <p>Cargando mapa...</p>
  </div>);
}
