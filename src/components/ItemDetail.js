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
          <div className="card-caja">
            <img src={producto.image}></img>
            <div className="card-caja-derecha">
              <h2 className="cardTitulo">{producto.title}</h2>
              <div>
                <Rate count={5} value={producto.rating?.rate}/>
                <span>Rates : {producto.rating?.count}</span>
              </div>
              <p>{producto.description}</p>
              <p>${producto.price}</p>
              <ItemCount onAdd={onAdd} stock={producto.stock} initial={1}/>
              <Link className="btnComprarAhora" to="/carrito">Comprar ahora</Link>
            </div>
          </div>
        </article>
    )
}

export default ItemDetail