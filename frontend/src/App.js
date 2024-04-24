// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Projects from './components/Projects';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>My Portfolio</h1>
                <Routes>
                    <Route path="/" element={<Layout />}> {/*Layout makes things consistent on each page!!*/}
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
                
                {/* <Projects /> */}
            </div>
        </BrowserRouter>
    );
};

export default App;
