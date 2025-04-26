/*
 * Yazıcağımız testler kesinlikle APİ isteklerine bağımlı olmamalı yani APİden gelen cevap testin geçip geçmeme durumunu etkilememeli
 * Api isteği atan func mock layıp apiden gelen cevapları kendimiz belirleyeceğiz.Bu sayede component APİ isteklerinden gelen cevapları düzgün bir şekilde ele alıyor mu test edeceğiz hem de gerçek APİ ile olan bağı tamamen koparacağız
 */

import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/home/Statistics";
import { totalApi } from "../utils/api";
import { totalData } from "../utils/constants";
import millify from "millify";

// api isteği atan fonk mock la
jest.mock("../utils/api", () => ({
  totalApi: { get: jest.fn() },
}));

describe("statistics component testleri", () => {
  // her testin sonrasında mockları temizle
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("Bileşen renderlandığında ekrana loader gelir", () => {
    // api isteğinde sahte fonk çalıştığında promise döndürsün

    totalApi.get.mockReturnValue(new Promise(() => {}));
    // bileşeni renderla
    render(<Statistics />);
    // ekranda loader componenti vardır
    screen.getByTestId("loader");
  });
  test("api den hata gelirse ekrana hata mesajı basılır", async () => {
    // sahte get fonksiyonu çalıştığında hata gelsin
    totalApi.get.mockRejectedValue(new Error("404 hatası"));

    render(<Statistics />);

    // belirli bir sürenin ardından yani loader gelip gittikten sonra hata gelsin
    await waitFor(() => screen.getByText("Üzgünüz bir sorun oluştu"));
  });
  test("api den veri gelirse ekrana veriler basılır", async () => {
    // sahte get fonk çalıştığında total veriyi döndür
    totalApi.get.mockResolvedValue({ data: { data: totalData } });
    render(<Statistics />);

    // api isteğinin atılmasını bekle

    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // toplam vaka sayısı ekrana basılacak
    screen.getByText(millify(totalData.confirmed));
    // toplam vefat sayısı ekrana basılacak
    screen.getByText(millify(totalData.deaths));
    // Aktif vaka sayısı ekrana basılacak
    screen.getByText(millify(totalData.active));
  });
});
