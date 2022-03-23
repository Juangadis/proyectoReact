import ItemCount from './ItemCount'

const ItemDetail = ({productos}) => {

    const onAdd = (cantidadSeleccionada) => {
      console.log("Añadir al carrito",
      cantidadSeleccionada)
    }

    return (
      <>
          <div className="cardProductos">
                  <h2 className="cardTitulo">{productos.nombre}</h2>
                  <div className="card-caja">
                    <img src={productos.imgURL}></img>
                    <div className="card-caja-derecha">
                        <p>Precio: ${productos.precio}</p>
                        <p>{productos.descripcion}</p>
                        <ItemCount onAdd={onAdd} stock={10} initial={1}/>
                    </div>
                  </div>
          </div>
      </>
    )
}

export default ItemDetail