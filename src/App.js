import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Project from './pages/Projects/Projects';

import FOOTER from './components/footer/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Navbar from './navbar';

function App() {

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/Projects" element={<Project />} />
            </Routes>
            <FOOTER />
        </>
    );
}

export default App;