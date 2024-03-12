import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a538a24e1212463da974e409a8947d71",
  },
});
