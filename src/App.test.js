import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./Components/BookingForm";

test("renders learn react link", () => {
  render(<App></App>);
  const headingElement = screen.getByText("Welcome to Little Lemon Restaurant");
  expect(headingElement).toBeInTheDocument();
});
