import { render, screen } from "@testing-library/react";
import Item from "../pages/home/Item";

// normal şartlarda bir bileşeni kullanırken hangi propları gönderiyorsak test ederkende normalde gönderdiğimiz değerlere benzer propları göndermeliyiz.
test("Gönderilen proplar doğru şekilde kullanılıyor mu", () => {
  render(<Item color="text-blue-500" text="Toplam Test" value="256M" />);

  // icon elementini al
  const icon = screen.getByTestId("icon");
  // color propu iconun clasında var mı
  expect(icon).toHaveClass("text-blue-500");

  // ? text içerikleri için 2 ihtimal var
  // 1) önce elementi çağır texte bak
  const h2 = screen.getByRole("heading");
  expect(h2).toHaveTextContent("256M");

  // 2) elementi texe göre çağır

  screen.getByText("Toplam Test");
});
