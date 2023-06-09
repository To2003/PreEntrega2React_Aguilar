import './ItemDetailContainer.css'
import { useState, useEffect } from "react";
import { getProductsById} from '../asyncMock';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId) 
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return(
        <div className='ItemDetailCont'>
            <ItemDetail {...products} />
        </div>
    )
}