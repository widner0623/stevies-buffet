import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h2 className="logo">Stevie's Buffet</h2>

      <div className={`links-mobile ${menuOpen ? "active" : ""}`}>
        <Link to="/cart" className="link" onClick={() => setMenuOpen(false)}>
          <FaShoppingCart /> ({cartCount})
        </Link>
      </div>

      {menuOpen && (
        <div
          className="nav-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="link" onClick={() => setMenuOpen(false)}>
          Home
        </Link>

        <Link to="/menu" className="link" onClick={() => setMenuOpen(false)}>
          Menu
        </Link>

        <Link
          to="/cart"
          className="link link-desktop"
          onClick={() => setMenuOpen(false)}
        >
          <FaShoppingCart /> ({cartCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;