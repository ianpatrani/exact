import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        usuario: '',
        clave: ''
    })

    const handleInputChange = (e) => {
        /* console.log(e.target.value) */
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(datos.usuario + ' ' + datos.clave)
    }

    return (
        <Fragment>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="usuario" placeholder='usuario' onChange={handleInputChange}></input>
                <input type='password' name='clave' placeholder='clave' onChange={handleInputChange}></input>
                <button className='btn btn-primary' type='submit'>Enviar</button>
            </form>
            <h3>{datos.usuario}-{datos.clave}</h3>
        </Fragment>
    );
}

export default Formulario;
