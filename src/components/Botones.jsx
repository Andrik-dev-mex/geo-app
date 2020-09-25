import React from 'react';
import Swal from "sweetalert2";

export default function Botones({setCenter, setMarker}){
  const findMe = () => {

    if(!navigator.geolocation) {
      Swal.fire(
        'Error al encontrarte',
        'Tu navegardor no es compatible',
        'error'
      );
      return;
    }
  
    function succes(position) {
      let {latitude, longitude} = position.coords;
      console.log(latitude, longitude);
      if(setCenter) {
        setCenter(latitude, longitude);
      }

      if(setMarker) {
        setMarker(latitude, longitude);
      }
      
      console.log(latitude, longitude);
    }
  
    function err() {
      Swal.fire(
        'Ha ocurrido un error',
        'Intenta recargar la pagina',
        'error'
      );
    }
  
    navigator.geolocation.getCurrentPosition(succes, err);
  
  }

  return(
    <div className="row">
      <button type = "button" onClick = {findMe}
        className = "btn btn-primary btn-block" >
        Mi ubicacion
      </button>
    </div>
  )
};