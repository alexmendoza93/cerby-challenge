import axios from "axios";

const KEY = "INSERT-YOUTUBE-API-KEY";

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
