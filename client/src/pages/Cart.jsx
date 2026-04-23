import "../styles/Cart.css"
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ${item.price}
            </p>
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;