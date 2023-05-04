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
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
