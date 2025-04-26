import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { mockData } from "../utils/constants";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Content from "../pages/detail/Content";

const mockStore = configureStore([thunk]);

it("store yüklenme durumunda ekrana loader gelir", () => {
  const store = mockStore({ isLoading: true, error: null, data: null });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getAllByTestId("content-loader");
});
it("store hata durumunda ekrana error gelir", () => {
  const store = mockStore({
    isLoading: false,
    error: "İnternetiniz Yavaş",
    data: null,
  });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  screen.getByTestId("error");
});
it("store veri geldiğinde nesnedeki her bir değer ekrana kart basılır", () => {
  const store = mockStore({ isLoading: false, error: null, data: mockData });
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );
  // data nesnesini diziye çevir

  const arr = Object.entries(mockData).filter(([key]) => key !== "flag");
  // dizideki her değer için kart içerisinde veriler basılır
  arr.forEach((item) => {
    // ekrana key değerleri basılıyor mu
    screen.getByText(item[0]);
    // ekrana value değerleri basılıyor mu
    screen.getByText(item[1]);
  });
});
