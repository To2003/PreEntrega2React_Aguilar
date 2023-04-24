import './ItemList.css'
import { Item } from '../Item/Item'

export const ItemList = ({products }) => {
    return(
        <div className='listGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}
