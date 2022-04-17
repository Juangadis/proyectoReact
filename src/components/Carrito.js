import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../contexto/CartContext"
import Formulario from "./Formulario"

const Carrito = () => {

  const {carrito, calcTotal, borrarProdDelCarrito, limpiarCarrito} = useContext(contexto)

  const borrarCarrito = () => { limpiarCarrito() }

  return (
    <>
      { carrito.length === 0 ? (
        <>
          <p className="noHayProducto">No hay productos en el carrito</p>
          <div className="irHome">
            <Link  to="/">Home</Link>
          </div>
        </>
      ) : (
        <>
          <div>
            {carrito.map(producto => (
              <div className="productoCarrito" key={producto.id}>
                <img src={producto.image}></img>
                <div className="caja-productoCarrito">
                  <p>{producto.title}</p>
                  <p>{producto.cantidad} x ${producto.price}</p>
                  <button onClick={() => borrarProdDelCarrito(producto.id)}>Quitar Producto</button>
                </div>
              </div>
            ))}
          </div>
          <div className="caja-CarritoBottom">
            <p>Total : ${calcTotal()}</p>
            <div className="caja-CarritoBottom-botones">
              <button onClick={borrarCarrito}>Limpiar el carrito</button>
            </div>
          </div>
          <Formulario/>
        </>
      )}
    </>
  )
}
export default Carrito 