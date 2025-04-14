import React from "react";
import { ComponentePrueba } from "../components/componentePrueba";
import { Link, useNavigate, useParams } from "react-router-dom";


export const VistaPrueba = () => {

    const params = useParams()
    console.log(params)
    //para cambiar de vistas useNavigate si va a ser parte de una funcion
    const navigate = useNavigate()

    const handleClick = () => {
        return navigate('/single/' + params.valor)
    }

    return (
        <div className="container">
            <h3>vista de prueba</h3>
            <h4>valor del parametro que recibimos es {params.valor}</h4>
            <ComponentePrueba />
            <button onClick={handleClick}>
                ir a single/valor del param
            </button>
            <Link to={'/'} > {/* es nuestra etiqueta <a>*/}
            ir a home
            </Link>
            <Link to={'/single/' + params.valor}>
                ir a single + el valor del parametro
            </Link>
        </div>
    )
}