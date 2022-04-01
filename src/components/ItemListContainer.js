/* import ItemCount from "./ItemCount" */
import {useEffect, useState} from "react"
import ItemList from "./ItemList"
import { Route, Routes, useParams } from "react-router-dom"
import Carrito from "./Carrito"
import ItemDetailContainer from "./ItemDetailContainer"
import { toast } from "react-toastify"
import { db } from "../firebase/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"
 

const ItemListContainer = (greeting) => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])

    const {idCategoria} = useParams()

    useEffect(() => {

      if(!idCategoria){

        const productosCollection = collection(db, "productos")
        const pedido = getDocs (productosCollection)

        pedido
        .then(resultado => setProductos(resultado.docs.map(doc => doc.data())))
        .catch(error=>toast.error("Error al traer los productos"))
        .finally(() =>setLoading(false))
      }else{

        const productosCollection = collection(db, "productos")
        const filtro = query(productosCollection, where("category", "==", idCategoria))
        const pedido = getDocs (filtro)

        pedido
        .then(resultado => setProductos(resultado.docs.map(doc => doc.data())))
        .catch(error=>toast.error("Error al traer los productos"))
        .finally(() =>setLoading(false))
      }

    },[idCategoria])

    return (
      <main>
        { loading ? <h2>Cargando ...</h2> : <main>
            <Routes>
              <Route path="/" element={<ItemList productos={productos}/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
              <Route path="/categoria/:idCategoria/*" element={<ItemListContainer/>}/>
              <Route path="/producto/:idProducto" element={<ItemDetailContainer/>}/>
            </Routes>
        </main> }
      </main>
    )
  }

export default ItemListContainer 
