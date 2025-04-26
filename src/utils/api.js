import axios from "axios";

const totalApi = axios.create({
  baseURL: "https://covid-19-statistics.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "495e1d699fmshde1c47836a418bcp104d4fjsnfb5adb65e69c",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
});
const detailApi = axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "495e1d699fmshde1c47836a418bcp104d4fjsnfb5adb65e69c",
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
  },
});

const countryApi = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export { totalApi, detailApi, countryApi };
