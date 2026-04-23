import "../styles/Menu.css"
import { useEffect, useState, useContext } from "react";
import { getMenu, createOrder } from "../services/api";
import { CartContext } from "../context/CartContext";

function Menu() {
  const [menu, setMenu] = useState([]);
  const { cart, addToCart, clearCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenu();
      setMenu(data);
    };

    fetchMenu();
  }, []);

  const handleOrder = async () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const order = {
      items: cart.map(item => item.name),
      total
    };

    const res = await createOrder(order);

    console.log("Order created:", res);

    clearCart();
  };

  return (
    <div className="menu">
      <h1>Menu</h1>

      {menu.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      <button onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Menu;