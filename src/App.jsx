import './App.css'
import { NavBar } from './componentes/NavBar/navbar'
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>} />
          <Route path='/category/:itemCategory' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
