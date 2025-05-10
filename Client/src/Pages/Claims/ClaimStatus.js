import React from "react";

const ClaimStatus = () => {
  // Simulated claim status data - Replace this with actual data from API or state
  const claimStatusData = [
    {
      claimNumber: "CLM123456",
      status: "Pending",
      amount: "$300.00",
      date: "07/29/2023",
      policyHolder: "Pavan Korat",
      phoneNumber: "(851) 141-1930",
      email: "pavankorat@example.com",
      chances: "Low",
    },
    {
      claimNumber: "CLM789012",
      status: "Approved",
      amount: "$180.00",
      date: "07/20/2023",
      policyHolder: "Aayush Patel",
      phoneNumber: "(932) 837-3131",
      email: "aayushpatel@example.com",
      chances: "High",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Claim Status</h2>
      {claimStatusData.length === 0 ? (
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
                <th className="p-2 border">Chances of Approval</th>
              </tr>
            </thead>
            <tbody>
              {claimStatusData.map((claim) => (
                <tr key={claim.claimNumber} className="hover:bg-gray-50">
                  <td className="p-2 border">{claim.claimNumber}</td>
                  <td className="p-2 border">{claim.status}</td>
                  <td className="p-2 border">{claim.amount}</td>
                  <td className="p-2 border">{claim.date}</td>
                  <td className="p-2 border">{claim.policyHolder}</td>
                  <td className="p-2 border">{claim.chances}</td>
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
