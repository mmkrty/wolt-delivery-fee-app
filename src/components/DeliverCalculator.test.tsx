import { render, screen } from "@testing-library/react";

import DeliverCalculator from "./DeliverCalculator";

it("Deliver Calculator should be rendered", () => {
  render(<DeliverCalculator />);
  const calculatorEl = screen.getByText(/deliver fee calculator/i);
  expect(calculatorEl).toBeInTheDocument();
});

it("All number input fields should be renderd", () => {
  const listEl = ["Cart Value", "Distance", "Amount of items"];
  render(<DeliverCalculator />);

  for (const el of listEl) {
    // test labels are rendered.
    const regex = new RegExp(el);
    const labelEl = screen.getByLabelText(regex);
    expect(labelEl).toBeInTheDocument();
    // test inputs are rendered.
    const inputEl = screen.getByRole("spinbutton", { name: regex });
    expect(inputEl).toBeInTheDocument();
  }
});

it("Date input field should be renderd", () => {
  render(<DeliverCalculator />);

  const regex = new RegExp("time", "i");
  //test label are rendered
  const labelEl = screen.getByText(regex);
  expect(labelEl).toBeInTheDocument();
  //test input are rendered
  const inputEl = screen.getByLabelText(regex);
  expect(inputEl).toBeInTheDocument();
});
