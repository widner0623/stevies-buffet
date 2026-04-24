import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD ITEM (with quantity)
  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // INCREASE
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  // DECREASE
  const decreaseQty = (id) => {
    setCart(cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  // REMOVE
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // CLEAR
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      increaseQty,
      decreaseQty,
      removeItem,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};