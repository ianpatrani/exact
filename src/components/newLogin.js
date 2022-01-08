import axios from "axios";
import React, { Fragment, useState } from "react";
import "./Login.css";

const Login = () => {

    //ESTADO INICIAL
    const [users, setUsers] = useState({
        username: '',
        password: ''
    });
    //ESTADO DE ERROR
    const [error, setError] = useState(false)

    //EXTRAER VALOR INPUT
    const handleChange = e => {
        setUsers({
            ...users,
            [e.target.name]: e.target.value
        })
    }

    //EXTRAER VALORES
    const { username, password } = users;

    //PREVENIR POR DEFECTO
    const handleSubmit = e => {
        e.preventDefault();
    }

    //VALIDACION
    //Trim() elimina los espacios en blanco iniciales y finales y los caracteres de terminación de línea de una cadena.
    if (username.trim() === '' || password.trim() === '') {
        setError(true);
        return;
    }

    //ELIMINAR EL MENSAJE PREVIO
    setError(false);

    // REINICIAR EL FORMULARIO
    setUsers({
        username: '',
        password: ''
    })

    //SUBMIT BOTON
    const manejadorBoton = () => {
        let url = 'https://telecom.exactian.info/ws2/segfi/users/Login';
        axios.post(url, this.state.form)
            .then(response => {
                console.log(response);
            })
    }

    /* //PETICION AXIOS POST
    axios.post(URL_LOGIN, PETITION)
        .then(response => console.log(response))
        .catch(error => console.log(error)) */

    return (
        <Fragment>
            <div className="zoomIn">
                <div className="homeTitle" />
                <h2>Welcome to Login</h2>
                <h5>All fields with * are require</h5>
                <br />

                {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

                <form onSubmit={handleSubmit}>
                    <span>
                        <i className="input-icon uil uil-user" />
                    </span>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Username*"
                        onChange={handleChange}
                    />
                    <span>
                        <i className="input-icon uil uil-lock-alt" />
                    </span>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password*"
                        onChange={handleChange}
                    />

                    <button type="submit" onClick={manejadorBoton}>
                        Submit
                    </button>
                </form>
            </div>
        </Fragment>
    );
}

export default Login;