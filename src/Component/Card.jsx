import Cardpic from './index.jpeg'
import './Card.css';

const Card = ({ title, price, button, star, sale, strikePrice,isInCart, handleAddToCart, handleRemoveFromCart }) => {

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<i key={i} className="fa fa-star" aria-hidden="true" style={{ color: 'rgb(255,192,7)' }}></i>);
        }
        return stars;
    };

//   We check if the button value is Add to Cart, if that button's isInCart status is true, then we call the handleRemoveFromCart function else handleAddToCart function.

    const handleClick = () => {
        if (button === "Add to Cart") {
            if (isInCart) {
                handleRemoveFromCart();
            } else {
                handleAddToCart();
            }
        }
    };

    return (
        <div className="card-wrapper">
        <div className="card">
            {sale && <div className="position-absolute top-0 end-0 p-1 bg-dark text-white btn btn-dark mt-3 me-2">Sale</div>}
            <img src={Cardpic} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="star-container">{star && renderStars()}</div>
                {strikePrice ? (
                    <p className="card-text">
                        <del className="text-secondary">{strikePrice}</del> <span className="text-black">{price}</span>
                    </p>
                ) : (
                    <p className="card-text text-black">{price}</p>
                )}
            </div>
            <div className="cart-button mt-2 mb-4">

  {/* // In the button param, we have two button values, one is "View options" and another is "add to cart", when the value of the button is "View options", no actions need to be performed, when the button value is add to cart, handleClick function is triggered. */}

            {button === "Add to Cart" ? (
                        <button type="button" className="btn btn-outline-dark" onClick={handleClick}>

                            {/* if the value of the isInCart is true, Change the button text to Remove from Cart else with the Add to Cart */}

                            {isInCart ? "Remove from Cart" : "Add to Cart"}
                        </button>
                    ) : (
                        <button type="button" className="btn btn-outline-dark">
                            {button}
                        </button>
                    )}
            </div>
        </div>  
        </div>
    )
}

export default Card