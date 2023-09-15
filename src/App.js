import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Products from "./pages/Products";
import Product from "./pages/Product";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Contact from "./pages/Contact";
import CartList from "./pages/CartList";
import Category from "./pages/Category";
import About from "./pages/About";
import Feature from "./pages/Feature";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Slider />
                <Category />
                <Products />
              </>
            }
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />

        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
