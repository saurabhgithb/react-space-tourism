import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="body home">

      <Navigation />

      <main id="main" className="grid-container grid-container--home">
        <div>
          <h1 className="text-light fs-500 ff-sans-cond letter-spacing-1">
            So, you want to travel to
            <span className="d-block fs-900 ff-serif uppercase">Space</span>
          </h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          <Link to="/react-space-tourism/destination" className="large-button bg-white text-dark ff-serif letter-spacing-3 uppercase">
          Explore
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
