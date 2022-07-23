
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Features from "./Landing-page/Features";
import Main from "./Landing-page/Main";
import Nav from "./Landing-page/Nav";
import Services from "./Landing-page/Services";
import Standard from "./Landing-page/Standard";
import Sponsors from "./Landing-page/Sponsors";
import Testimonials from "./Landing-page/Testimonials";
import Footer from "./Landing-page/Footer";


function App() {
  return (  
   <BrowserRouter>
      <div className="gape">
        <Nav />
        <Standard />
        <Services />
        <Features />
        <Main />
        <Sponsors />
        <Testimonials />
        <Footer />
      </div>
      <Routes>
          <Route path="/users" exact element={
            <div className="container mt-2">
              .
            </div>
          }/>
      </Routes>
   </BrowserRouter>
  );
}


export default App;
