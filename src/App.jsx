import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Matrimonial } from "./components/Matrimonial";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Job } from "./components/Job";
import { BuySell } from "./components/BuySell";
import { Property } from "./components/Property";
import { Blogs } from "./components/Blogs";
import Stepper from "./components/Stepper";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Stepper />
      <Header data={landingPageData.Header} />
      <Stepper data={landingPageData.Stepper} />

      <Team data={landingPageData.Team} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <About data={landingPageData.About} /> */}
      {/* <Services data={landingPageData.Services} />    */}
      <Job data={landingPageData.Job} />
      <Matrimonial data={landingPageData.Matrimonial} />
      <BuySell data={landingPageData.BuySell} />
      <Property data={landingPageData.Property} />
      <Blogs data={landingPageData.Blogs} />
      <Gallery data={landingPageData.Gallery} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
