import "./Chef'sTouch.css";
import { MdDone } from "react-icons/md";

const ChefsTouch = () => {
  return (
    <section className="chefs-touch-container">
      <div className="container">
        <div className="left">
          <div className="header">
            <h1>Die besondere Note eines Küchenchefs</h1>
            <h1>für Ihre besonderen Anlässe</h1>
            <p>
              Ob Hochzeiten, Firmenveranstaltungen oder private Feiern im
              kleinen Kreis – mit Modern Artisan Catering Service bieten wir
              Ihren Gästen feinste Fleischspezialitäten, zubereitet von unseren
              Meisterköchen. Wir machen jeden Moment unvergesslich mit
              individuell gestalteten Menüs und unserem professionellen Team.
            </p>
          </div>
          <div className="tags">
            <div className="tag">
              <p>
                <MdDone />
                personalisiertes Menü
              </p>
              <p>
                <MdDone />
                Grillservice vor Ort
              </p>
            </div>
            <div className="tag">
              <p>
                <MdDone />
                Präsentation des Küchenchefs
              </p>
              <p>
                <MdDone />
                Gourmet-Beilagen
              </p>
            </div>
          </div>
          <button>Holen Sie sich ein Catering-Angebot ein.</button>
        </div>

        <div className="right">
          <div className="images">
            <img src="/landing/chefs-touch-1.png" alt="" />
            <img src="/landing/chefs-touch-2.png" alt="" />
          </div>
          <div className="images">
            <img src="/landing/chefs-touch-3.png" alt="" />
            <img src="/landing/chefs-touch-4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsTouch;
