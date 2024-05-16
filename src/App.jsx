import React from "react";
import Navbar from "./shared/Navbar";
import Hero from "./section/Hero";
import Features1 from "./section/Features1";
import AboutUs from "./section/AboutUs";
import Team from "./section/Team";
import Cta from "./section/Cta";
import Blog from "./section/Blog";
import Faq from "./section/Faq";
import Testimonials from "./section/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features1 />
      <AboutUs />
      <Team />
      <Cta />
      <Blog />
      <Faq />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
