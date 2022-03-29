import { useContext } from "react"
import { contexto } from "../contexto/CartContext"

const Carrito = () => {

  const {carrito, total, borrarProdDelCarrito, limpiarCarrito} = useContext(contexto)

  const quitarProducto = (producto) => {
    borrarProdDelCarrito(producto)
  }

  const borrarCarrito = () => {
    limpiarCarrito()
  }

  return (
    <div>
      <h2>Carrito</h2>
      {carrito.map(producto => (
        <div key={producto.id}>
          <p>{producto.title}</p>
          <p>{producto.cantidad} x {producto.price}</p>
          <p>Total parcial: ${producto.cantidad * producto.price} </p>
          <button onClick={quitarProducto(producto.id)}>Quitar Producto</button>
        </div>
      ))}
      <button onClick={borrarCarrito()}>Limpiar el carrito</button>
    </div>
  )
}

export default Carrito 