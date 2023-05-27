import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear citas</h2>
            <form>
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Nombre mascota'
                ></input>
                {/* Dato 2 */}
                <label htmlFor="">Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='Nomre dueño de mascota'
                ></input>

                {/* Dato 3 */}
                <label htmlFor="">Nombre del dueño</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                ></input>

                {/* Dato 4*/}
                <label htmlFor="">Nombre del dueño</label>
                <input
                    type='time'
                    name='Hora'
                    className='u-full-width'
                ></input>

                {/* Dato 5 */}
                <label htmlFor="">Síntomas</label>
                <textarea
                    className='u-full-width'
                    name='Sintomas'
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