import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/error";

it("error componenti hata mesajını gösterir", () => {
  const mockFn = jest.fn();
  render(<Error refetch={mockFn} info="İnternetiniz Yavaş" />);
  screen.getByText("İnternetiniz Yavaş");
  const button = screen.getByRole("button", { name: "Tekrar Dene" });
  fireEvent.click(button);
  expect(mockFn).toHaveBeenCalled();
});
