import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./Auth/auth";

const Hplan = () => {
  const [selectedCategory, setSelectedCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/plans/getAll")
      .then((response) => {
        const plansData = response.data;
        let plans = plansData.filter((plan) =>
          plan.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (selectedCategory !== "All categories") {
          plans = plans.filter(
            (plan) =>
              plan.category &&
              plan.category.toLowerCase() === selectedCategory.toLowerCase()
          );
        }
        setFilteredPlans(plans);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [searchQuery, selectedCategory]);

  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="text-blue-600 font-bold my-3 tracking-wide uppercase">
            All Health Plans
          </div>
          <div className="font-extrabold my-2 text-4xl md:text-5xl text-center text-blue-900 drop-shadow">
            Best Health Insurance Plans to Secure Yourself
          </div>
        </div>
        {/* Search and Filter */}
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
          <div className="relative flex-shrink-0 w-full md:w-auto">
            <button
              id="dropdown-button"
              onClick={toggleDropdown}
              className="z-10 inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
              type="button"
            >
              {selectedCategory}
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="z-20 absolute mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow"
              >
                <ul className="py-3 text-base text-gray-700" aria-labelledby="dropdown-button">
                  {["All categories", "Family", "Diabetes", "Cardiac", "Disease Specific"].map((cat) => (
                    <li key={cat}>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect(cat)}
                        className={`inline-flex w-full px-4 py-2 hover:bg-gray-100 ${
                          selectedCategory === cat ? "bg-gray-100 font-bold" : ""
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="relative w-full md:w-[500px]">
            <input
              type="search"
              id="search-dropdown"
              value={searchQuery}
              onChange={handleSearchChange}
              className="block w-full px-4 py-2.5 text-base text-gray-900 bg-gray-200 rounded-r-lg border-l-2 border-blue-500 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Family, Disease Specific, Cardiac, Diabetes..."
            />
            <button
              type="submit"
              className="absolute top-0 right-0 px-3 py-2 text-base font-medium text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:ring-blue-300 focus:outline-none focus:ring"
            >
              <svg
                className="w-4 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </form>
        {/* Plans List */}
        {loading ? (
          <div className="text-center text-blue-600 font-semibold py-10">Loading...</div>
        ) : filteredPlans.length === 0 ? (
          <div className="text-center text-red-600 font-bold py-10">No plans found.</div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {filteredPlans.map((item) => (
              <div key={item._id} className="bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden hover:shadow-2xl transition">
                <div className="md:w-1/3 w-full flex items-center justify-center bg-blue-50">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="object-cover w-full h-56 md:h-64"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-bold text-blue-900 text-2xl mb-2">{item.title}</div>
                  <div className="text-gray-600 mb-4 text-base leading-6">
                    <p className="font-medium">{item.content1}</p>
                    <p className="font-medium">{item.content2}</p>
                    <p className="font-medium">{item.content3}</p>
                  </div>
                  <div className="mt-auto flex items-center">
                    {user ? (
                      <Link
                        to={`/plans/${item._id}`}
                        className="inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-orange-300 focus:outline-none focus:ring shadow transition"
                      >
                        View Plan
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="inline-flex items-center justify-center px-5 py-2 text-base font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-300 focus:outline-none focus:ring shadow transition"
                      >
                        Sign In to View Plan
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hplan;
