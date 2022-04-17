import { Link } from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <article className="cardProducto">
        <h1 className="cardTitle">{producto.title}</h1>
        <img src={producto.image} alt={producto.description}/>
        <h3>${producto.price}</h3>
        <Link to={`/producto/${producto.id}`}>ver detalle</Link>
    </article>
  )
}

export default Item