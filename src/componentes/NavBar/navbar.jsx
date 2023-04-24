import { Titulo } from "../Titulo/title"
import  { CartWidget } from "../CartWidget/cartWidget"
import './Nav.css'

export const Menu = () => {

    return (
        <header className="header">
            <div className="contenedor">
                <Titulo />
                <nav className="menu">
                    <ul className="listaMenu">
                        <li>
                            <a href="./index.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <span>Inicio</span>
                            </a>
                        </li>
    
                        <li>
                            <a href="./pages/productos.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                </svg>
                                <span>Productos</span>
                            </a>
                            <ul>
                                <li><a href="./pages/productos.html">Almendras</a></li>
                                <li><a href="./pages/productos.html#panes">Nueces</a></li>
                                <li><a href="./pages/productos.html#galleta">Avellanas</a></li>
                                
                            </ul>
                        </li>
    
                        <li>
                            <a href="./pages/contacto.html">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
                                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
                                <span>Contacto</span>
                            </a>
                        </li>
                        <li>
                            <CartWidget />
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

