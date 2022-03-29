import { createContext, useState } from 'react'

export const contexto = createContext()
const {Provider} = contexto

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addItem = (producto,cantidad) => {
        const copiaCarrito = [...carrito]
        const itemAlCarrito = {...producto, cantidad}

        if(yaExisteEnCarrito(producto.id)){
            let index = copiaCarrito.findIndex (item => item.id === producto.id)
            copiaCarrito[index].cantidad += cantidad
            setCarrito(copiaCarrito)
        }else{
            copiaCarrito.push(itemAlCarrito)
            setCarrito(copiaCarrito)
        }
    }
    const yaExisteEnCarrito = (id) => {
        return carrito.some(function(item) {
            return item.id === id
        })
    }
    const borrarProdDelCarrito = (id) => {
            const resultado = carrito.filter(producto => producto.id !== id)
            setCarrito(resultado)
    }
    const limpiarCarrito = () => {
        setCarrito([])
    }

    const calcCantidad = () => {
        let cantidad = 0
        carrito.forEach( item => cantidad = item.cantidad)
        return cantidad
    }

    const valorDelContexto = {
        carrito,
        addItem,
        calcCantidad,
        borrarProdDelCarrito,
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider