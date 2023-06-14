import axios from "axios";
import { RAWG_API_KEY } from "./rawg-config";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_API_KEY,
  },
});
