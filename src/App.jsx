import "./App.css"
import ScrollToTop from "./component/ScrollToTop"
import {Routes, Route} from "react-router-dom"
import Navbar from "./component/Navbar/Navbar"
import Footer from "./component/Footer/Footer"
import Home from "./page/Home/Home"
import Products from "./page/Products/Products"
import Offers from "./page/Offers/Offers"
import Catering from "./page/Catering/Catering"
import About from "./page/About/About"
import Contact from "./page/Contact/Contact"
import ProductsCategory from "./page/ProductsCategory/ProductsCategory"

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products-category" element={<ProductsCategory />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App