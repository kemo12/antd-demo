import React from "react";
import AppHero from "../components/home/hero";
import About from "../components/home/about";
import Features from "../components/home/features";
import Works from "../components/home/works";

const Home = () => {
    return (
        <div className="main">
            <AppHero />
            <About />
            <Features />
            <Works />
        </div>
    );
};

export default Home;
