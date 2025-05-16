import React from "react";

const BenefitIsu = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <div className="text-blue-600 font-bold text-lg tracking-wide mb-2">
            Benefits of Health Insurance
          </div>
          <div className="text-4xl font-extrabold text-blue-900 mb-3 drop-shadow">
            Know How Insurance Benefits You
          </div>
          <div className="text-lg font-medium text-gray-700 max-w-2xl mx-auto">
            The needs of the people can vary, so know about the different types of insurance and stay protected during uncertainties.
          </div>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {/* Card 1 */}
          <div className="w-full sm:w-[340px] md:w-[340px]">
            <div className="h-[450px] border-2 bg-white border-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                className="h-[220px] w-full object-cover object-center"
                src="https://img.freepik.com/free-photo/hmm-let-me-think-thoughtful-young-woman-planning-something-looking-upper-left-corner-pondering-imaging-things-empty-space-white-background_176420-53378.jpg?size=626&ext=jpg&ga=GA1.1.464284625.1688563657&semt=sph"
                alt="What is Health Insurance?"
              />
              <div className="p-6 flex flex-col flex-1">
                <h1 className="text-2xl font-bold text-blue-800 mb-3">
                  What is Health Insurance?
                </h1>
                <p className="text-gray-700 mb-4 flex-1">
                  Understand the basics of health insurance and how it can safeguard your finances during medical emergencies.
                </p>
                <div className="flex items-center flex-wrap mt-auto">
                  <button className="inline-flex text-white bg-[#EE744D] border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-lg text-lg font-semibold shadow transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full sm:w-[340px] md:w-[340px]">
            <div className="h-[450px] border-2 bg-white border-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                className="h-[220px] w-full object-cover object-center"
                src="https://img.freepik.com/premium-photo/portrait-indian-asian-young-family-four-sitting-white-flour-against-white-background-looking-camera_466689-8047.jpg?size=626&ext=jpg&ga=GA1.1.464284625.1688563657&semt=sph"
                alt="Family Health Insurance"
              />
              <div className="p-6 flex flex-col flex-1">
                <h1 className="text-2xl font-bold text-blue-800 mb-3">
                  Family Health Insurance
                </h1>
                <p className="text-gray-700 mb-4 flex-1">
                  Protect your entire family under a single policy and enjoy comprehensive coverage for all.
                </p>
                <div className="flex items-center flex-wrap mt-auto">
                  <button className="inline-flex text-white bg-[#EE744D] border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-lg text-lg font-semibold shadow transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full sm:w-[340px] md:w-[340px]">
            <div className="h-[450px] border-2 bg-white border-gray-100 rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <img
                className="h-[220px] w-full object-cover object-center"
                src="https://img.freepik.com/free-photo/young-woman-testing-car-car-showroom_1303-17732.jpg?size=626&ext=jpg&ga=GA1.1.464284625.1688563657&semt=ais"
                alt="Personal Accident Insurance"
              />
              <div className="p-6 flex flex-col flex-1">
                <h1 className="text-2xl font-bold text-blue-800 mb-3">
                  What is Personal <br /> Accident Insurance?
                </h1>
                <p className="text-gray-700 mb-4 flex-1">
                  Get financial protection against accidental injuries and disabilities with a dedicated accident insurance plan.
                </p>
                <div className="flex items-center flex-wrap mt-auto">
                  <button className="inline-flex text-white bg-[#EE744D] border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded-lg text-lg font-semibold shadow transition">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitIsu;
