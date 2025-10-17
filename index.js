const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/segments", async (req, res) => {
  const payload = req.body;
  console.log("📦 Received payload:", payload);

  try {
    await axios.post("https://webhook.site/b6faf994-1b3f-46b9-978a-d4d7ce72b6a6", payload);
    res.status(200).json({ message: "Payload forwarded to Webhook.site!" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Failed to forward payload." });
  }
});

app.listen(5000, () => console.log("✅ Server running on port 5000"));
