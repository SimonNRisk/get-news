require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

app.get("/news", async (req, res) => {
  try {
    const response = await axios.get(NEWS_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Backend failed to fetch news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
