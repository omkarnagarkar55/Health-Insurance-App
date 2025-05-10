const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({
  claimType: { type: String, required: true },
  policyHolderName: { type: String, required: true },
  policyNumber: { type: String, required: true },
  dateOfService: { type: Date, required: true },
  diagnosis: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  receiptImage: { type: String }, // URL or file path for the uploaded receipt
  status: { type: String, default: "Pending" }, // Default status is "Pending"
});

module.exports = mongoose.model("Claim", claimSchema);