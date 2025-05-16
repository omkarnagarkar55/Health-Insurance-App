import React, { useState, useEffect, useCallback } from "react";
import PlanForm from "./PlanForm";
import axios from "axios";

const ManagePlans = () => {
  const [plans, setPlans] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPlans, setFilteredPlans] = useState([]);

  const fetchPlans = async () => {
    try {
      const response = await axios.get("http://localhost:5000/plans/getAll");
      setPlans(response.data);
    } catch (error) {
      setPlans([]);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const filterPlans = useCallback(() => {
    const filtered = plans.filter((plan) => {
      const title = plan.title || "";
      const description = plan.description || plan.content1 || "";
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredPlans(filtered);
  }, [searchTerm, plans]);

  useEffect(() => {
    filterPlans();
  }, [searchTerm, plans, filterPlans]);

  const handleAddClick = () => {
    setIsAddMode(true);
    setSelectedPlan(null);
  };

  const handleEditClick = (plan) => {
    setIsAddMode(false);
    setSelectedPlan(plan);
  };

  const handleFormClose = () => {
    setIsAddMode(false);
    setSelectedPlan(null);
  };

  const handleDummyAdd = () => {
    fetchPlans();
  };

  const handleDelete = async (planId) => {
    try {
      await axios.delete(`http://localhost:5000/plans/${planId}`);
      fetchPlans();
    } catch (err) {
      alert("Error deleting plan");
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-6 text-center drop-shadow">
          Manage Health Insurance Plans
        </h1>
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <input
            type="text"
            placeholder="Search plans by title or description"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-2 px-6 rounded-lg shadow transition"
            onClick={handleAddClick}
          >
            + Add Plan
          </button>
        </div>
        <div className="overflow-x-auto rounded-xl shadow">
          <table className="min-w-full bg-white rounded-xl">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-md font-bold text-blue-700 uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-blue-700 uppercase tracking-wider">
                  Plan Title
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-blue-700 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-md font-bold text-blue-700 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredPlans.map((plan, index) => (
                <tr
                  key={plan._id || plan.id}
                  className="hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-gray-900 font-semibold">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-lg text-blue-900 font-bold">
                    {plan.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700 max-w-xs truncate">
                    {plan.description || plan.content1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-md text-gray-900">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg mr-2 shadow transition"
                      onClick={() => handleDelete(plan._id || plan.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg shadow transition"
                      onClick={() => handleEditClick(plan)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPlans.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No plans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {(isAddMode || selectedPlan) && (
        <PlanForm
          plan={selectedPlan}
          onClose={handleFormClose}
          isEditMode={!isAddMode}
          onSuccess={handleDummyAdd}
        />
      )}
    </div>
  );
};

export default ManagePlans;
