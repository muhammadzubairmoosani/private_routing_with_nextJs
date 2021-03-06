import Axios from "axios";
import { configure } from "axios-hooks";
import LRU from "lru-cache";

const axios = Axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000/",
});

const cache = new LRU({ max: 10 });

configure({ axios, cache });

export default axios;
