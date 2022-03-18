import Item from "./Item"

const ItemList = ({productos}) => {
  console.log("render")
  return (
    <>
        <section className="cardsProductos">
            {productos.map((producto) => {
              return <Item key={producto.id} producto={producto}/>
            })}
        </section>
    </>
  )
}

export default ItemList