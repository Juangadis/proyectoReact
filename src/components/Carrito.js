import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../contexto/CartContext"

const Carrito = () => {

  const {carrito, total, borrarProdDelCarrito, limpiarCarrito} = useContext(contexto)

  const quitarProducto = (id) => {
    console.log(id)
    borrarProdDelCarrito(id)
  }

  const borrarCarrito = () => {
    limpiarCarrito()
  }

  return (
    <div>
      <h2>Carrito</h2>
      { carrito.length > 0 ? carrito.map(producto => (
        <div key={producto.id}>
          <p>{producto.title}</p>
          <p>{producto.cantidad} x {producto.price}</p>
          <p>Total parcial: ${producto.cantidad * producto.price} </p>
          <button onClick={quitarProducto}>Quitar Producto</button>
        </div>
      ))  : <div>
            <p>No hay productos en el carrito</p>
            <Link to="/" className="btn-irTienda">Ir a la tienda</Link>
           </div>}
      <button onClick={borrarCarrito}>Limpiar el carrito</button>
    </div>
  )
}

export default Carrito 