import ItemCount from "./ItemCount"

const ItemListContainer = (greeting) => {

    return (
      <main>
          <h2>Bienvenidos {greeting.nombre}!!</h2>
          <p>Tenes {greeting.edad} años</p>
          <ItemCount stock={10} inicial={1}/>
      </main>
    )
  }

export default ItemListContainer
