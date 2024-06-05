import axios from "axios";
import { API_KEY } from "./env";

const apiClient = axios.create({
  baseURL: "https://f1-latest-news.p.rapidapi.com/",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "f1-latest-news.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
});

export const getNews = async () => {
  try {
    const res = await apiClient.get("/news/f1");
    return res.data;
  } catch (error) {
    console.error("Error fetching latest news", error);
    throw error;
  }
};
