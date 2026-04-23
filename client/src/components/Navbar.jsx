import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";
import {FaShoppingCart} from "react-icons/fa"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

       <h2 className="logo">Stevie's Buffet</h2>

    <div className={`links-mobile ${menuOpen ? "active" : ""}`}>
       <Link to="/cart" className="link">
          <FaShoppingCart /> ({cart.length})
        </Link>
    </div>

      <div className={`links ${menuOpen ? "active" : ""}`}>
        <Link to="/" className="link">Home</Link>
        <Link to="/menu" className="link">Menu</Link>
        <Link to="/cart" className="link link-desktop">
          <FaShoppingCart /> ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;