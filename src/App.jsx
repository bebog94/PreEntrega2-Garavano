import React from 'react'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import NavBar from "./componentes/NavBar/NavBar"


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Te da la bienvenida"}/>
    </>
  )
}

export default App 