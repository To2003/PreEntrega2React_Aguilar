import { useState } from 'react'
import './App.css'
import { Menu } from './componentes/NavBar/navbar'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { ItemCount } from './componentes/ItemCount/ItemCount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <ItemListContainer greeting={"Bienvenidos"} />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada " ,quantity)} />
    </>

  )
}

export default App
