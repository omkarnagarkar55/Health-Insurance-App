import React, { useEffect, useState } from "react";

const Form = () => {
  const [policyNumber, setPolicyNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [success, setSuccess] = useState(false);

  const images = [
    "https://img.freepik.com/free-photo/front-view-beautiful-blonde-woman_23-2148471029.jpg?w=360&t=st=1690552524~exp=1690553124~hmac=3a6bbb56c03a814dcd239b191cfb2f97aa245dce5837f70b2df249477d84990f",
    "https://img.freepik.com/free-photo/family-home_23-2148166876.jpg?w=360&t=st=1690552628~exp=1690553228~hmac=d8c8cf77695483972a612a82262ef51d6ddc09017689ebf82869c6995d83c277",
    "https://img.freepik.com/free-photo/portrait-doctor_144627-39386.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais",
    "https://img.freepik.com/free-photo/portrait-doctor_144627-39379.jpg?size=626&ext=jpg&ga=GA1.2.969823653.1689870495&semt=ais",
    "https://img.freepik.com/free-vector/health-insurance-template-vector-poster_53876-111250.jpg?w=360&t=st=1690560649~exp=1690561249~hmac=08cb087baba232430a6a3a093e2594774075b44bfea903ad4527bf1a3c9dec57",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data as an array to the console
    console.log("formData: ", [policyNumber, selectedDate, mobileNumber]);
    setPolicyNumber("");
    setSelectedDate("");
    setMobileNumber("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 py-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Image Carousel */}
        <div className="hidden md:block md:w-1/2 relative">
          {images.map((image, index) => (
            <img
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 rounded-l-2xl ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              alt="Renewal Visual"
              src={image}
              style={{ minHeight: 500 }}
            />
          ))}
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
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
          <h3 className="text-3xl font-bold text-blue-700 mb-6 text-center">
            Health Insurance Renewal
          </h3>
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div>
              <label
                className="block mb-1 text-gray-700 font-semibold"
                htmlFor="policyNumber"
              >
                Policy Number
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="policyNumber"
                type="text"
                placeholder="Enter your policy number"
                value={policyNumber}
                onChange={(e) => setPolicyNumber(e.target.value)}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Format: P/000000/00/0000/000000 or 112202000000
              </p>
            </div>
            <div>
              <label
                className="block mb-1 text-gray-700 font-semibold"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="dob"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                className="block mb-1 text-gray-700 font-semibold"
                htmlFor="mobileNumber"
              >
                Mobile Number
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="mobileNumber"
                type="tel"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </div>
            <button
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
              type="submit"
            >
              Submit
            </button>
            {success && (
              <div className="text-green-600 text-center font-semibold mt-2">
                Renewal details submitted successfully!
              </div>
            )}
          </form>
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <p className="font-semibold text-blue-700 mb-2">Why renew with us?</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Instant renewal with minimal documentation</li>
              <li>24/7 customer support for all your queries</li>
              <li>Secure and seamless payment process</li>
              <li>Get reminders before your policy expires</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
