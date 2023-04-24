import './ItemListContainer.css'
import { useState, useEffect } from "react";
import { getProducts } from '../asyncMock';
import { ItemList } from "../ItemList/ItemList";


export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div className="contenedor">
            <div className="itemList">
                <h1>{greeting}</h1>
                <ItemList products={products} />
            </div>
        </div>
    )
}
