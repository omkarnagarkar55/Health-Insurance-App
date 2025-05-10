import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTableRow from "./UserTableRow";
import EditUser from "./EditUser";
import AddUser from "./AddUser";

const UserList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getAll")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data: ", error);
      });
  }, []);

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user._id !== userId);
    setUsers(updatedUsers);
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleCancelEdit = () => {
    setSelectedUser(null);
  };

  const handleAddUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>

      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Search by username"
        />
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Age</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <UserTableRow
                key={user._id}
                user={user}
                onDeleteClick={handleDeleteUser}
                onUpdateClick={handleEditClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <EditUser
          user={selectedUser}
          onCancelEdit={handleCancelEdit}
          onUpdateUser={(updatedUser) => {
            const updatedUsers = users.map((user) =>
              user._id === updatedUser._id ? updatedUser : user
            );
            setUsers(updatedUsers);
          }}
        />
      )}

      {showAddModal && (
        <AddUser onAddUser={handleAddUser} onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

export default UserList;
