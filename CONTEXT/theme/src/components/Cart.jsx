import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price} 
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>

            <button
                onClick={() => addToCart({ id: 1, name: "Sample Item", price: "$10" })}
            >
                Add Sample Item
            </button>
        </div>
    );
};

export default Cart;
