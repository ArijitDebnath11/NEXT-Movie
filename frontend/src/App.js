// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MovieDetail from './components/MovieDetail';
// import SearchResults from './pages/SearchResults'; // Ensure this import is correct

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
                {/* <Route path="/search" element={<SearchResults />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
