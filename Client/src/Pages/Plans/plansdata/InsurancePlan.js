import React, { useState, useEffect } from "react";
import axios from "axios";

const InsurancePlan = () => {
  const [planData, setPlanData] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/plandata/getAll"
        );
        if (Array.isArray(response.data)) {
          setPlanData(response.data);
          setLoading(false);
        } else {
          throw new Error("Invalid data structure in API response");
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchPlanData();
  }, []);

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
    setSelectedCategory("");
    setSelectedYear("");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedYear("");
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("User ID:", userId);
    console.log("Selected Plan:", selectedPlan);
    console.log("Selected Category:", selectedCategory);
    console.log("Selected Year:", selectedYear);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-10">
        <span className="text-blue-600 text-lg font-semibold animate-pulse">
          Loading Insurance Plans...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold py-10">
        Error: {error.message}
      </div>
    );
  }

  const selectedPlanData = planData.find((plan) => plan.name === selectedPlan);

  return (
    <section className="max-w-3xl mx-auto my-10 bg-white rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center drop-shadow">
        Insurance Plan Calculator
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold block mb-1">User ID</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your User ID"
              required
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold block mb-1">Select Plan</label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={selectedPlan}
              onChange={handlePlanChange}
              required
            >
              <option value="">Select a Plan</option>
              {planData.map((plan) => (
                <option key={plan._id} value={plan.name}>
                  {plan.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {selectedPlanData && (
          <div>
            <label className="text-gray-700 font-semibold block mb-1">
              Select Plan Category
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={selectedCategory}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select a Category</option>
              {selectedPlanData.categories.map((category) => (
                <option key={category._id} value={category.planCategory}>
                  {category.planCategory}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedCategory && (
          <div>
            <label className="text-gray-700 font-semibold block mb-1">
              Select Year
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              value={selectedYear}
              onChange={handleYearChange}
              required
            >
              <option value="">Select a Year</option>
              {selectedPlanData.categories
                .find((category) => category.planCategory === selectedCategory)
                .premiums.map((premium) => (
                  <option key={premium._id} value={premium.year}>
                    {premium.year} years
                  </option>
                ))}
            </select>
          </div>
        )}
        {selectedYear && (
          <div className="bg-blue-50 rounded-xl shadow-md p-6 mt-4">
            <h2 className="text-xl font-bold text-blue-700 mb-4">
              {selectedPlan} - {selectedCategory} ({selectedYear} years)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-200 text-blue-900">
                    <th className="py-2 px-4 text-left">Sum Insured</th>
                    <th className="py-2 px-4 text-center">Monthly Premium</th>
                    <th className="py-2 px-4 text-center">Yearly Premium</th>
                    <th className="py-2 px-4 text-center">Premium (Without Tax)</th>
                    <th className="py-2 px-4 text-center">Premium (With Tax)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-100 bg-white">
                    <td className="py-2 px-4 text-center font-semibold">
                      ₹
                      {selectedPlanData.categories
                        .find((category) => category.planCategory === selectedCategory)
                        .premiums.find((premium) => premium.year === parseInt(selectedYear))
                        .sumInsured.toLocaleString("en-IN")}
                    </td>
                    <td className="py-2 px-4 text-center">
                      ₹
                      {Math.round(
                        selectedPlanData.categories
                          .find((category) => category.planCategory === selectedCategory)
                          .premiums.find((premium) => premium.year === parseInt(selectedYear))
                          .premiumWithTax / 12
                      ).toLocaleString("en-IN")}
                    </td>
                    <td className="py-2 px-4 text-center">
                      ₹
                      {selectedPlanData.categories
                        .find((category) => category.planCategory === selectedCategory)
                        .premiums.find((premium) => premium.year === parseInt(selectedYear))
                        .premiumWithTax.toLocaleString("en-IN")}
                    </td>
                    <td className="py-2 px-4 text-center">
                      ₹
                      {selectedPlanData.categories
                        .find((category) => category.planCategory === selectedCategory)
                        .premiums.find((premium) => premium.year === parseInt(selectedYear))
                        .premiumWithoutTax.toLocaleString("en-IN")}
                    </td>
                    <td className="py-2 px-4 text-center">
                      ₹
                      {selectedPlanData.categories
                        .find((category) => category.planCategory === selectedCategory)
                        .premiums.find((premium) => premium.year === parseInt(selectedYear))
                        .premiumWithTax.toLocaleString("en-IN")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-lg mt-6 shadow-lg transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default InsurancePlan;
