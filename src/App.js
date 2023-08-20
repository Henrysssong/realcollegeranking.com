// App.js
import React from 'react';
import './App.css';
import LandingPage from './LandingPage';
import CollegeRankings from './CollegeRankings';
import AIRanking from './AIRanking';
import Header from './Header';
import About from './About';
import Contact from './Contact';
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
                    <Route path="/about" element={<About />} /> {/* Added this line */}
                    <Route path="/contact" element={<Contact />} /> {/* Added this line */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
