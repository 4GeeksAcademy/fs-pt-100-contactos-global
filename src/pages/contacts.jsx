import { useEffect, useState } from "react"
import { ContactCard } from "../components/card"
import useGlobalReducer from "../hooks/useGlobalReducer"


export const Contacts = () => {

    const { store, dispatch } = useGlobalReducer();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        city: ''
    });


    useEffect(()=>{
        dispatch({
            type:'load_data',
            payload: formData
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        //tiene que lograr añadir la info que tenemos en formData a store.contacts  
        dispatch({
            type: 'add_contact',
            payload: formData
        })
    
    }


    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }



    return (

        <div className="container">

            <form className="form-control" onSubmit={handleSubmit} >
                <input name="name"  value={formData.name} placeholder="name" onChange={handleChange} className="form-control" type="text" />
                <input name="phone" value={formData.phone} placeholder="phone" onChange={handleChange} className="form-control" type="text" />
                <input name="city" value={formData.city} placeholder="city" onChange={handleChange} className="form-control" type="text" />
                <input className="form-control" type="submit" />
            </form>

            {/* mostramos contactos */}
            {store.contacts?.map((el,i )=> <ContactCard key={i} name={el.name} phone={el.phone} city={el.city} />)}
        </div>
    )
}