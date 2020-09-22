import React from "react";

export default function Busqueda() {
  return (
    <form>
      <div className="form-group row">
        <label htmlFor="busqueda" className="col-sm-1 col-form-label">
          Buscar:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            name="busqueda"
            id="busqueda"
            className="form-control"
          />
        </div>
        <div className="col-sm-2">
          <button type="submit" className="btn btn-primary">
            OK
          </button>
        </div>
      </div>
    </form>
  );
}
