import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemDetail from "./ItemDetail"
import { db } from "../firebase/firebase"
import { collection, getDoc, doc, query, where, getDocs } from "firebase/firestore"

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const {idProducto} = useParams()

  useEffect(()=>{

    const productosCollection = collection(db, "productos")
    const filtro = query(productosCollection, where("id", "==", Number(idProducto)))
    const pedido = getDocs (filtro) 

    pedido
    .then(resultado => setProducto(resultado.docs[0].data()))
    .catch(error=>toast.error("Error al traer los productos"))
    .finally(() =>setLoading(false))

  },[])

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail producto={producto}/>
  )
  }
}

export default ItemDetailContainer