const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const planRoutes = require("./routes/planRoutes");
const planDataRoutes = require("./routes/plandataRoutes");
const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const Admin = require("./models/adminModel"); // Import the Admin model
require("dotenv").config(); // Load environment variables from .env
const claimRoutes = require('./routes/claimRoutes');

const app = express();
const port = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.use(cors());
// Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB using the MONGO_URI from .env
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Database connected Successfully");
    // Check if any admin exists
    const adminExists = await Admin.findOne({ role: "admin" });
    if (!adminExists) {
      // Create a default admin
      const defaultAdmin = new Admin({
      firstname: process.env.DEFAULT_ADMIN_FIRSTNAME,
      lastname: process.env.DEFAULT_ADMIN_LASTNAME,
      username: process.env.DEFAULT_ADMIN_USERNAME,
      password: process.env.DEFAULT_ADMIN_PASSWORD, // Use a secure password in production
      email: process.env.DEFAULT_ADMIN_EMAIL,
      age: parseInt(process.env.DEFAULT_ADMIN_AGE, 10),
      gender: process.env.DEFAULT_ADMIN_GENDER,
      DOB: process.env.DEFAULT_ADMIN_DOB,
      phonenumber: process.env.DEFAULT_ADMIN_PHONENUMBER,
      address: process.env.DEFAULT_ADMIN_ADDRESS,
      role: process.env.DEFAULT_ADMIN_ROLE,
      active: process.env.DEFAULT_ADMIN_ACTIVE === "true",
      
      });

      // Save the default admin to the database
      await defaultAdmin.save();
      console.log("Default admin created with username: admin and password: admin123");
    }
  })
  .catch((error) => {
    console.error("Error connecting to the database : ", error);
  });

// Routes
app.use("/users", userRoutes);
app.use("/plans", planRoutes);
app.use("/plandata", planDataRoutes);
app.use("/admin", adminRoutes);
app.use("/auth", authRoutes);
app.use('/api', claimRoutes);

// Start the server
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
