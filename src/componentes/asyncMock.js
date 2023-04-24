const products = [
    {
        id: '1',
        name: 'Remera 1',
        price: 2000,
        foto: 'https://frikio.site44.com/sites/frikio.com.ar/files/productcache/4/11/remera_evolution_gamer_11.jpg',
        stock: 20,
        description: 'Unisex | Talles: desde S a XXL',
        category: 'Remeras'
    },

    {
        id: '2',
        name: 'Remera 2',
        price: 3000,
        foto: 'https://tienda.guantexindustrial.com.ar/2507-large_default/remera-algodon-jersey-gris-talle-xxxl.jpg',
        stock: 20,
        description: 'Unisex | Talles: desde S a XX',
        category: 'Remeras' 
    },
    
    {
        id: '3',
        name: 'Remera 3',
        price: 1500,
        foto: 'https://universoventura.vteximg.com.br/arquivos/ids/193028-500-500/Remera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg?v=637789732032600000',
        stock: 20,
        description: 'Unisex | Talles: desde S a XX',
        category: 'Remeras'
    }
]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        }, 500)
    })
}

export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productsCategory))
        }, 500)
    })
}