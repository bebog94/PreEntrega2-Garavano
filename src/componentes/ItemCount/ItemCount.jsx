import { useState } from "react"

const ItemCount = (maximoStock) => {

    
    const [contador,setContador]=useState(0);

    const aumentarContador = () => {
        if (contador < maximoStock) {
          setContador(contador + 1);
        }
      };
    
    const disminuirContador = () =>{
        if (contador > 0){
            setContador(contador - 1);
        }

    }

  return (
    <>
    
    <h4>
        <button onClick={disminuirContador}>-</button>
          {contador}  
        <button onClick={aumentarContador}>+</button>
    </h4>
    </>
  )
}

export default ItemCount