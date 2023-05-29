import React, { Fragment, useState } from "react";

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
  const { mascota, propietario, fecha, hora, sintoma } = cita;

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
      sintoma.trim() === ""
    ) {
      actualizarErrores(true);
      return false;
    }
  };
  // Asignar id
  // Crear la cita
  // Reiniciar el formulario

  return (
    <Fragment>
      <h2>Crear citas</h2>
      {error ? <p className="alerta-error"> Todos los campos son obligatorios!!</p> : null}
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actulizarState}
          // permitira resetear el formulario en mascota
          value={mascota}
        ></input>
        {/* Dato 2 */}
        <label htmlFor="">Nombre del dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nomre dueño de mascota"
          onChange={actulizarState}
          value={propietario}
        ></input>

        {/* Dato 3 */}
        <label htmlFor="">Fecha actual</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actulizarState}
          value={fecha}
        ></input>

        {/* Dato 4*/}
        <label htmlFor="">Hora de atención</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actulizarState}
          value={hora}
        ></input>

        {/* Dato 5 */}
        <label htmlFor="">Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actulizarState}
          value={sintoma}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
