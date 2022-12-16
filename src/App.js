import React from 'react';
import Navbar from './assets/components/moleculas/Navbar.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Join from "./assets/pages/Join.js";
import Discover from "./assets/pages/Discover.js";
import Home from "./assets/pages/Home.js";


function App ()  {
    return(
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/discover" element={<Discover/>}></Route>
                <Route path="/join" element={<Join/>}></Route>
            </Routes>
        </BrowserRouter> 
        
        </>
);
};

export default App;