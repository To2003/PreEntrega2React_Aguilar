import { Titulo } from "../Titulo/title"
import  { CartWidget } from "../CartWidget/cartWidget"
import './Nav.css'
import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {

    return (
        <header className="header">
            <div className="contenedor">
                <Titulo />
                <nav className="menu">
                    <ul className="listaMenu">
                        <li>
                            <Link to='/'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                </svg>
                                <span>Inicio</span>
                            </Link>
                        </li>
    
                        <li>
                            <NavLink to={'/category/Remeras'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                </svg>
                                <span>Remeras</span>
                            </NavLink>
                            <ul>
                                <li><NavLink to={'/category/Anime'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Anime</NavLink></li>
                                <li><NavLink to={'/category/Classic'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>Classic</NavLink></li>
                                <li><NavLink to={'/category/VideoGames'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>VideoGames</NavLink></li>
                            </ul>
                        </li>

                        <li>
                            <NavLink to={'/category/Gorras'} className={({ isActive }) => isActive ? 'ActiveOption' : 'option'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket3" viewBox="0 0 16 16">
                                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                                </svg>
                                <span>Gorras</span>
                            </NavLink>
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

