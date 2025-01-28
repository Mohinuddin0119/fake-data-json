import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import SingleProduct from "./SingleProduct";
import CartDetails from "./CartDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (product) => {
    // setCart([...cart, product])
    const isExisting = cart.find((pd) => pd.id == product.id);
    if (!isExisting) {
      setCart([...cart, product]);
    } else {
      alert("already in cart");
    }
  };

  const handleCartDelete = p =>{
    const newCart = cart.filter(item => p.id !== item.id)
    setCart(newCart)
  }

  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((pd) => (
            <SingleProduct
              key={products.id}
              handleCart={handleCart}
              product={pd}
            ></SingleProduct>
          ))}
        </div>
        <div className="cart-container">
          <h1 className="text-center">This is cart</h1>
          <div className="cart-title">
            <h5>name</h5>
            <h5>Price</h5>
          </div>
          <hr />
            {cart.map((item,index) => <CartDetails key={item.id} handleCartDelete ={handleCartDelete} index={index} item ={item}></CartDetails>)}
        </div>
      </div>
    </>
  );
}

export default App;
