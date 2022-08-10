
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
import Signup from "./Autehtification/Signup.js";
import Rnavbar from "./Autehtification/Rnavbar.js";

function App() {
  return ( 
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={
              <div>
                <Navbar />
                <Header />
                <Feature />
                <Services />
                <Contact />
                <Subscribe />
              </div>
            }/>
            <Route path="/dashbord" exact element={<User />}/>
            <Route path="/signup" exact element={<Signup />}/>
            <Route path="/login" exact element={<div><Rnavbar /><Login /></div>}/>
          </Routes>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
