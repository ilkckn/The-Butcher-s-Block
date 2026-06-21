import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { RiMenuLine } from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const handleToggleLinks = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`mobile-overlay ${isOpen ? "visibility" : ""}`}
        onClick={handleToggleMenu}
      ></div>
      <section
        className={`navbar-container ${isScrolled || isOpen ? "scrolled" : ""}`}
      >
        <div className="container">
          <div className="logo">
            <h1 onClick={handleScrollToTop}>
              the <span>butcher's</span> block
            </h1>
          </div>
          <div className="links">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/offers">Offers</NavLink>
              </li>
              <li>
                <NavLink to="/catering">Catering</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="order-mobile">
            <NavLink to="/order" className="order">
              <button>
                <span className="order-icon">
                  <RiShoppingCartLine />
                </span>
                <span className="order-text">order</span>
              </button>
            </NavLink>
            <div className="mobile" onClick={handleToggleMenu}>
              <RiMenuLine />
            </div>
          </div>
        </div>

        {isOpen && (
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <div className="close" onClick={handleToggleMenu}>
              <IoClose />
            </div>

            <ul>
              <li>
                <NavLink to="/" onClick={handleToggleLinks}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" onClick={handleToggleLinks}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/offers" onClick={handleToggleLinks}>
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink to="/catering" onClick={handleToggleLinks}>
                  Catering
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={handleToggleLinks}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={handleToggleLinks}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink to="/order" className="order">
              <button>
                <span className="order-text">order</span>
              </button>
            </NavLink>
            <div className="mobile-logo">
              <h1 onClick={handleScrollToTop}>
                the <span>butcher's</span> block
              </h1>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Navbar;
