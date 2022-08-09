
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from "./Autehtification/Login.js";
import Feature from "./landing/LFeature.js";
import Footer from "./landing/LFooter.js";
import Header from "./landing/LHeader.js";
import Navbar from "./landing/LNavbar.js";
import Services from "./landing/LServices.js";
import Subscribe from "./landing/Lsubscipe.js";
import Contact from "./landing/LContact.js";
import User from "./Dachbord/User.js";

function App() {
  return ( 
      <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <div>
                <Navbar />
                <Header />
                <Feature />
                <Services />
                <Contact />
                <Subscribe />
                <Footer />
              </div>
            }/>
            <Route path="/dashbord" element={<div><User /></div>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<ignup />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
