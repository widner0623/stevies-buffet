import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMenu } from "../services/api";

function Home() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
    const fetchMenu = async () => {
        const data = await getMenu();
        setMenu(data);
    };

    fetchMenu();
    }, []);
    const popularItems = menu.filter(item => item.popular).slice(0, 3);

  return (
    <section className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <p className="home-label">Welcome to Stevie's Buffet</p>

          <h1>Pizza, Buffet Favorites, and Family Meals Made Fresh Daily</h1>

          <p>
            Stop in for a hot buffet, grab a pizza for the family, or place an
            online order for your favorite Stevie's Buffet classics.
          </p>

          <div className="home-actions">
            <Link to="/menu?category=Deals" className="home-primary-btn">
              View Deals
            </Link>

            <a href="tel:+12703632173" className="home-secondary-btn">
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="home-info-grid">
        <div className="home-info-card">
          <span>Hours</span>
          <h2>Open Daily</h2>
          <p>Wednesday - Saturday: 11:00 AM - 8:00 PM</p>
          <p>Sunday: 11:00 AM - 3:00 PM</p>
        </div>

        <div className="home-info-card">
          <span>Location</span>
          <h2>Visit Us</h2>
          <p>1505 N. Main Street</p>
          <p>Beaver Dam, KY 42320</p>
        </div>

        <div className="home-info-card">
          <span>Call Ahead</span>
          <h2>Order by Phone</h2>
          <p>Have questions or need a large order?</p>
          <a href="tel:+12703632173">Call (270) 363-2173</a>
        </div>
      </div>

      <div className="home-welcome">
        <div>
          <p className="home-label dark">Fresh • Local • Family Friendly</p>
          <h2>A Buffet Built for Everyone</h2>
          <p>
            Whether you’re stopping in for lunch, feeding the family, or picking
            up dinner after a long day, Stevie's Buffet keeps it simple: fresh
            pizza, hot favorites, cold drinks, desserts, and friendly service.
          </p>
        </div>

        <Link to="/menu" className="home-menu-btn">
          View Full Menu
        </Link>
      </div>

      <div className="home-section-header">
        <p className="home-label dark">Customer Favorites</p>
        <h2>Popular Picks</h2>
        <p>
          A few favorites customers come back for again and again.
        </p>
      </div>

      <div className="home-featured-grid">
        {popularItems.map(item => (
            <Link
            key={item.id}
            to="/menu?category=Popular"
            className="home-featured-card"
            >
            <img src={item.image} alt={item.name} />

            <div>
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <p>${item.price.toFixed(2)}</p>
            </div>
            </Link>
        ))}
        </div>

      <div className="home-split">
        <div className="home-split-content">
          <p className="home-label dark">Order Your Way</p>
          <h2>Dine In, Call Ahead, or Order Online</h2>
          <p>
            Stevie's Buffet makes it easy to enjoy your favorites. Stop in for
            the buffet, call ahead for pickup, or build your order online.
          </p>

          <div className="home-checklist">
            <p>✓ Fresh pizza made daily</p>
            <p>✓ Buffet-style favorites</p>
            <p>✓ Family meals and specials</p>
            <p>✓ Easy online ordering</p>
          </div>

          <Link to="/menu" className="home-menu-btn">
            Start an Order
          </Link>
        </div>

        <div className="home-split-card">
          <h3>Need a large order?</h3>
          <p>
            Planning lunch for work, dinner for the family, or food for a group?
            Call ahead and we’ll help you get it ready.
          </p>
          <a href="tel:+12703632173">Call (270) 363-2173</a>
        </div>
      </div>

      <div className="home-cta">
        <h2>Ready for Pizza?</h2>
        <p>
          Browse the menu, check out the deals, and add your favorites to the cart.
        </p>

        <div className="home-actions center">
          <Link to="/menu" className="home-primary-btn">
            View Menu
          </Link>

          <Link to="/menu?category=Deals" className="home-secondary-btn">
            See Deals
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;