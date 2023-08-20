// App.js
import React from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import CollegeRankings from './components/CollegeRankings';
import AIRanking from './components/AIRanking';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/difficulty-ranking" element={<CollegeRankings />} />
                  <Route path="/ai-ranking" element={<AIRanking />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<LandingPage />} />  {/* Default route */}
              </Routes>
          </div>
      </Router>
  );
}


export default App;
