import "../styles/Menu.css";
import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getMenu } from "../services/api";
import { CartContext } from "../context/CartContext";
import { useSearchParams } from "react-router-dom";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [searchParams] = useSearchParams();
  const startingCategory = searchParams.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(startingCategory);
  const { cart, addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await getMenu();
      setMenu(data);
    };

    fetchMenu();
  }, []);

  const categories = [
    "All",
    "Popular",
    "Deals",
    "Buffet",
    "Pizza",
    "Specials",
    "Sides",
    "Drinks",
    "Desserts",
    "Family Meals",
    "Kids",
    "Add-Ons"
  ];

  const filteredMenu = menu.filter(item => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Popular") return item.popular;
    if (selectedCategory === "Deals") return item.special;
    if (selectedCategory === "Family Meals") {
      return item.name.toLowerCase().includes("family");
    }
    if (selectedCategory === "Kids") {
      return item.name.toLowerCase().includes("kids");
    }
    if (selectedCategory === "Add-Ons") {
      return item.category === "Sides";
    }

    return item.category === selectedCategory;
  });

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const cartSubtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = cartSubtotal * 0.06;
  const total = cartSubtotal + tax;

  return (
    <section className="menu-page">
     <div className="menu-hero">
      <div className="menu-hero-content">
        <p className="menu-label">Pizza Buffet • Online Ordering • Family Favorites</p>

        <h1>Fresh Pizza, Buffet Classics, and Family Deals</h1>

        <p>
          Order your Stevie's Buffet favorites online. Choose from hot pizzas,
          buffet-style meals, sides, drinks, desserts, and specials made for the
          whole family.
        </p>

        <div className="menu-hero-actions">
          <a href="#menu-items" className="hero-primary-btn">
            View Menu
          </a>

          <Link to="/careers" className="hero-secondary-btn">
            View Careers
          </Link>
        </div>
      </div>

      <div className="menu-hero-highlight">
        <span>Today’s Favorite</span>
        <h3>All-You-Can-Eat Pizza Buffet</h3>
        <p>Starting at $12.99</p>
      </div>
    </div>

      <div className="category-bar" id="menu-items">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {filteredMenu.map(item => (
          <div className="menu-card" key={item.id}>
            <div className="menu-image">
              <img src={item.image} alt={item.name} />

              {item.popular && (
                <span className="item-badge popular">Popular</span>
              )}

              {item.special && (
                <span className="item-badge special">Deal</span>
              )}
            </div>

            <div className="menu-card-top">
              <span className="item-category">{item.category}</span>
              <span className="item-price">
                ${item.price.toFixed(2)}
              </span>
            </div>

            <h3>{item.name}</h3>

            <p className="item-description">
              Made fresh and ready to add to your order.
            </p>

            <button
              className="add-btn"
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {cartCount > 0 && (
        <div className="menu-order-box">
          <p>
            {cartCount} item{cartCount !== 1 ? "s" : ""} in cart •{" "}
            <strong>${total.toFixed(2)}</strong>
          </p>

          <Link to="/cart" className="view-cart-btn">
            View Cart
          </Link>
        </div>
      )}
    </section>
  );
}

export default Menu;