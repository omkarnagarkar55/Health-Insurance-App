// UserTableRow.js
import React from "react";
import { FaTrash, FaEdit, FaUser } from "react-icons/fa";

const UserTableRow = ({ user, onDeleteClick, onUpdateClick }) => {
  return (
    <tr className="hover:bg-blue-50 transition-colors duration-150">
      <td className="border px-4 py-2 flex items-center space-x-2">
        <FaUser className="text-blue-400" />
        <span className="font-medium">{user.firstName} {user.lastName}</span>
      </td>
      <td className="border px-4 py-2">{user.username}</td>
      <td className="border px-4 py-2">{user.email}</td>
      <td className="border px-4 py-2 text-center">{user.age}</td>
      <td className="border px-4 py-2 text-center capitalize">{user.gender}</td>
      <td className="border px-4 py-2">{user.address}</td>
      <td className="border px-4 py-2">{user.city}</td>
      <td className="border px-4 py-2">{user.country}</td>
      <td className="border px-4 py-2 flex space-x-2 justify-center">
        <button
          onClick={() => onUpdateClick(user)}
          className="bg-yellow-400 hover:bg-yellow-500 text-white px-2 py-1 rounded flex items-center space-x-1 transition"
          title="Edit User"
        >
          <FaEdit />
          <span>Edit</span>
        </button>
        <button
          onClick={() => onDeleteClick(user._id)}
          className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded flex items-center space-x-1 transition"
          title="Delete User"
        >
          <FaTrash />
          <span>Delete</span>
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
