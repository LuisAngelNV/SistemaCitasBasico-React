import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Formulario = () => {
  //Para validar el formulario es necesario mandar el elemento que se tiene en name 'En este caso'
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    Sintomas: "",
  });

  const [error, actualizarErrores] = useState(false);

  // Función que se actualiza cada que el usuario escribe en el input
  const actulizarState = (e) => {
    // Modifica el state / No se puede modificar por comparacion
    actualizarCita({
      // Una copia de todo lo que hay
      ...cita,
      // destroy target para reescribir
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el usuario da en enviar formulario
  const submitCita = (e) => {
    e.preventDefault();
    // Validar
    // trim espacios en blaco
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarErrores(true);
      return false;
    }
    // Eliminar mensaje previo
    actualizarErrores(false);
    // Asignar id
    cita.id = uuidv4()
    console.log(cita);
    // Crear la cita
    // Reiniciar el formulario
  };

  return ( 
    <Fragment>
        <h2>Crear Cita</h2>

        { error ? <p className="alerta-error">Todos los campos son obligatorios</p>     : null }

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input 
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre Mascota"
                onChange={actulizarState}
                value={mascota}
            />

            <label>Nombre Dueño</label>
            <input 
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre  Dueño de la mascota"
                onChange={actulizarState}
                value={propietario}
            />

            <label>Fecha</label>
            <input 
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actulizarState}
                value={fecha}
            />

            <label>Hora</label>
            <input 
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actulizarState}
                value={hora}
            />

            <label>Síntomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={actulizarState}
                value={sintomas}
            ></textarea>

            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar Cita</button>
        </form>
    </Fragment>
);
}


export default Formulario;
