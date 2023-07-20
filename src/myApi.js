import axios from "axios";
export function getData() {
  return axios
    ?.get("http://universities.hipolabs.com/search?country=United+States")
    .then((res) => res.data);
}
