import "./WeeklyDeals.css";
import { useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
import { TbShoppingCartPlus } from "react-icons/tb";

const WeeklyDeals = () => {
  const navigate = useNavigate();
  
  return (
    <section className="weekly-deals-container">
      <div className="container">
        <div className="header">
          <div className="left">
            <p>Wöchentliche Angebote</p>
            <h2>Sonderangebote dieser Woche</h2>
          </div>
          <p className="all-discounts" onClick={() => navigate("/offers")}>
            All Discounts <TiArrowRight />
          </p>
        </div>
        <div className="content">
          <div className="box">
            <div className="image">
              <img src="/landing/discount-steak.jpg" alt="" />
            </div>
            <div className="info">
              <p className="discount-percentage">- %20</p>
              <div className="up">
                <div className="title">
                  <h2>trocken gereiftes Ribeye-Steak</h2>
                  <p>
                    Einzigartiges Aroma und besondere Weichheit, 28 Tage in
                    unseren privaten Räumen gereift.
                  </p>
                </div>
              </div>
              <div className="down">
                <div className="price">
                  <p>€30/kg</p>
                  <p>€24/kg</p>
                </div>
                <div className="cart">
                  <TbShoppingCartPlus />
                </div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="image">
              <img src="/landing/discount-sausage.jpg" alt="" />
            </div>
            <div className="info">
              <p className="discount-percentage">neues Produkt</p>
              <div className="up">
                <div className="title">
                  <h2>handgemachte Spezialwurst</h2>
                  <p>
                    Unsere traditionelle fermentierte Wurst wird mit unserer
                    speziellen Gewürzmischung und 100% Rindfleisch hergestellt.
                  </p>
                </div>
              </div>
              <div className="down">
                <div className="price">
                  <p>€15/kg</p>
                </div>
                <div className="cart">
                  <TbShoppingCartPlus />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyDeals;
