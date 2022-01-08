import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const FormHook = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            usuario: "",
            clave: ""
        }
    });

    const [Entradas, setEntradas] = useState([])

    //IMPRIMIR CAMPOS INPUT REGISTRADOS
    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    };
    
    //VER EN TIEMPO REAL INPUT
    console.log(watch())
    return (
        <Fragment>
            <h1>FORMULARIO</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="usuario"
                    placeholder="usuario"
                    {...register("usuario", { required: true, message: 'required' })}
                ></input>
                {errors.usuario?.type === 'required' && "user required"}
                <input
                    type="password"
                    name="clave"
                    placeholder="clave"
                    {...register("clave", { required: true, message: 'required' })}
                ></input>
                {errors.clave?.type === 'required' && "password required"}
                <button type="submit">Enviar</button>
            </form>

            {/* MAPEAR ENTRADAS DE CAMPOS */}
            <ul>
                {
                    Entradas.map(item =>
                        <li key={item.key}>{item.usuario} - {item.clave}</li>
                    )
                }
            </ul>
        </Fragment>
    );
};

export default FormHook;
