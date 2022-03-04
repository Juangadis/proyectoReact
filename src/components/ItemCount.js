import {useState} from 'react'

const ItemCount = (props) => {

    let [estado, setEstado] = useState(props.inicial)

    const sumar = () => {
        if(estado < props.stock){
            setEstado(estado + 1)
        }
    }

    const restar = () => {
      setEstado(estado - 1)
    }

  return (
    <>
        <p>Mi contador es : {estado}</p>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
    </>
  )
}

export default ItemCount