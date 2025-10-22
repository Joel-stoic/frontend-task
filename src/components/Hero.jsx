import React from "react";
import { FiExternalLink } from "react-icons/fi";
import HeroFooter from "./HeroFooter";
import CardSection from "./CardSection";

const Hero = () => {
    return (
        <section className="bg-white py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">


                <div className="max-w-xl text-center lg:text-left mt-0 lg:mt-0 w-full lg:w-1/2 order-1 lg:order-1 ">

                    <div className="flex flex-wrap justify-center lg:justify-start gap-x-2 text-teal-900 text-sm mb-4">

                        <div className="flex items-center space-x-1 flex-shrink-0">
                            <img src="src/assets/star.webp" className="h-6 sm:h-8" />
                            <span>4.6</span>
                        </div>
                        <span className="text-gray-400 mx-1 flex-shrink-0">|</span>

                        <div className="flex items-center space-x-1 gap-2 flex-shrink-0">
                            <div className="flex flex-shrink-0">
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/halfstar.svg" alt="G2" className="h-4" />
                            </div>

                            <img src="src/assets/g2.webp" alt="G2" className="h-6 sm:h-8 flex-shrink-0" />
                            <span>4.1</span>
                            <span className="text-gray-400 mx-1 flex-shrink-0">|</span>

                            <div className="flex flex-shrink-0">
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/5star.svg" alt="G2" className="h-4" />
                                <img src="src/assets/halfstar.svg" alt="G2" className="h-4" />
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-teal-900 leading-tight mb-6">
                        Run your entire <br />
                        practice with one <br />
                        <span className="text-teal-900">EHR+ platform</span>
                    </h1>

                    <p className="text-gray-700 text-lg mb-8">
                        Tebra’s EHR+ platform connects care, billing, scheduling, and more.
                        Built-in AI speeds up notes, handles reviews, and automates
                        repetitive admin work.
                    </p>

                    <div className="flex sm:flex-row items-center justify-center lg:justify-start gap-4 py-4 ">
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 py-4">
                            <button
                                className="bg-[#FFAB6E] text-black px-6 py-3 rounded-full 
                   hover:bg-[#E89090]/70 hover:text-teal-900 transition text-sm font-medium w-full sm:w-auto 
                   whitespace-nowrap"
                            >
                                Get a demo
                            </button>
                            <button
                                className="flex items-center text-teal-900 text-sm font-medium hover:underline underline-offset-4 w-full sm:w-auto justify-center lg:justify-start"
                            >
                                Take a product tour <FiExternalLink className="ml-1" />
                            </button>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center w-full lg:w-1/2 order-2 lg:order-2">
                    <img
                        src="/src/assets/hero-short.webp"
                        alt="Doctor using Tebra platform"
                        className="max-w-xs sm:max-w-md h-auto mx-auto mb-6 lg:mb-0"
                    />
                </div>

            </div>
            <HeroFooter />
            <CardSection/>
        </section>
    );
};

export default Hero;