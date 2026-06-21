import "./Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();
  
  return (
    <section className="categories-container">
      <div className="container">
        <div className="header">
          <h2>Unsere Kategorien</h2>
          <p>
            Unsere exklusivsten Geschmacksgruppen, speziell für Sie ausgewählt.
          </p>
        </div>
        <div className="categories">
          <div className="category">
            <div className="image">
              <img src="/landing/category-steak.jpg" alt="" />
              <p className="tag">am beliebtesten</p>
            </div>
            <div className="info">
              <h2>rotes Fleisch</h2>
              <p>
                Von gereiften Ribeye-Steaks bis hin zu Premium-Zuschnitten
                bieten wir Ihnen Rind- und Lammfleisch in bester Qualität.
              </p>
              <p onClick={() => navigate("/products/category")}>prüfen</p>
            </div>
          </div>

          <div className="category">
            <div className="image">
              <img src="/landing/category-salami.jpg" alt="" />
            </div>
            <div className="info">
              <h2>Delikatessen</h2>
              <p>
                Unsere Würste, Salami, Pastrami und geräucherten
                Fleischspezialitäten werden nach traditionellen Methoden
                zubereitet.
              </p>
              <p onClick={() => navigate("/products/category")}>prüfen</p>
            </div>
          </div>

          <div className="category">
            <div className="image">
              <img src="/landing/chefs-touch-1.png" alt="" />
            </div>
            <div className="info">
              <h2>Grillpakete</h2>
              <p>
                Perfekt zusammengestellte Pakete für den Grillabend mit
                ausgewählten Cuts, Würstchen und passenden Beilagen.
              </p>
              <p onClick={() => navigate("/products/category")}>prüfen</p>
            </div>
          </div>

          <div className="category">
            <div className="image">
              <img src="/landing/category-sauce.jpg" alt="" />
            </div>
            <div className="info">
              <h2>Gourmetsaucen</h2>
              <p>
                Speziell entwickelte Saucen, Gewürzmischungen und Beilagen zur
                Geschmacksverfeinerung Ihrer Fleischgerichte.
              </p>
              <p onClick={() => navigate("/products/category")}>prüfen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
