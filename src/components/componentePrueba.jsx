import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const ComponentePrueba = () => {

    // importar useGlobalReducer para acceder al store y el dispatch (acciones)
    const {store, dispatch} = useGlobalReducer()
    //store es un objeto
    console.log(store, dispatch)

    const handleMessageChange = () => {
       return  dispatch({
            type:'changeMessage',
            payload: 'pepe'
        })  
    }


    return (
        <div className="container">
            <h3>componente prueba </h3>
            {store?.message?
                <h4>mensaje en store: {store.message}</h4>
            : <p>sin mensajes</p>
            }
            <h3>largo del array de todos: {store?.todos?.length}</h3>
        
            <h4>
                cambiar mensaje en store a 'pepe'
            </h4>
            <button
            onClick={handleMessageChange}
            >cambialo!</button>
        
        
        
        </div>
    )
}