import React from 'react'
import { createContext, useState, useContext } from 'react';
import Navbar from './Component/Navbar'
import Jumbotron from './Component/Jumbotron'
import Cardscontainer from './Component/Cardscontainer'
import './App.css'

// Creating Context to pass the Navbar.jsx
export const CartContext = createContext();

// Creating Context to pass the Card data to Cardcontainer.jsx
export const CardsDataContext = createContext();

export const App = () => {

  // Creating state to assign the initial CartQuantity to 0

  const [cartQuantity, setCartQuantity] = useState(0);

  // Using the function addToCart, we trigger the state function SetCartQuantity to increment the cartQuantity value

  const addToCart = () => {
    setCartQuantity(cartQuantity => cartQuantity + 1);
  };

  // Using the function removeFromCart, we trigger the state function SetCartQuantity to decrement the cartQuantity value

  const removeFromCart = () => {
    setCartQuantity(cartQuantity => (cartQuantity > 0 ? cartQuantity - 1 : 0));
  };

// Passing the Card data as an array of objects to the CardsData state object

  const [cardsData, setCardsData] = useState([
    { id: 1, title: "Fancy Product", price: "$40.00-$80.00", button: "View options", star: false, sale: false, strikePrice: null, isInCart: false },
    { id: 2, title: "Special Item", price: "$18.00", button: "Add to Cart", star: true, sale: true, strikePrice: "$20.00", isInCart: false },
    { id: 3, title: "Sale Item", price: "$25.00", button: "Add to Cart", star: false, sale: true, strikePrice: "$50.00", isInCart: false },
    { id: 4, title: "Popular Item", price: "$40.00", button: "Add to Cart", star: true, sale: false, strikePrice: null, isInCart: false },
    { id: 5, title: "Sale Item", price: "$25.00", button: "Add to Cart", star: false, sale: true, strikePrice: "$50.00", isInCart: false },
    { id: 6, title: "Fancy Product", price: "$120.00 - $280.00", button: "View options", star: false, sale: false, strikePrice: null, isInCart: false },
    { id: 7, title: "Special Item", price: "$18.00", button: "Add to Cart", star: true, sale: true, strikePrice: "$20.00", isInCart: false },
    { id: 8, title: "Popular Item", price: "$40.00", button: "Add to Cart", star: true, sale: false, strikePrice: null, isInCart: false }])


//  Using the function handleAddtoCart, we trigger the state function SetCardsData in which we pass the id to check if the card id has been added to cart, if so we set the value of the isInCart to true.

  const handleAddToCart = (id) => {
    setCardsData(prevCardsData => {
      return prevCardsData.map(card => {
        if (card.id === id) {
          return { ...card, isInCart: true };
        }
        return card;
      });
    });
    addToCart();
  };


  //  Using the function handleRemovefromCart, we trigger the state function SetCardsData in which we pass the id to check if the card id has been added to cart, if so we set the value of the isInCart to false.

  const handleRemoveFromCart = (id) => {
    setCardsData(prevCardsData => {
      return prevCardsData.map(card => {
        if (card.id === id) {
          return { ...card, isInCart: false };
        }
        return card;
      });
    });
    removeFromCart();
  };

  return (

    <div>

       {/* Passing the data to the children components using context provider */}
       
      <CartContext.Provider value={{ cartQuantity }}>
        <CardsDataContext.Provider value={{ cardsData , handleAddToCart, handleRemoveFromCart}}>
          <div>
            <Navbar />
          </div>
          <div>
            <Jumbotron />
          </div>
          <div>
            <Cardscontainer />
          </div>
          <div className="bottom-footer">
            <p>Copyright <i className="fa fa-copyright" aria-hidden="true"></i> Your Website 2023</p>
          </div>
        </CardsDataContext.Provider>
      </CartContext.Provider>
    </div>

  )
}

export default App