const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Cho phép truy cập từ các domain khác (CORS)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Route chính để phục vụ file data.json
app.get("/api/data", (req, res) => {
  res.sendFile(__dirname + "/data.json");
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
