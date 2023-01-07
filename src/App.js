import CreateDoor from "./Screen/CreateDoor";
import Home from "./Screen/Home";
// import LandingPage from "./Screen/LandingPage";
import NewLanding from "./Screen/NewLanding";
import PreDefine from "./Screen/PreDefine";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomDoor from "./Screen/CustomDoor";
import Contact from "./Screen/Contact";
import Header from './Component/Header/Header';
import About from "./Screen/About";
import React from 'react'
import Footer from "./Component/footer/Footer";

function App() {
  return (
    <>
    <Header />
    
      <BrowserRouter>
        <Routes>
          <Route element={<NewLanding />} path="/" />
          <Route element={<Home />} path="/door" />
          <Route element={<PreDefine />} path="/door-type" />
          <Route element={<CreateDoor />} path="/create-door" />
          <Route element={<CustomDoor />} path="/custom-door" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<About />} path="/about" />

        </Routes>
      </BrowserRouter>
     <Footer/>
    </>
  );
}

export default App;
