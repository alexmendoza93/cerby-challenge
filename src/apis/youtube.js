import axios from "axios";

const KEY = "AIzaSyD7WKuDF-sH-Oj6uVmeYUf0vRiUo-QgAGM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 25,
    key: KEY,
    safeSearch: "none",
  },
});
