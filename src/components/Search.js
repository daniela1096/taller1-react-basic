import React from "react";
import "./Search.css";

export default function Search({ alumnos, handleFiltroGanaron, handleFiltroPerdieron, handleFiltroTodos, findCodigo}) {

  return (
    <div>
      <div className="containerr">
        <input
          type="text"
          placeholder="Documento"
          className="form-control col-10"
          onChange={findCodigo}
        ></input>
        <button className="btn btn-primary" type="submit">Buscar</button>
      </div>
      <div className="filtro">
        <input type="radio" id="ganaron" name="filtro" value="ganaron"  onChange={handleFiltroGanaron}/>
        <label htmlFor="ganaron">Ganaron</label>
        <input type="radio" id="perdieron" name="filtro" value="perdieron" onChange={handleFiltroPerdieron} />
        <label htmlFor="perdieron">Perdieron</label>
        <input type="radio" id="todos" name="filtro" value="todos" onChange={handleFiltroTodos} />
        <label htmlFor="todos">Todos</label>
      </div>
    </div>
  );
}
