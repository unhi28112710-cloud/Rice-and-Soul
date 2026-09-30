const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.get("/api/message", require("./api/message"));
app.use(express.static(__dirname));

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Rice & Soul: http://localhost:${port}`);
});
