import Card from "./Card";

const Cardscontainer = ({ handleAddToCart, handleRemoveFromCart, cartQuantity,isInCart }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card-deck mb-5">
                    <Card
                        title="Fancy Product"
                        price="$40.00-$80.00"
                        button="View options"
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                    <Card 
                        title="Special item" 
                        star price="$18.00" 
                        sale 
                        button="Add to cart" 
                        strikePrice="$20.00" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                    <Card 
                        title="Sale item" 
                        price="$25.00" 
                        sale 
                        button="Add to cart" 
                        strikePrice="$50.00" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                    <Card 
                        title="Popular item" 
                        star 
                        price="$40.00" 
                        button="Add to cart" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                </div>
                <div className="card-deck">
                    <Card 
                        title="Sale item" 
                        price="$25.00" 
                        sale
                        button="Add to cart" 
                        strikePrice="$50.00" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                    <Card 
                        title="Fancy Product" 
                        price="$120.00-$280.00" 
                        button="View options" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                    <Card 
                        title="Special item" 
                        star 
                        price="$18.00" 
                        sale 
                        button="Add to cart" 
                        strikePrice="$20.00" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                    <Card 
                        title="Popular item" 
                        star price="$40.00" 
                        button="Add to cart" 
                        isInCart={isInCart}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                        cartQuantity={cartQuantity} />
                </div>
            </div>
        </div>
    )
}

export default Cardscontainer