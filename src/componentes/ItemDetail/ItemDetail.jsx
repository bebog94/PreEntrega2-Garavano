import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id,nombre,precio,img}) => {
  return (
    <div className='cardProductoDetail'>
        <h2>Nombre:{nombre}</h2>
        
        <p>Precio:${precio}</p>
        <p className='pProductoDetail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, porro minus aut neque ut nisi aperiam voluptas, voluptate autem in recusandae doloribus consequatur iure amet dolore cupiditate explicabo dolorem impedit?</p>
        <p>id:{id}</p>
        <img className='imgProductoDetail' src={img} alt={nombre} />
        
    </div>
  )
}

export default ItemDetail