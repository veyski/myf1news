import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://f1-latest-news.p.rapidapi.com/",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-host": "f1-latest-news.p.rapidapi.com",
    "x-rapidapi-key": "0aea117e3bmsh9a34ef63c9d0e12p1e2678jsn73247777000b",
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
