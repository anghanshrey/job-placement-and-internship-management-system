require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");



const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/students", require("./routes/student.routes"));
app.use("/api/company", require("./routes/company.routes"));
app.use("/api/applications", require("./routes/application.routes"));
app.use("/api/admin", require("./routes/admin.routes"));




app.get("/", (req, res) => {
  res.send("Job Placement API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
