import { render, screen, fireEvent } from "@testing-library/react";

import DeliverCalculator from "./DeliverCalculator";

it("Deliver Calculator should be rendered.", () => {
  render(<DeliverCalculator />);
  const calculatorEl = screen.getByText(/deliver fee calculator/i);
  expect(calculatorEl).toBeInTheDocument();
});

it("All number input fields should be renderd.", () => {
  const listEl = ["Cart Value", "Distance", "Amount of items"];
  render(<DeliverCalculator />);

  for (const el of listEl) {
    // test labels are rendered.
    const regex = new RegExp(el, "i");
    const labelEl = screen.getByLabelText(regex);
    expect(labelEl).toBeInTheDocument();
    // test inputs are rendered.
    const inputEl = screen.getByRole("spinbutton", { name: regex });
    expect(inputEl).toBeInTheDocument();
  }
});

it("Date input field should be renderd.", () => {
  render(<DeliverCalculator />);

  const regex = new RegExp("time", "i");
  //test label are rendered
  const labelEl = screen.getByText(regex);
  expect(labelEl).toBeInTheDocument();
  //test input are rendered
  const inputEl = screen.getByLabelText(regex);
  expect(inputEl).toBeInTheDocument();
});

it("Error message should be displayed when a user enters number less than 1 to number inputs.", async () => {
  const listEl = ["Cart Value", "Distance", "Amount of items"];
  render(<DeliverCalculator />);
  for (const el of listEl) {
    const regex = new RegExp(el);
    const inputEl = screen.getByRole("spinbutton", { name: regex });
    fireEvent.input(inputEl, { target: { value: "0" } });
    fireEvent.blur(inputEl);
  }
  const errorMsg = await screen.findAllByText(/please/i);
  expect(errorMsg.length).toEqual(3);
});

it("Error message should be displayed when a user enters floats to distance and amount of items inputs.", async () => {
  const listEl = ["Distance", "Amount of items"];
  render(<DeliverCalculator />);
  for (const el of listEl) {
    const regex = new RegExp(el);
    const inputEl = screen.getByRole("spinbutton", { name: regex });
    fireEvent.input(inputEl, { target: { value: "1.2" } });
    fireEvent.blur(inputEl);
  }
  const errorMsg = await screen.findAllByText(/please/i);
  expect(errorMsg.length).toEqual(2);
});

it("Error message should be displayed when a user enters previous date or time to date time input.", async () => {
  render(<DeliverCalculator />);
  const inputEl = screen.getByLabelText(/time/i);
  fireEvent.change(inputEl, { target: { value: "2022-03-03T16:30" } });
  fireEvent.blur(inputEl);

  const errorMsg = await screen.findAllByText(/you/i);
  expect(errorMsg.length).toEqual(1);
});

// it("Total fee should be displayed correctly.", () => {
//   const handleSubmit = jest.fn();

//   const cartValueEl = screen.getByRole("spinbutton", { name: /Cart Value/i });
//   fireEvent.input(cartValueEl, { target: { value: 8 } });
//   const distanceEl = screen.getByRole("spinbutton", { name: /Distance/i });
//   fireEvent.input(distanceEl, { target: { value: 1000 } });
//   const itemsEl = screen.getByRole("spinbutton", { name: /Amount of items/i });
//   fireEvent.input(itemsEl, { target: { value: 4 } });

//   const DateTimeEl = screen.getByLabelText(/time/i);
//   fireEvent.change(DateTimeEl, { target: { value: "2023-05-03T16:30" } });
// });
