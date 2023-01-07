import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header/Header";

import React from "react";
import Footer from "./Component/footer/Footer";
const About = React.lazy(() => import("./Screen/About"));
const NewLanding = React.lazy(() => import("./Screen/NewLanding"));
const CreateDoor = React.lazy(() => import("./Screen/CreateDoor"));
const PreDefine = React.lazy(() => import("./Screen/PreDefine"));
const CustomDoor = React.lazy(() => import("./Screen/CustomDoor"));
const Contact = React.lazy(() => import("./Screen/Contact"));
const Home = React.lazy(() => import("./Screen/Home"));

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
      <Footer />
    </>
  );
}

export default App;
