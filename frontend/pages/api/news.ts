import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const NEWS_API_KEY = process.env.NEWS_API_KEY;
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_API_KEY}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(NEWS_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Failed to fetch", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
