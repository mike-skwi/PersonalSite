import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Style/Fonts/NunitoSans-Regular.ttf';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Portfolio } from './Pages/Portfolio';
import { FourOhFour } from './Pages/FourOhFour';
import { Layout } from './Pages/Layout';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="About" element={<About />} />
                    <Route path="Porfolio" element={<Portfolio />} />
                    <Route path="*" element={<FourOhFour />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);
