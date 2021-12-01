import React from 'react';
import './Index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbars from './Components/Navbar';
import Header from './Components/Header';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Navbars />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default App

