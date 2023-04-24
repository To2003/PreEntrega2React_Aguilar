import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'
import './Item.css'

export const Item = ({id, name, foto, price, stock}) => {

    return (
        <article className='cardItem'>
            <header className='header'>
                <h2 className='itemHeader'>
                    {name}
                </h2>
            </header>

            <picture>
                <img src={foto}  alt={name}  className='itemImg' />
            </picture>

            <section className='sectionInfo'>
                <p className='info'>
                    Precio: ${price}
                </p>

                <p className='info'>
                    Stock/Cantidad disponible: {stock}
                </p>

                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada " ,quantity)} />
            </section>

            <footer className='itemFooter'>
                <Link to={`/detail/${id}`} className='option'> Ver Detalle </Link>
            </footer>

        </article>
    )
}