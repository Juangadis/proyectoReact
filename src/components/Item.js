import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <article className="cardProducto">
        <h1 className="cardTitle">{producto.title}</h1>
        <img src={producto.image} alt={producto.description}/>
        {/* <p>{producto.description}</p> */}
        <h3>Precio: ${producto.price}</h3>
        <Link to={`/producto/${producto.id}`}>ver detalle</Link>
    </article>
  )
}

export default Item