import React from "react";
import All from "./components/All.jsx";
import Companies from "./components/companies/Companies.jsx";
import Faq from "./components/faq/Faq.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Hero from "./components/hero/Hero.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Service1 from "./components/service1/Service1.jsx";
import Service2 from "./components/service2/Service2.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Trail from "./components/trail/Trail.jsx";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Companies />
      <Service1 />
      <Service2 />
      <Testimonial />
      <Pricing />
      <Faq />
      <Trail />
      <Footer />
      <All />
    </>
  );
}

export default App;
