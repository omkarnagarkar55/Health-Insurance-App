import React, { useEffect, useState } from "react";

const ClaimStatus = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClaims = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/claims");
        const data = await response.json();
        setClaims(data);
      } catch (error) {
        setClaims([]);
      } finally {
        setLoading(false);
      }
    };
    fetchClaims();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 py-8">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-7xl"> {/* Increased max-w-5xl to max-w-7xl */}
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Claim Status
        </h2>
        {loading ? (
          <div className="text-center text-blue-600 font-semibold py-8">Loading...</div>
        ) : claims.length === 0 ? (
          <div className="text-center text-gray-500 py-8">No claim status available.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-gray-200 rounded-lg shadow text-base"> {/* Added text-base for larger text */}
              <thead>
                <tr className="bg-blue-500 text-white text-lg"> {/* Increased header text size */}
                  <th className="py-3 px-6 border-b">Claim Number</th>
                  <th className="py-3 px-6 border-b">Status</th>
                  <th className="py-3 px-6 border-b">Amount</th>
                  <th className="py-3 px-6 border-b">Date</th>
                  <th className="py-3 px-6 border-b">Policy Holder</th>
                  <th className="py-3 px-6 border-b">Policy Number</th>
                  <th className="py-3 px-6 border-b">Claim Type</th>
                  <th className="py-3 px-6 border-b">Prediction</th>
                </tr>
              </thead>
              <tbody>
                {claims.map((claim, idx) => (
                  <tr
                    key={claim._id}
                    className={idx % 2 === 0 ? "bg-white" : "bg-blue-50"}
                  >
                    <td className="py-3 px-6 border-b text-center">{claim._id}</td>
                    <td className="py-3 px-6 border-b text-center">
                      <span
                        className={`px-2 py-1 rounded text-sm font-semibold ${
                          claim.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : claim.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {claim.status}
                      </span>
                    </td>
                    <td className="py-3 px-6 border-b text-right">${claim.totalAmount}</td>
                    <td className="py-3 px-6 border-b text-center">
                      {claim.dateOfService
                        ? new Date(claim.dateOfService).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="py-3 px-6 border-b">{claim.policyHolderName}</td>
                    <td className="py-3 px-6 border-b">{claim.policyNumber}</td>
                    <td className="py-3 px-6 border-b">{claim.claimType}</td>
                    <td className="py-3 px-6 border-b text-center">
                      <span className="px-2 py-1 rounded bg-blue-100 text-blue-700 text-sm font-semibold">
                        {claim.prediction || "N/A"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClaimStatus;
