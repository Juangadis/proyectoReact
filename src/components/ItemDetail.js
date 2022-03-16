import React from 'react'

const ItemDetail = ({productos}) => {
    return (
      <>
          <div className="cardProductos">
                  <h2 className="cardTitulo">{productos.nombre}</h2>
                  <div className="card-caja">
                    <img src={productos.imgURL}></img>
                    <div className="card-caja-derecha">
                        <p>Precio: ${productos.precio}</p>
                        <p>{productos.descripcion}</p>
                    </div>
                    
                  </div>
          </div>
      </>
    )
}

export default ItemDetail