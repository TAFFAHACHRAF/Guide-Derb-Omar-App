
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from "./Autehtification/Register.js";
import Feature from "./landing/LFeature.js";
import Footer from "./landing/LFooter.js";
import Header from "./landing/LHeader.js";
import Navbar from "./landing/LNavbar.js";
import Services from "./landing/LServices.js";
import Subscribe from "./landing/Lsubscipe.js";
import Contact from "./landing/LContact.js";

function App() {
  return ( 
      <BrowserRouter>
          <Routes>
              <Route  path="/" element={
                <div>
                  <Navbar />
                  <Header />
                  <Feature />
                  <Services />
                  <Contact />
                  <Subscribe />
                </div>
              }/>
              <Route path="/register" element={<Register />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
