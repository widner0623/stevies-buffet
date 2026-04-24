import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* BRAND */}
        <div className="footer-brand">
          <h2>Stevie's Buffet</h2>
          <p>
            Fresh pizza, buffet favorites, and family meals made daily in
            Beaver Dam, Kentucky.
          </p>

          <a href="tel:+12703632173" className="footer-call-btn">
            Call (270) 363-2173
          </a>
        </div>

        {/* NAVIGATION */}
        <div className="footer-section">
          <h3>Navigation</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/cart">Cart</Link>
        </div>

        {/* BUSINESS */}
        <div className="footer-section">
          <h3>Business</h3>

          <Link to="/careers">Careers</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/catering">Catering</Link>
          <Link to="/about">About Us</Link>

          <a href="#" className="footer-link disabled-link">Privacy Policy</a>
          <a href="#" className="footer-link disabled-link">Terms of Service</a>

          <span className="disabled-link">Admin</span>
        </div>

        {/* LOCATION / INFO */}
        <div className="footer-section">
          <h3>Visit Us</h3>
          <p>1505 N. Main Street</p>
          <p>Beaver Dam, KY 42320</p>
          <p>Wed - Sat: 11:00 AM - 8:00 PM</p>
          <p>Sun: 11:00 AM - 3:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Stevie's Buffet</p>
        <p>Online ordering demo system</p>
      </div>
    </footer>
  );
}

export default Footer;