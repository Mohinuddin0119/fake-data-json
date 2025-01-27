
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import SingleProduct from './SingleProduct'

function App() {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    fetch('./fakeData.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <>
    <div className="main-container">
      <div className="cards-container">
        {products.map(pd => <SingleProduct key={products.id} product={pd}></SingleProduct>)}
      </div>
      <div className="cart-container">This is cart</div>
    </div>
    </>
  )
}

export default App
