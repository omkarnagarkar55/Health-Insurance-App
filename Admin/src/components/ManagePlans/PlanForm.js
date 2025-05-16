import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanForm = ({ plan, onClose, isEditMode, onSuccess }) => {
  const [planData, setPlanData] = useState({
    title: "",
    img: "",
    summary: "",
    benefits: "",
    coverage: "",
  });

  useEffect(() => {
    if (plan) {
      setPlanData({
        title: plan.title || "",
        img: plan.img || "",
        summary: plan.summary || plan.content1 || "",
        benefits: plan.benefits || plan.content2 || "",
        coverage: plan.coverage || plan.content3 || "",
      });
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...planData,
        content1: planData.summary,
        content2: planData.benefits,
        content3: planData.coverage,
      };
      if (isEditMode && plan && plan._id) {
        await axios.put(`http://localhost:5000/plans/${plan._id}`, payload);
      } else {
        await axios.post("http://localhost:5000/plans/create", payload);
      }
      onSuccess();
      onClose();
    } catch (err) {
      alert("Error saving plan");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
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
            <label className="block text-gray-600">Image URL:</label>
            <input
              type="text"
              name="img"
              value={planData.img}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Short Description:</label>
            <textarea
              name="summary"
              value={planData.summary}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Key Benefits:</label>
            <textarea
              name="benefits"
              value={planData.benefits}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Coverage & Eligibility:</label>
            <textarea
              name="coverage"
              value={planData.coverage}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="2"
              required
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
