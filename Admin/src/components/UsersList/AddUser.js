import React, { useState } from "react";

const AddUser = ({ onAddUser, onClose }) => {
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    age: "",
    gender: "",
    address: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dummyId = Math.random().toString(36).substring(2, 10);
    onAddUser({ ...newUser, _id: dummyId });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-2xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            "firstName",
            "lastName",
            "username",
            "email",
            "age",
            "gender",
            "address",
            "city",
            "country",
          ].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={newUser[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          ))}
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded"
            >
              Add
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
