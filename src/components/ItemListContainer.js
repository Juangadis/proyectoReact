/* import ItemCount from "./ItemCount" */
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { Route, Routes, useParams } from "react-router-dom"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer"
import { toast } from "react-toastify"
 

const ItemListContainer = (greeting) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(() => {

      fetch(`https://fakestoreapi.com/products`)
      .then((response)=>{
        return response.json()
      })
      .then((resultado) =>{
        setProductos(resultado)
      })
      .catch((error)=>{
        toast.error("Error al traer los productos")
      })
      .finally(() =>{
        setLoading(false)
      })

    },[idCategoria])

    return (
      <main>
        { loading ? <h2>Cargando ...</h2> : <main>
            <Routes>
              <Route path="/" element={<ItemList productos={productos}/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
              <Route path="/categoria/:idCategoria" element={<ItemDetailContainer/>}/>
              <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
            </Routes>
        </main> }
      </main>
    )
  }

export default ItemListContainer 
