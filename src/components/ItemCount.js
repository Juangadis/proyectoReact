import {useState} from 'react'

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
    }

  return (
    <>
        <p>Mi contador es : {estado}</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={agregarCarrito}>Agregar al Carrito</button>
    </>
  )
}

export default ItemCount