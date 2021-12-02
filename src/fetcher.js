import axios from "axios";

// All of your API requests should be in this file

const KEY = "2e94837f1fc6f95b4f41a102b88e01c7";
const URL = "https://api.themoviedb.org/3";

export const movies = axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
    language: "en-US",
    page: "1",
    include_adult: "false",
  },
});

export const genres = axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
    language: "en-US",
  },
});
