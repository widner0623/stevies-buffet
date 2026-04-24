import "../styles/Cart.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { getMenu } from "../services/api";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, addToCart } =
    useContext(CartContext);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenu();
      setMenu(data);
    };

    fetchMenu();
  }, []);

  const dessertUpsells = menu
    .filter(item => item.category === "Desserts")
    .slice(0, 3);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.06;
  const total = subtotal + tax;

  return (
    <section className="cart-page">
      <div className="cart-header">
        <p className="cart-label">Review Your Order</p>
        <h1>Your Cart</h1>
        <p>
          Check your items, adjust quantities, and review your total before
          checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add pizza, buffet favorites, drinks, desserts, or sides to get started.</p>
          <Link to="/menu" className="cart-primary-btn">
            View Menu
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                {item.image && (
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                )}

                <div className="cart-item-info">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)} each</p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <strong>{item.quantity}</strong>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <div className="cart-line-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className="upsell-section">
              <div className="upsell-header">
                <p className="cart-label dark">Add Something Sweet</p>
                <h2>Complete Your Order</h2>
                <p>Popular desserts customers often add before checkout.</p>
              </div>

              <div className="upsell-grid">
                {dessertUpsells.map(item => (
                  <div className="upsell-card" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="upsell-info">
                      <span>{item.category}</span>
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                    </div>

                    <button
                      className="upsell-btn"
                      onClick={() => addToCart(item)}
                    >
                      Add
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>${subtotal.toFixed(2)}</strong>
            </div>

            <div className="summary-row">
              <span>Tax (6%)</span>
              <strong>${tax.toFixed(2)}</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button className="checkout-btn">
              Continue to Checkout
            </button>

            <Link to="/menu" className="continue-link">
              Add more items
            </Link>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;