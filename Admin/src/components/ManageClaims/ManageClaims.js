import React, { useState, useEffect } from "react";

const ManageClaims = () => {
  const [claims, setClaims] = useState([]);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch claims from backend
  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/claims");
        const data = await response.json();
        setClaims(data);
      } catch (error) {
        setClaims([]);
      }
    };
    fetchClaims();
  }, []);

  const approveClaim = (claimId) => {
    const updatedClaims = claims.map((claim) =>
      claim._id === claimId ? { ...claim, status: "Approved" } : claim
    );
    setClaims(updatedClaims);
  };

  const rejectClaim = (claimId) => {
    const updatedClaims = claims.map((claim) =>
      claim._id === claimId ? { ...claim, status: "Rejected" } : claim
    );
    setClaims(updatedClaims);
  };

  const viewClaimDetails = (claim) => {
    setSelectedClaim(claim);
    const user = getUserDetails(claim.userId);
    setSelectedUser(user);
  };

  const closeClaimDetails = () => {
    setSelectedClaim(null);
    setSelectedUser(null);
  };

  // Dummy user details
  const getUserDetails = (userId) => {
    return {
      userId: userId,
      userName: "John Doe",
      age: 30,
      bloodGroup: "A+",
      planAmount: "$1,000,000",
      validity: 12,
      otherPlans: ["Basic Plan", "Additional Health Rider"],
      address: "123 Main St, City",
      phoneNumber: "555-555-5555",
      dob: "1990-01-01",
      familyMembers: ["Spouse", "Child 1", "Child 2"],
    };
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Manage Claims</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-600">Claim Requests</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="py-2 px-4 border-b">Policy Holder</th>
                <th className="py-2 px-4 border-b">Policy Number</th>
                <th className="py-2 px-4 border-b">Claim Type</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Prediction</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim, idx) => (
                <tr key={claim._id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-4 border-b">{claim.policyHolderName}</td>
                  <td className="py-2 px-4 border-b">{claim.policyNumber}</td>
                  <td className="py-2 px-4 border-b">{claim.claimType}</td>
                  <td className="py-2 px-4 border-b text-right">${claim.totalAmount}</td>
                  <td className="py-2 px-4 border-b text-center">
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${
                      claim.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : claim.status === "Rejected"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {claim.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-sm font-semibold">
                      {claim.prediction || "N/A"}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {claim.status === "Pending" && (
                      <>
                        <button
                          onClick={() => approveClaim(claim._id)}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => rejectClaim(claim._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded mr-2"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button
                      onClick={() => viewClaimDetails(claim)}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
              {claims.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-4 text-center text-gray-500">
                    No claims found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {selectedClaim && (
        <div className="bg-white rounded-lg shadow p-6 mt-4 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Claim Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-4">
            <div>
              <p><span className="font-semibold">Policy Holder:</span> {selectedClaim.policyHolderName}</p>
              <p><span className="font-semibold">Policy Number:</span> {selectedClaim.policyNumber}</p>
              <p><span className="font-semibold">Claim Type:</span> {selectedClaim.claimType}</p>
              <p><span className="font-semibold">Amount:</span> ${selectedClaim.totalAmount}</p>
              <p><span className="font-semibold">Status:</span> {selectedClaim.status}</p>
              <p><span className="font-semibold">Prediction:</span> {selectedClaim.prediction || "N/A"}</p>
            </div>
            <div>
              <p><span className="font-semibold">Date of Service:</span> {selectedClaim.dateOfService ? new Date(selectedClaim.dateOfService).toLocaleDateString() : "N/A"}</p>
              <p><span className="font-semibold">Diagnosis:</span> {selectedClaim.diagnosis || "N/A"}</p>
              {/* Add more claim fields here if needed */}
            </div>
          </div>
          {selectedUser && (
            <>
              <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-600">User Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <p><span className="font-semibold">User ID:</span> {selectedUser.userId}</p>
                  <p><span className="font-semibold">Name:</span> {selectedUser.userName}</p>
                  <p><span className="font-semibold">Age:</span> {selectedUser.age}</p>
                  <p><span className="font-semibold">Blood Group:</span> {selectedUser.bloodGroup}</p>
                  <p><span className="font-semibold">Plan Amount:</span> {selectedUser.planAmount}</p>
                  <p><span className="font-semibold">Validity:</span> {selectedUser.validity} months</p>
                </div>
                <div>
                  <p><span className="font-semibold">Other Plans:</span> {selectedUser.otherPlans.join(", ")}</p>
                  <p><span className="font-semibold">Address:</span> {selectedUser.address}</p>
                  <p><span className="font-semibold">Phone Number:</span> {selectedUser.phoneNumber}</p>
                  <p><span className="font-semibold">Date of Birth:</span> {selectedUser.dob}</p>
                  <p><span className="font-semibold">Family Members:</span> {selectedUser.familyMembers.join(", ")}</p>
                </div>
              </div>
            </>
          )}
          <div className="mt-6 flex justify-end">
            <button
              onClick={closeClaimDetails}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClaims;
