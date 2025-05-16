const Claim = require('../models/claimModel');

exports.createClaim = async (req, res) => {
  try {
    // Generate a random prediction value (for example: "Approved" or "Rejected")
    const predictions = ["Approved", "Rejected", "Pending Review"];
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];

    // Add prediction to claim data
    const claimData = { ...req.body, prediction: randomPrediction };

    const claim = new Claim(claimData);
    await claim.save();
    res.status(201).json({ message: 'Claim submitted successfully', claim });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllClaims = async (req, res) => {
  try {
    const claims = await Claim.find();
    res.json(claims);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateClaimStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedClaim = await Claim.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!updatedClaim) {
      return res.status(404).json({ error: "Claim not found" });
    }
    res.json(updatedClaim);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};