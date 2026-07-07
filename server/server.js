require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/bookings", bookingRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
    res.send("LensCraft Studio Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});