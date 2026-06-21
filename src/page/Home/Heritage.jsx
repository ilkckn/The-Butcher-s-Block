import "./Heritage.css";
import { useNavigate } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";

const Heritage = () => {
  const navigate = useNavigate();

  return (
    <section className="heritage-container">
      <div className="container">
        <div className="content">
          <div className="left">
            <p>unser Erbe</p>
            <h1>Eine kulinarische Reise über Generationen hinweg</h1>
            <p>
              Bei The Modern Artisan verbinden wir eine seit den 1950er-Jahren
              vom Vater an den Sohn weitergegebene Leidenschaft mit der modernen
              Welt. Jedes Stück zeugt von unserer Handwerkskunst, jedes Detail
              von unserer Expertise. Wir verleihen Ihrer Küche einen Hauch von
              Gourmetküche mit sorgfältig ausgewähltem, hochwertigem Fleisch von
              regionalen Bauernhöfen, traditionellen Reifungsmethoden und
              unserem exklusiven Service.
            </p>
            <p onClick={() => navigate("/about")}>
              Mehr zu unserer Geschichte <TiArrowRight />
            </p>
          </div>
          <div className="right">
            <div className="image">
              <img src="/landing/heritage.png" alt="" />
              <div className="tag">
                <p>70<span>+</span></p>
                <p>Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;
