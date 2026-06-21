import "./Home.css";
import { useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import Heritage from "./Heritage";
import Categories from "./Categories";
import WeeklyDeals from "./WeeklyDeals";
import ChefsTouch from "./Chef'sTouch";

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <section className="home-container">
      <div className="container">
        <div className="hero">
          <div className="header">
            <h1>Traditionelles Handwerk,</h1>
            <h1>Ein moderner Touch.</h1>
            <p>
              Frischestes Fleisch von höchster Qualität für Ihre Familie –
              direkt zu Ihnen nach Hause geliefert, mit dem Service einer
              exklusiven Metzgerei.
            </p>
          </div>
          <div className="btns">
            <button onClick={() => navigate("/products")}>Entdecken Sie die Produkte</button>
            <button onClick={() => navigate("/catering")}>Catering Service</button>
          </div>
          <div className="down-arrow">
            <FaAngleDown />
          </div>
        </div>
      </div>

      <div className="heritage-content">
        <Heritage />
      </div>
      <div className="categories-content">
        <Categories />
      </div>
      <div className="weekly-deals-content">
        <WeeklyDeals />
      </div>
      <div className="chefs-touch-content">
        <ChefsTouch />
      </div>
    </section>
  );
};

export default Home;
