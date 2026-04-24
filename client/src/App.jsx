import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import ScrollToTop from "./components/ScrollToTop";
// Delete after done
import ComingSoon from "./pages/ComingSoon"; 

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          {/* Delete after Done or update Link */}
          <Route path="/careers" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />
          <Route path="/catering" element={<ComingSoon />} />
          <Route path="/about" element={<ComingSoon />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;