import Cardpic from './index.jpeg'
import './Card.css';
const Card = ({ title, price, button, star, sale, strikePrice,handleAddToCart,handleRemoveFromCart,isInCart }) => {

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(<i key={i} className="fa fa-star" aria-hidden="true" style={{ color: 'rgb(255,192,7)' }}></i>);
        }
        return stars;
    };
    return (
        <div className="card" style={{ width: "18rem" }}>
            {sale && <div className="position-absolute top-0 end-0 p-1 bg-dark text-white btn btn-dark mt-3 me-2">Sale</div>}
            <img src={Cardpic} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {star && renderStars()}
                {strikePrice ? (
                    <p className="card-text">
                        <del className="text-secondary">{strikePrice}</del> <span className="text-black">{price}</span>
                    </p>
                ) : (
                    <p className="card-text text-black">{price}</p>
                )}
            </div>
            <div className="cart-button mt-2 mb-4">
                {isInCart ? (
                    <button type="button" className="btn btn-outline-dark" onClick={handleRemoveFromCart}>Remove from Cart</button>
                ) : (
                    <button type="button" className="btn btn-outline-dark" onClick={handleAddToCart}>{button}</button>
                )}
            </div>
        </div>  
    )
}

export default Card