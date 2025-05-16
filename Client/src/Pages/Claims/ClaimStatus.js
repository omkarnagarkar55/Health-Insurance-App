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
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Claim Status</h2>
      {loading ? (
        <p>Loading...</p>
      ) : claims.length === 0 ? (
        <p>No claim status available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Claim Number</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Policy Holder</th>
                <th className="p-2 border">Policy Number</th>
                <th className="p-2 border">Claim Type</th>
                <th className="p-2 border">Prediction</th> {/* Added Prediction column */}
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr key={claim._id} className="hover:bg-gray-50">
                  <td className="p-2 border">{claim._id}</td>
                  <td className="p-2 border">{claim.status}</td>
                  <td className="p-2 border">${claim.totalAmount}</td>
                  <td className="p-2 border">
                    {new Date(claim.dateOfService).toLocaleDateString()}
                  </td>
                  <td className="p-2 border">{claim.policyHolderName}</td>
                  <td className="p-2 border">{claim.policyNumber}</td>
                  <td className="p-2 border">{claim.claimType}</td>
                  <td className="p-2 border">{claim.prediction || "N/A"}</td> {/* Display prediction */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ClaimStatus;
