import React, { useState } from "react";

const ClaimImitation = () => {
  const [claimType, setClaimType] = useState("");
  const [policyHolderName, setPolicyHolderName] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [dateOfService, setDateOfService] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [receiptImage, setReceiptImage] = useState(null);
  const [submittedClaims, setSubmittedClaims] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newClaim = {
      claimType,
      policyHolderName,
      policyNumber,
      dateOfService,
      diagnosis,
      totalAmount,
      // receiptImage is not included here since it's a file
    };
    setSubmittedClaims([...submittedClaims, newClaim]);
    try {
      const response = await fetch('http://localhost:5000/api/claims', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClaim),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Claim submitted successfully!');
        setClaimType("");
        setPolicyHolderName("");
        setPolicyNumber("");
        setDateOfService("");
        setDiagnosis("");
        setTotalAmount("");
        setReceiptImage(null);
      } else {
        alert(data.error || 'Failed to submit claim');
      }
    } catch (error) {
      alert('Error submitting claim');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 py-8">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Health Insurance Claim Intimation
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="claimType">
              Claim Type
            </label>
            <select
              id="claimType"
              name="claimType"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={claimType}
              onChange={(e) => setClaimType(e.target.value)}
              required
            >
              <option value="">Select Claim Type</option>
              <option value="medical">Medical</option>
              <option value="dental">Dental</option>
              <option value="vision">Vision</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="policyHolderName">
              Policy Holder Name
            </label>
            <input
              type="text"
              id="policyHolderName"
              name="policyHolderName"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={policyHolderName}
              onChange={(e) => setPolicyHolderName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="policyNumber">
              Policy Number
            </label>
            <input
              type="text"
              id="policyNumber"
              name="policyNumber"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={policyNumber}
              onChange={(e) => setPolicyNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="dateOfService">
              Date of Service
            </label>
            <input
              type="date"
              id="dateOfService"
              name="dateOfService"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={dateOfService}
              onChange={(e) => setDateOfService(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="diagnosis">
              Diagnosis
            </label>
            <textarea
              id="diagnosis"
              name="diagnosis"
              rows="3"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="totalAmount">
              Total Amount
            </label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              min="0"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={totalAmount}
              onChange={(e) => setTotalAmount(e.target.value.replace(/[^0-9]/g, ""))}
              required
              placeholder="Enter amount in USD"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="receiptImage">
              Receipt Image
            </label>
            <input
              type="file"
              id="receiptImage"
              name="receiptImage"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setReceiptImage(e.target.files[0])}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Submit Claim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClaimImitation;
