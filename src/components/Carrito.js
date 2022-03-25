import { useContext } from "react"
import { contexto } from "./CartContext"

const Carrito = () => {

  const {carrito, total} = useContext(contexto)
  console.log(carrito)

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.map(producto => (
        <div key={producto.id}>
          <p>{producto.nombre}</p>
          <p>{producto.cantidad} x {producto.precio}</p>
          <p>Total parcial: {producto.cantidad * producto.precio} </p>
        </div>
      ))}
    </div>
  )
}

export default Carrito 