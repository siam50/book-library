import React from "react";
import Banner from "./Banner/Banner";
import TellOurStory from "./TellOurStory/TellOurStory";
import Slider from "./Slider/Slider";
import CustomerSay from "./CustomerSay/CustomerSay";
import Category from "./Category/Category";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Banner></Banner>
      <Category></Category>
      <TellOurStory></TellOurStory>
      <CustomerSay></CustomerSay>
    </div>
  );
};

export default Home;
