import React from "react";

const CaresuranceHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5 py-24">
        {/* Hero Image */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0 flex justify-center">
          <img
            className="rounded-2xl shadow-2xl object-cover object-center w-80 h-80 md:w-96 md:h-96 border-4 border-blue-200"
            alt="Caresurance Hero"
            src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e7?auto=format&fit=crop&w=600&q=80"
          />
        </div>
        {/* Hero Content */}
        <div className="md:w-1/2 w-full text-center md:text-left px-4">
          <h1 className="sm:text-5xl text-3xl mb-6 font-extrabold text-blue-800 leading-tight drop-shadow">
            Welcome to <span className="text-blue-600">Caresurance</span> Health Insurance
          </h1>
          <p className="mb-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            Get <span className="font-semibold text-blue-700">comprehensive health insurance</span> coverage that fits your needs and provides peace of mind.
            Our tailored plans ensure you and your loved ones have access to quality healthcare, whenever you need it most.
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
            <a
              href="/plans"
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              View Plans
            </a>
            <a
              href="/about"
              className="inline-block px-8 py-3 bg-white border border-blue-600 text-blue-700 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
            >
              Learn More
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
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
      </div>
    </section>
  );
};

export default CaresuranceHero;
