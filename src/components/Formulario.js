import {useContext, useState} from 'react';
import { collection, serverTimestamp, addDoc } from "firebase/firestore"
import { contexto } from "../contexto/CartContext"
import { db } from "../firebase/firebase"
import { toast } from "react-toastify"

const Formulario = () => {

  const {carrito, calcTotal, limpiarCarrito} = useContext(contexto)

    const [datos, setDatos] = useState({
        nombre:'',
        telefono:'',
        email:''
    })

    console.log(datos.nombre)

    const guardarDatos = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    const terminarCompra = () => {

        limpiarCarrito()
        
        const orden = {
          buyer : {
            nombre: datos.nombre,
            telefono: datos.telefono,
            email: datos.email
          },
          items: carrito,
          date: serverTimestamp(),
          total: calcTotal()
        }
    
        const ordenesCollection = collection(db, "ordenes")
    
        const pedido = addDoc(ordenesCollection , orden )
    
        pedido
          .then(resultado => {toast.success('Compra Exitosa !!!', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });})
          .catch(error => {toast.error('Hubo un error D:', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });})
      }

  return (
      <div className="cajaFormulario">
        <form className="formulario">
            <h2>Complete los datos para procesar la compra:</h2>
            <div>
                <input placeholder='Nombre y Apellido' type='text' name='nombre' onChange={guardarDatos}/>
            </div>
            <div>
                <input placeholder='Telefono' type='number' name='telefono' onChange={guardarDatos}/>
            </div>
            <div>
                <input placeholder='Email' type='text' name='email' onChange={guardarDatos}/>
            </div>
            <div>
                <button onClick={terminarCompra} type="submit">Realizar Compra</button>
            </div>
        </form>
    </div>
  )
}

export default Formulario