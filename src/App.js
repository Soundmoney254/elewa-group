import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialInvest from "./Pages/SocialInvest";
import About from "./Pages/About";
import Invest from "./Pages/Invest";

// Define routes and their components and render them
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/" element={<SocialInvest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;