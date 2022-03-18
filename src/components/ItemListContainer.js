/* import ItemCount from "./ItemCount" */
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import products from "../database/products"
import { Route, Routes } from "react-router-dom"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer"

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
          <Routes>
            <Route path="/" element={<ItemList productos={productos}/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/categoria/:id" element={<ItemDetailContainer/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
          </Routes>
          {/* <ItemCount stock={10} inicial={1}/> */}
      </main>
    )
  }

export default ItemListContainer
