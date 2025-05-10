import React, { useState, useEffect } from "react";

const PlanForm = ({ plan, onClose, isEditMode, onSuccess }) => {
  const [planData, setPlanData] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (plan) {
      setPlanData(plan);
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess(planData);  // Trigger dummy add
    onClose();            // Close modal
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isEditMode ? "Edit Plan" : "Add Plan"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Title:</label>
            <input
              type="text"
              name="title"
              value={planData.title}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Description:</label>
            <textarea
              name="description"
              value={planData.description}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanForm;
