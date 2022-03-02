const ItemListContainer = (greeting) => {
    const lista = {
        nombre : "Juan",
        edad : "23"
    }
    return (
      <main>
          <h2>Bienvenidos {greeting.nombre}!!</h2>
          <p>Tenes {greeting.edad} años</p>
      </main>
    )
  }

export default ItemListContainer
