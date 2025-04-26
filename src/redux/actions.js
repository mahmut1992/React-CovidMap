import { createAsyncThunk } from "@reduxjs/toolkit";
import { countryApi, detailApi } from "../utils/api";

export const getDetails = createAsyncThunk(
  "covid/getDetails",
  async (country) => {
    // ülke covid verilerini alacak api istekleri
    const req1 = detailApi.get("/statistics", { params: { country } });

    // ülke detay verilerini alıcak api istekleri
    const req2 = countryApi.get(`/name/${country}`);

    // iki api isteğini aynı anda at

    const [res1, res2] = await Promise.all([req1, req2]);

    // ihtiyacımız olan veriler

    const covid = res1.data.response[0];
    const countryData = res2.data[0];

    const data = {
      continent: covid.continent,
      country: covid.country,
      capital: countryData.capital[0],
      currency: Object.values(countryData.currencies)[0].name,
      date: covid.day,
      cases: covid.cases.total,
      deaths: covid.deaths.total,
      tests: covid.tests.total,
      population: countryData.population,
      flag: countryData.flags,
    };

    // payloadı return et

    return data;
  }
);
