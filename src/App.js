import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SocialInvest from "./Pages/SocialInvest";
import About from "./Pages/About";
import Invest from "./Pages/Invest";

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