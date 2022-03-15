import ItemCount from "./ItemCount"
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import products from "../database/products"

console.log(products)
/* let productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300
  }
] */

const ItemListContainer = (greeting) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

      const pedido = new Promise ((res, rej)=>{
        setTimeout(()=> {
          res(products)
        },5000)
      })

      pedido
      .then((resultado)=>{
        console.log("Estuvo Bien")
        setProductos(products)
      })
      .catch((error)=>{
        console.log("Estuvo mal")
      })

    },[])

    return (
      <main>
          <h2>Bienvenidos {greeting.nombre}!!</h2>
          <p>Tenes {greeting.edad} años</p>
          <ItemList productos={productos}/>
          {/* <ItemCount stock={10} inicial={1}/> */}
      </main>
    )
  }

export default ItemListContainer
