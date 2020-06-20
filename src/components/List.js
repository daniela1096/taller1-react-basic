import React from 'react'
import Student from './Student'
import "./Search.css";

export default function List({alumnos, filterAlumnos}) {
    return (
        <div className="col m-2 pd-2 bg-light">
        <div className="col my-2 pd-2">
          <table className="table">
            <thead colSpan="2" className="titles">
              <tr>
                <td colSpan="2">Listado</td>
              </tr>
              <tr>
                <td>Alumno</td>
                <td>Nota</td>
                <td>Estado</td>
              </tr>
            </thead>
            <tbody>
             {filterAlumnos === undefined ? alumnos.map((alumno, index) => <Student key={index} alumno={alumno}/>) : filterAlumnos.map((alumno, index) => <Student key={index} alumno={alumno}/>)}
            </tbody>
          </table>
        </div>
      </div>
    )
}
