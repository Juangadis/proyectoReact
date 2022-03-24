/* import ItemCount from './ItemCount' */
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

const ItemDetail = ({producto}) => {

    /* const onAdd = (cantidadSeleccionada) => {
      console.log("Añadir al carrito",
      cantidadSeleccionada)
    } */

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
                <span>Rates : {item.rating?.count}</span>
              </div>
              {/* <ItemCount onAdd={onAdd} stock={10} initial={1}/> */}
            </div>
          </div>
        </article>
    )
}

export default ItemDetail