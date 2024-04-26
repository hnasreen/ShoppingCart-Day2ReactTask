import React from 'react'
import { useState } from 'react';
import Navbar from './Component/Navbar'
import Jumbotron from './Component/Jumbotron'
import Cardscontainer from './Component/Cardscontainer'
import './App.css'

const App = () => {

  const [isInCart, setIsInCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const handleAddToCart = () => {
    setIsInCart(true);
    setCartQuantity(cartQuantity + 1);
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    setCartQuantity(cartQuantity - 1);
  };

  return (
    <div>
      <div>
        <Navbar cartQuantity={cartQuantity} />
      </div>
      <div>
        <Jumbotron />
      </div>
      <div>
        <Cardscontainer
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          cartQuantity={cartQuantity}
          isInCart={isInCart}
        />
      </div>
      <div className="bottom-footer">
        <p>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> Your Website 2023</p>
      </div>
    </div>
  )
}

export default App