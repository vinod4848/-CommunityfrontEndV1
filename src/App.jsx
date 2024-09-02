import React, { useState, useEffect } from "react";
import "./App.css";
import { Navigation } from "./components/navigation";
import  {Header}  from "./components/header";
import { Gallery } from "./components/gallery";
import { Matrimonial } from "./components/Matrimonial";
import { Team } from "./components/Team";
import Contact from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
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
      <Header data={landingPageData.Header} />
      <Stepper data={landingPageData.Stepper} />
      <Team data={landingPageData.Team} />
      <Job data={landingPageData.Job} />
      <Matrimonial data={landingPageData.Matrimonial} />
      <BuySell data={landingPageData.BuySell} />
      <Property data={landingPageData.Property} />
      <Blogs data={landingPageData.Blogs} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
