import { useState } from 'react'
import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id,nombre,precio,img, maximoStock}) => {

  const [agregarCantidad,setAgregarCantidad]=useState(0);

  const manejadorCantidad =(cantidad)=>{
    setAgregarCantidad(cantidad);
    console.log("productos agregados: " + cantidad)


  }
  return (
    <div className='cardProductoDetail'>
        <h2>Nombre:{nombre}</h2>
        <p>Precio:${precio}</p>
        <p className='pProductoDetail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro minus aut neque ut nisi aperiam voluptas, voluptate autem in recusandae doloribus consequatur iure amet dolore cupiditate explicabo dolorem impedit?</p>
        <p>Id:{id}</p>
        <img className='imgProductoDetail' src={img} alt={nombre} />

        { agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>): (<ItemCount inicial={1} maximoStock={maximoStock} funcionAgregar={manejadorCantidad} />)}
        
    </div>
  )
}

export default ItemDetail