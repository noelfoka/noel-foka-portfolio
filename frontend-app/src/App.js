import React from "react";

import { About, Header, Footer, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./component";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
