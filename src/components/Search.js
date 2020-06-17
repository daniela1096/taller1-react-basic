import React from "react";
import "./Search.css";

export default function Search({ alumnos, handleFiltroGanaron }) {
  const handlerChange = (event) => {
    alumnos(event.target.value);
  };

  return (
    <div>
      <div className="containerr">
        <input
          type="text"
          placeholder="Documento"
          className="form-control col-10"
          onChange={handlerChange}
        ></input>
        <button className="btn btn-primary">Buscar</button>
      </div>
      <div className="filtro">
        <input type="radio" id="ganaron" name="filtro" value="ganaron"  onChange={handleFiltroGanaron}/>
        <label htmlFor="ganaron">Ganaron</label>
        <input type="radio" id="perdieron" name="filtro" value="perdieron" />
        <label htmlFor="perdieron">Perdieron</label>
        <input type="radio" id="todos" name="filtro" value="todos" />
        <label htmlFor="todos">Todos</label>
      </div>
    </div>
  );
}
