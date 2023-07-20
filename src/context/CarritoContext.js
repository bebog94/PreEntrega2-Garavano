import React from "react";
import { useState, createContext } from "react";

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

export const CarritoProvider =()=> {

    const [carrito,setCarrito]= useState([]);
    const [total,setTotal]= useState(0);
    const [cantidadTotal,setCantidadTotal]= useState(0);

    console.log(carrito);


    const agregarProducto =(item, cantidad) =>{
        const productoExiste = carrito.find(prod => prod.item.id === prod.id);

        if(!productoExiste){
            setCarrito (prev=>[...prev,{item,cantidad}]);
            setCantidadTotal(prev=> prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad));
        } else{

            const carritoActualizado = carrito.map( prod =>{
                if(prod.item.id === item.id){
                    return{...prod, cantidad: prod.cantidad + cantidad}
                }else{
                    return prod;
                    
                }
            });
            setCarrito (carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => (item.precio * cantidad));
        }
    }
}




 