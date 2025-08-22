const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Route API
app.get("/api/db", (req, res) => {
  const filePath = path.join(__dirname, "db.json");

  // Kiểm tra file có tồn tại không
  if (!fs.existsSync(filePath)) {
    return res.status(500).json({
      error: "File db.json not found",
      currentDirectory: __dirname,
      files: fs.readdirSync(__dirname),
    });
  }

  // Gửi file JSON
  res.sendFile(filePath);
});

// Route test để kiểm tra server
app.get("/", (req, res) => {
  res.json({
    message: "Server is running!",
    api_endpoint: "/api/db",
  });
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
