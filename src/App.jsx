import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DesignSystem from "./pages/DesignSystem";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  return (
    <>
      <a className="skip-to-content" href="#main">
        Skip to content
      </a>
      <Router>
        <Routes>
          <Route path="/react-space-tourism/" element={<Home />} />
          <Route path="/react-space-tourism/destination" element={<Destination />} />
          <Route path="/react-space-tourism/crew" element={<Crew />} />
          <Route path="/react-space-tourism/technology" element={<Technology />} />
          <Route path="/react-space-tourism/design-system" element={<DesignSystem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
