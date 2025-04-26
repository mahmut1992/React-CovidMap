import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Head from "../pages/detail/Head";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "../utils/constants";

// redux kullanan bileşenler için sahte storlar oluşturmamızı sağlayacak fonk
const mockStore = configureStore([thunk]);

it("store yüklenme durumundayken ekrana loader basılır", () => {
  // yüklenme durumunda sahte store
  const store = mockStore({ isLoading: true, error: null, data: null });

  // Bileşeni renderla

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );
  // ekranda loader var mı
  screen.getByTestId("head-loader");
});
it("store yüklenme bittiğinde  loader ekrandan gider", () => {
  // yüklenme durumunda sahte store
  const store = mockStore({ isLoading: false, error: null, data: null });

  // Bileşeni renderla

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );
  // ekranda loader var mı
  const element = screen.queryByTestId("header-loader");
  expect(element).toBeNull();
});
it("store veri geldiğinde ekrana ülke ismi ve bayrak  basılır", () => {
  const store = mockStore({
    isLoading: false,
    error: null,
    data: mockData,
  });
  // Bileşeni renderla

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // ülke ismi ekranamı

  screen.getByRole("heading", { name: mockData.country });
  // resim ekranda mı
  const img = screen.getByAltText(mockData.flag.alt);
  expect(img).toHaveAttribute("src", mockData.flag.png);
});
