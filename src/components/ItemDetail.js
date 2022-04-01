import ItemCount from './ItemCount'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom"
import { contexto } from "../contexto/CartContext"

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(contexto)
    const [seleccionado, setSeleccionado] = useState(false)

    const onAdd = (cantidadSeleccionada) => {
      setSeleccionado(cantidadSeleccionada)
      addItem(producto, cantidadSeleccionada)
    }

    return (
        <article className="cardProductos">
          <h2 className="cardTitulo">{producto.title}</h2>
          <div className="card-caja">
            <img src={producto.image}></img>
            <div className="card-caja-derecha">
            <p>{producto.description}</p>
              <p>Precio: ${producto.price}</p>
              <div>
                <Rate count={5} value={producto.rating?.rate}/>
                <span>Rates : {producto.rating?.count}</span>
              </div>
              <ItemCount onAdd={onAdd} stock={10} initial={1}/>
              <Link to="/carrito">carrito</Link>
            </div>
          </div>
        </article>
    )
}

export default ItemDetail