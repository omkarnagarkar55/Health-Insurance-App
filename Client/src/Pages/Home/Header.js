import React, { useState, useEffect } from "react";
const Header = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FIB_212544_212544115839217_SM_759742_2f536d6159.jpg&w=640&q=75",
    "https://www.starhealth.in/_next/image/?url=https%3A%2F%2Fd28c6jni2fmamz.cloudfront.net%2FIB_212544_212544115616583_SM_742722_dfc2e6d14d.jpg&w=640&q=75",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-5">
          <span className="text-blue-700/95 mb-4 font-semibold tracking-wide uppercase text-sm">
            The Health Insurance Specialist
          </span>
          <h1 className="title-font sm:text-5xl text-3xl mb-6 font-extrabold text-blue-900 leading-tight drop-shadow">
            We have the answer to your happy
            <br className="hidden lg:inline-block" />
            and secure future
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Health plans for every stage of your life. Protect yourself and your loved ones with Caresurance.
          </p>
          <div className="w-full bg-white bg-clip-border rounded-xl shadow-lg p-7 mb-6">
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="+1(123)456-7890"
                    pattern="^\+1\(\d{3}\)\d{3}-\d{4}$"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-base px-6 py-2.5 text-center transition"
              >
                Get a quote &gt;
              </button>
            </form>
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              24/7 Support
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              Cashless Hospitals
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Fast Claim Settlement
            </span>
          </div>
        </div>
        {/* Right Image Carousel */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex flex-col items-center relative">
          <div className="w-full h-80 rounded-2xl shadow-2xl overflow-hidden relative">
            {images.map((image, index) => (
              <img
                key={index}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                alt="hero"
                src={image}
              />
            ))}
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`block w-3 h-3 rounded-full ${
                    idx === currentImageIndex ? "bg-blue-600" : "bg-blue-200"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
