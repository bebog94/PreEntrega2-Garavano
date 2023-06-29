const productos = [
    {id:"1", nombre:"Intel i3", precio: 100000, img: "../img/inteli3.jpg",idCat: "1"},
    {id:"2", nombre:"Intel i3", precio: 100000, img: "../img/inteli3.jpg",idCat: "1"},
    {id:"3", nombre:"Intel i3", precio: 100000, img: "../img/inteli3.jpg",idCat: "2"},
    {id:"4", nombre:"Intel i5", precio: 120000, img: "../img/inteli5.jpg",idCat: "2"},
    {id:"5", nombre:"Intel i7", precio: 150000, img: "../img/inteli7.jpg",idCat: "3"},
    {id:"6", nombre:"Intel i9", precio: 180000, img: "../img/inteli9.jpg",idCat: "3"},

]


export const getProductos = () => {

    return new Promise(res => {
        setTimeout(() => {
            res(productos);
        }, 2000);
    })

}
export const getUnProducto = (id) =>{

    return new Promise(res => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id );
            res(producto);
        },1000);
    })

}

export const getProductosPorCategoria = (idCategoria) =>{

    return new Promise(res=> {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat===idCategoria);
            res(productosCategoria);
        }, 1000);
    })
}
