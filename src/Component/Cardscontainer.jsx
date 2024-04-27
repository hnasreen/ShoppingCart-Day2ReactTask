import React, { useContext } from 'react';
import Card from "./Card";
import { CardsDataContext } from '../App';


const Cardscontainer = () => {

    // To import the cardsData from the App.jsx, we use the useContext function by the CardsDataContext

    const { cardsData, handleAddToCart, handleRemoveFromCart } = useContext(CardsDataContext);

    return (
        <div className="container">
            <div className="row">
                {cardsData.map(cardData => (
                    <div key={cardData.id} className="col-md-3">
                        <Card {...cardData} handleAddToCart={() => handleAddToCart(cardData.id)} handleRemoveFromCart={() => handleRemoveFromCart(cardData.id)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cardscontainer