import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { default as data } from './data/data.json';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  const [total, setTotal] = useState(0);
  const [productInCart, setProductInCart] = useState([]);

  function addToCart(product){
    setProductInCart([...productInCart, product])
    setTotal(total + product.price);
  }
  let productList = data.map((product)=>{
    return(<Product productData={product} addToCartFunc={addToCart} key={product.id}/>)
  })

  return (<div><Cart productInCart={productInCart} totalAmount={total}/>

    <div className="App">
      {productList}
    </div>
    </div>
  )
}

export default App
