import { useContext } from "react"
import { Link } from "react-router-dom"
import { contexto } from "../contexto/CartContext"
import { db } from "../firebase/firebase"
import { collection, serverTimestamp, addDoc, updateDoc, query, where, getDocs , doc } from "firebase/firestore"
import { toast } from "react-toastify"

const Carrito = () => {

  const {carrito, total, borrarProdDelCarrito, limpiarCarrito} = useContext(contexto)

  const borrarCarrito = () => {
    limpiarCarrito()
  }

  const terminarCompra = () => {

    const orden = {
      buyer: {
        nombre: "Juan",
        telefono: "113434343434",
        email: "fulanito@gmail.com"
      },
      items: carrito,
      date: serverTimestamp(),
      total: total
    }

    const ordenesCollection = collection(db, "ordenes")
    const productosCollection = collection(db, "productos")
    const pedido = addDoc(ordenesCollection, orden)

    pedido
      .then(resultado => {
        toast.success("Finalizo la compra!")
      })
      .catch(error => {
        toast.error("hubo un error!")
      })
  }

  return (
    <>
      { carrito.length === 0 ? (
        <>
          <p>No hay productos en el carrito</p>
          <Link to="/">Home</Link>
        </>
      ) : (
        <>
          <div>
            {carrito.map(producto => (
              <div key={producto.id}>
                <p>{producto.title}</p>
                <p>{producto.cantidad} x {producto.price}</p>
                <p>Total parcial: ${producto.cantidad * producto.price} </p>
                <button onClick={() => borrarProdDelCarrito(producto.id)}>Quitar Producto</button>
              </div>
            ))}
            <button onClick={borrarCarrito}>Limpiar el carrito</button>
          </div>
        </>
      )}
      <button onClick={terminarCompra}>Terminar la compra</button>
    </>
  )
}
export default Carrito 