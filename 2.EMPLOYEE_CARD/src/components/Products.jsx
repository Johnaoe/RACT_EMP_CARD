const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

function Products() {
    let productsjsx = products.map((product) =>{
        return (
            <div key={product.id}>
                <h1>{product.title}</h1>
            </div>
        );
    })
    return (<div>{productsjsx}</div>);
}

export default Products;