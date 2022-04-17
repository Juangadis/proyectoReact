import {useState} from 'react'
import { toast } from "react-toastify"

const ItemCount = (props) => {

    let [estado, setEstado] = useState(props.initial)

    const sumar = () => {
        if(estado < props.stock){
            setEstado(estado + 1)
        }
    }

    const restar = () => {
      if(estado > props.initial){
        setEstado(estado - 1)
      }
    }

    const agregarCarrito = () => {
      props.onAdd(estado)
      toast.success('Producto Agregado :D', {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

  return (
    <>
      <div className="unidades">
        <p>Cantidad : {estado === 1 ? (`${estado} unidad`) : (`${estado} unidades`)}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
      </div>
      <button className="btnAgregarCarrito" onClick={agregarCarrito}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount