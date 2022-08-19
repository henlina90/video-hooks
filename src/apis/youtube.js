import axios from "axios";

const KEY = "AIzaSyC59yrpo_5_ifH7O-YjA_6dPko912vjp0k";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
