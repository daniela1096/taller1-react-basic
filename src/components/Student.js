import React from 'react'

export default function Student({alumno}) {
    return (
        <tr>
              <td>{alumno.alumno}</td>
              <td>{alumno.definitiva}</td>
              <td>{alumno.estado}</td>
            </tr>
    )
}
