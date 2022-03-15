const Item = ({producto}) => {
  return (
    <div className="cardProducto">
        <h1 className="cardTitle">{producto.title}</h1>
        <img src={producto.imgUrl} alt={producto.description}/>
        <p>{producto.description}</p>
        <h3>{producto.price}</h3>
    </div>
  )
}

export default Item