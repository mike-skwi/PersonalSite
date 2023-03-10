import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style/Fonts/NunitoSans-Regular.ttf';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// TODO: Fix barreling
import Home from './Pages/Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Portfolio from './Pages/Portfolio/Portfolio.tsx';
import FourOhFour from './Pages/FourOhFour/FourOhFour.tsx';
import Contact from './Pages/Contact/Contact.tsx';
import Layout from './Pages/Layout/Layout.tsx'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout className="Container" />}>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<FourOhFour />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
