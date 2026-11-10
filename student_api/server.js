
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const studentRoutes = require("./src/routes/student.route");
const subjectRoutes = require("./src/routes/subject.route")

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api/students", studentRoutes);
app.use("api/subjects", subjectRoutes);

app.get("/", (req, res) => {
    res.json({ message: "JK is Running" });
});

app.use("/api/students", studentRoutes);
app.use("/api/subjects", subjectRoutes);

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on localhost:${PORT}`);
});