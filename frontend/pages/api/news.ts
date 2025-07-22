import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const BACKEND_URL =
  process.env.BACKEND_NEWS_API || "http://localhost:4000/news";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(BACKEND_URL);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Failed to fetch", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
