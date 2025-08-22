const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// 🔥 THÊM DÒNG NÀY - Phục vụ static files (HTML, CSS, JS, images)
app.use(express.static(__dirname));

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Hàm đọc file JSON
function readData() {
  const filePath = path.join(__dirname, "db.json");
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

// Route chính - toàn bộ data
app.get("/api/db", (req, res) => {
  res.sendFile(__dirname + "/db.json");
});

// Route lấy tất cả products
app.get("/api/products", (req, res) => {
  const data = readData();
  res.json(data.products);
});

// Route lấy products theo type (man, girl, children)
app.get("/api/products/:type", (req, res) => {
  const data = readData();
  const type = req.params.type;
  if (data.products[type]) {
    res.json(data.products[type]);
  } else {
    res.status(404).json({ error: "Type not found" });
  }
});

// Route lấy sản phẩm theo ID và type
app.get("/api/products/:type/:id", (req, res) => {
  const data = readData();
  const type = req.params.type;
  const id = parseInt(req.params.id);

  if (data.products[type]) {
    const product = data.products[type].find((item) => item.id === id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } else {
    res.status(404).json({ error: "Type not found" });
  }
});

// Route lấy tất cả feedback
app.get("/api/feedback", (req, res) => {
  const data = readData();
  res.json(data.feedback);
});

// Route lấy feedback theo type
app.get("/api/feedback/:type", (req, res) => {
  const data = readData();
  const type = req.params.type;
  if (data.feedback[type]) {
    res.json(data.feedback[type]);
  } else {
    res.status(404).json({ error: "Feedback type not found" });
  }
});

// Route lấy cart
app.get("/api/cart", (req, res) => {
  const data = readData();
  res.json(data.cart);
});

// Route test - sửa thành phục vụ file index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
