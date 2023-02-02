import React from "react";
import AppHero from "../components/home/hero";
import About from "../components/home/about";
import Features from "../components/home/features";
import Works from "../components/home/works";
import FAQ from "../components/home/faq";
import Pricing from "../components/home/pricing";

const Home = () => {
    return (
        <div className="main">
            <AppHero />
            <About />
            <Features />
            <Works />
            <FAQ />
            <Pricing />
        </div>
    );
};

export default Home;
