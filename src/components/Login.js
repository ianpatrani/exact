import React, { Fragment, useState } from "react";
import "./Login.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { URL_LOGIN, PETITION } from "../services/Api";

function Login() {
  /*  const handleSubmit = (e) =>{
        axios
            .post(URL_LOGIN, PETITION)
            .then((response) => {
              if (response.data === 200) {
                console.log((username) => {
                //datos del login
                //enviar a 2da api
                const {token} =response
                axios
                .get('URL_EMPLOYEES', dataUser)
                .then((res)=>{
                    if(response.status ==200){
                        //mostrat los datos 2da api
                    }
                })
                });
                .catch((error)=>console.log('error api'))
              } else {
                console.log(response);
              }
            });
          }} */

  return (
    <Fragment>
      <div className="zoomIn">
        <div className="homeTitle" />
        <h2>Welcome to Login</h2>
        <h5>All fields with * are require</h5>
        <br />
        <Formik
          //ACCEDER A LOS INPUT Y ENVIAR FORMULARIO
          onSubmit={(valores, { resetForm }) => {
            //IMPRIMIMOS LOS VALORES
            console.log(valores);
            //POSTERIORMENTE REINICIAMOS EL FOMRULARIO
            resetForm();
            //ACCEDEMOS A LA PETICION DE AXIOS POST
            axios.post(URL_LOGIN, PETITION).then((response) => {
              if (response.data === false) {
                console.log((username) => {
                  return {
                    ...username,
                    username: valores.username,
                    password: valores.password,
                  };
                });
              } else {
                console.log(response);
              }
            });
          }}
          //VALORES INICIALES
          initialValues={{
            username: "",
            password: "",
          }}
          //VALIDAMOS MENSAJES DE ERROR DE INPUTS
          validate={(valores) => {
            let errors = {};
            if (!valores.username && !valores.password) {
              errors.username = "Please enter your username*";
              errors.password = "Please enter your password*";
            }
            return errors;
          }}
        >
          {/* DECLARAMOS LAS FUNCIONES MEDIANTE FORMIK */}
          {({ errors }) => (
            <Form>
              <span>
                <i className="input-icon uil uil-user" />
              </span>
              <Field type="username" name="username" placeholder="Username*" />
              <ErrorMessage
                name="username"
                component={() => <div className="error">{errors.username}</div>}
              />
              <span>
                <i className="input-icon uil uil-lock-alt" />
              </span>
              <Field type="password" name="password" placeholder="Password*" />
              <ErrorMessage
                name="password"
                component={() => <div className="error">{errors.password}</div>}
              />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  );
}

export default Login;