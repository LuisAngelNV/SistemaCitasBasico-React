import React, { Fragment, useState } from 'react'

const Formulario = () => {

    //Para validar el formulario es necesario mandar el elemento que se tiene en name 'En este caso'
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        Sintomas: ''
    });

    // Función que se actualiza cada que el usuario escribe en el input
    const actulizarState = (e) => {
        // Modifica el state / No se puede modificar por comparacion
        actualizarCita({
            // Una copia de todo lo que hay
            ...cita,
            // destroy target para reescribir
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, Sintomas } = cita;

    // Cuando el usuario da en enviar formulario
    const submitCita = (e) => {
        e.preventDefault();
        console.log(mascota);
        // Validar
        if(mascota.trim() === ''){
            console.log('Hay un error');
        }
        // Asignar id
        // Crear la cita
        // Reiniciar el formulario
    }

    return (
        <Fragment>
            <h2>Crear citas</h2>
            <form
                onSubmit={submitCita}
            >
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre mascota'
                    onChange={actulizarState}
                    // permitira resetear el formulario en mascota
                    value={mascota}
                ></input>
                {/* Dato 2 */}
                <label htmlFor="">Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nomre dueño de mascota'
                    onChange={actulizarState}
                    value={propietario}

                ></input>

                {/* Dato 3 */}
                <label htmlFor="">Nombre del dueño</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={actulizarState}
                    value={fecha}

                ></input>

                {/* Dato 4*/}
                <label htmlFor="">Nombre del dueño</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={actulizarState}
                    value={hora}

                ></input>

                {/* Dato 5 */}
                <label htmlFor="">Síntomas</label>
                <textarea
                    className='u-full-width'
                    name='Sintomas'
                    onChange={actulizarState}
                    value={Sintomas}
                ></textarea>
            </form>

            <button
                type='submit'
                className='u-full-width button-primary'
            >Agregar cita</button>
        </Fragment>
    );
}

export default Formulario;