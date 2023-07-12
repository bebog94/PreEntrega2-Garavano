import React from 'react'

const CardWidget = () => {
    const carrito = "../img/carrito.png"
  return (
    <div>
        <img className='carrito' src={carrito} alt="una imagen de carrito" />
        <strong>10</strong>

    </div>
  )
}

export default CardWidget