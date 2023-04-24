const products = [
    {
        id: '1',
        name: 'Remera 1',
        price: 2000,
        img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Funiversoventura.vteximg.com.br%2Farquivos%2Fids%2F193028-600-600%2FRemera-Manga-Corta-DC-Shoes-Round-We-Go-Urbano-Hombre-Negro-1222102104.jpg%3Fv%3D637789732032600000&tbnid=tNbU8DxD7kezIM&vet=12ahUKEwiO0vP63cH-AhUIspUCHZ-bDHMQMygAegUIARCXAg..i&imgrefurl=https%3A%2F%2Fwww.universoaventura.com.ar%2Fremera-manga-corta-dc-shoes-round-we-go-urbano-hombre-negro-1222102104%2Fp&docid=OsPZLV8JOc2EKM&w=600&h=600&q=REmeras&client=opera-gx&ved=2ahUKEwiO0vP63cH-AhUIspUCHZ-bDHMQMygAegUIARCXAg',
        stock: 20,
        description: ''
    },

    {
        id: '2',
        name: 'Remera 2',
        price: 3000,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftierheimseite.de%2Fremera-manga-corta-dc-shoes-round-we-go-urbano-cc-35355168&psig=AOvVaw16o2bSwQ4j2e11sxgueGTl&ust=1682398772480000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDjpf3dwf4CFQAAAAAdAAAAABAN',
        stock: 20,
        description: ''
    },
    
    {
        id: '3',
        name: 'Remera 3',
        price: 1500,
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Farticulo.mercadolibre.com.ar%2FMLA-1116306156-remera-manga-corta-dc-star-hombre-negra-_JM&psig=AOvVaw16o2bSwQ4j2e11sxgueGTl&ust=1682398772480000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMDjpf3dwf4CFQAAAAAdAAAAABAV',
        stock: 20,
        description: ''
    }
]

export const getProducts = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}