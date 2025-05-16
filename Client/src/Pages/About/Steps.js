import React from "react";

const Steps = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-14">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Steps Timeline */}
        <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
          {/* Step 1 */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-xl text-blue-800 mb-1 tracking-wider">
                Get a Quote
              </h2>
              <p className="leading-relaxed text-gray-700">
                Start by getting a personalized health insurance quote that fits your needs and budget.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-xl text-blue-800 mb-1 tracking-wider">
                Compare Plans
              </h2>
              <p className="leading-relaxed text-gray-700">
                Compare different health insurance plans and choose the one that best meets your healthcare needs.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="3"></circle>
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-xl text-blue-800 mb-1 tracking-wider">
                Enroll Online
              </h2>
              <p className="leading-relaxed text-gray-700">
                Easily enroll in the chosen health insurance plan online through our secure portal.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex relative">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 inline-flex items-center justify-center text-white relative z-10 shadow-lg">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <h2 className="font-semibold title-font text-xl text-blue-800 mb-1 tracking-wider">
                Stay Covered
              </h2>
              <p className="leading-relaxed text-gray-700">
                Enjoy peace of mind with comprehensive health insurance coverage and access to a wide network of healthcare providers.
              </p>
            </div>
          </div>
        </div>
        {/* Illustration */}
        <div className="lg:w-3/5 md:w-1/2 flex justify-center items-center">
          <img
            className="object-cover object-center rounded-2xl shadow-2xl w-full max-w-xl"
            src="https://img.freepik.com/free-photo/close-up-doctor-with-stethoscope_23-2149191355.jpg?w=1060&t=st=1691513719~exp=1691514319~hmac=12f95154ba653158191ee4919ea51a55a5f8910648d7b7f7a518c46d7204ef95"
            alt="health insurance step"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;
