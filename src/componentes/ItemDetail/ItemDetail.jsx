import { ItemCount } from '../ItemCount/ItemCount'
import './ItemDetail.css'

export const ItemDetail = ({id, name, foto, description, price, stock, category}) => {
    return(
            <article className='cardItemDetail'>
                <header className='header'>
                    <h2 className='itemHeader'>
                        {name}
                    </h2>
                </header>

                <picture>
                    <img src={foto} alt={name} className='itemDetailImg'/>
                </picture>

                <section className='sectionItemDetail'>
                    <p className='info'> {category} </p>
                    <p className='info'> {description} </p>
                    <p className='info'> ${price} </p>
                    <p className='info'> {stock} </p>
                </section>

                <footer className='footerItemDetail'>
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
                </footer>

            </article>
    )
}
