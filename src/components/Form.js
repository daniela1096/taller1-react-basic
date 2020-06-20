import React from "react";

export default function Form({
  handleChange,
  addRegistro,
  handleCalcularNota,
  form
}) {
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="codigo">Código</label>
            <input
              type="text"
              className="form-control"
              id="codigo"
              name="codigo"
              placeholder="Documento"
              onChange={handleChange}
              value={form.codigo}
              required
            />
          </div>

          <div>
            <label htmlFor="alumno">Alumno</label>
            <input
              type="text"
              className="form-control"
              id="alumno"
              name="alumno"
              placeholder="Nombres y Apellidos"
              required
              onChange={handleChange}
              value={form.alumno}
            />
          </div>

          <div>
            <label htmlFor="parcial">Parcial</label>
            <input
              className="form-control col-4"
              type="number"
              id="parcial"
              onChange={handleChange}
              name="parcial"
              value={form.parcial}
              min="0" max="5"
              required
            ></input>
          </div>

          <div>
            <label htmlFor="final">Final</label>
            <input
              className="form-control col-4"
              type="number"
              id="final"
              onChange={handleChange}
              name="final"
              value={form.final}
              min="0" max="5"
              required
            ></input>
          </div>

          <div>
            <label htmlFor="seguimiento">Seguimiento</label>
            <input
              className="form-control col-4"
              type="number"
              id="seguimiento"
              onChange={handleChange}
              name="seguimiento"
              value={form.seguimiento}
              min="0" max="5"
              required
            ></input>
          </div>

          <div className="col-md-4 mb-3">
            <hr />
          </div>

          <div>
            <label htmlFor="definitiva">DEFINITIVA</label>
            <input
              type="number"
              className="form-control col-4"
              id="definitiva"
              placeholder=""
              name="definitiva"
              required
              onFocus={handleCalcularNota}
              onClick={handleCalcularNota}
              value={form.definitiva}
              readOnly
            />
          </div>
        </div>
      </form>
      <button className="btn btn-primary my-3" onClick={addRegistro}>
        Guardar
      </button>
    </div>
  );
}
