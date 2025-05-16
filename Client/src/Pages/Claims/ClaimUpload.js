import React, { useState } from "react";

const ClaimUpload = () => {
  const [claimType, setClaimType] = useState("");
  const [policyNumber, setPolicyNumber] = useState("");
  const [memberName, setMemberName] = useState("");
  const [uploadFile, setUploadFile] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Here you would handle the API call to upload the claim and file

    setClaimType("");
    setPolicyNumber("");
    setMemberName("");
    setUploadFile(null);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 py-8">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Upload Health Insurance Claim Documents
        </h2>
        <form onSubmit={handleFormSubmit} className="space-y-5">
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
              <option value="Medical">Medical</option>
              <option value="Accident">Accident</option>
              {/* Add more claim types as needed */}
            </select>
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
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="memberName">
              Member Name
            </label>
            <input
              type="text"
              id="memberName"
              name="memberName"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700" htmlFor="uploadFile">
              Upload Claim Documents
            </label>
            <input
              type="file"
              id="uploadFile"
              name="uploadFile"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setUploadFile(e.target.files[0])}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Submit Claim
          </button>
          {success && (
            <div className="text-green-600 text-center font-semibold mt-2">
              Claim submitted successfully!
            </div>
          )}
        </form>
        <div className="mt-8 bg-blue-50 rounded-lg p-4">
          <p className="font-semibold text-blue-700 mb-2">Additional Information:</p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Please upload all relevant documents, including medical reports, bills, and any other required paperwork.
            </li>
            <li>
              Our claim settlement team will review your documents and update you with the status as soon as possible.
            </li>
            <li>
              For assistance or queries, contact our 24/7 helpline at your state's provided number.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClaimUpload;
