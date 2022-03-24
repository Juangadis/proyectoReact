import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { toast } from "react-toastify"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  const {idProducto} = useParams()

  useEffect(()=>{

    fetch(`https://fakestoreapi.com/products/${idProducto}`)
    .then((response)=>{
      return response.json()
    })
    .then((resultado)=>{
      setProducto(resultado) 
    })
    .catch(()=>{
      toast.error("Error al cargar el producto")
    })
    .finally(()=>{
      setLoading(false)
    })

  })

  if(loading){
    return <h1>Cargando...</h1>
  }else{
    return (
      <ItemDetail producto={producto}/>
  )
  }
}

export default ItemDetailContainer