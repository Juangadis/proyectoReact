import React from 'react'
import ItemDetail from './ItemDetail'
import {useEffect, useState} from "react"

let producto ={
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    imgURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rick-y-morty-1563393839.jpg?crop=1.00xw:0.891xh;0,0.0545xh&resize=480:*",
    descripcion: "La serie sigue las desventuras de un científico, Rick, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos."
  }

const ItemDetailContainer = (greeting) => {

    const [productos, setProductos] = useState({})

    useEffect(() => {

      const pedido = new Promise ((res, rej)=>{
        setTimeout(()=> {
          res(producto)
        },5000)
      })

      pedido
      .then((resultado)=>{
        console.log("Estuvo Bien")
        setProductos(producto)
      })
      .catch((error)=>{
        console.log("Estuvo mal")
      })

    },[])

    return (
      <main>
          <ItemDetail productos={productos}/>
          {/* <ItemCount stock={10} inicial={1}/> */}
      </main>
    )
  }

export default ItemDetailContainer