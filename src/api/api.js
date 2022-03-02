import axios from "axios";

const { REACT_APP_ACCESS_KEY } = process.env;
const UNSPLASH_API = "https://api.unsplash.com";

export default axios.create({
  baseURL: UNSPLASH_API,
  headers: {
    Authorization: `Client-ID ${REACT_APP_ACCESS_KEY}`,
  },
});
