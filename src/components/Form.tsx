import React, { useState } from "react";
import { InputData } from "../utils/models";
import { deliverFeeCalculator } from "../utils/deliverFeeCalculator";
import InputFieldNumber from "./InputFieldNumber";
import InputFieldDate from "./InputFieldDate";

interface Props {
  inputs: InputData;
  setInputs: React.Dispatch<React.SetStateAction<InputData>>;
  setDeliveryFee: React.Dispatch<React.SetStateAction<number>>;
}

const Form: React.FC<Props> = ({ inputs, setInputs, setDeliveryFee }) => {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, deliverTime: new Date(event.target.value) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!Number.isInteger(Number(inputs.deliverDistance))) {
      setInputs({ ...inputs, deliverDistance: 0 });
      setErrorMessage("Invalid distance, please enter an integer");
      return;
    }

    if (!Number.isInteger(Number(inputs.cartItemsTotal))) {
      setInputs({ ...inputs, cartItemsTotal: 0 });
      setErrorMessage("Invalid amount of items, please enter an integer");
      return;
    }

    setDeliveryFee(deliverFeeCalculator(inputs));

    setInputs({
      cartFeeTotal: 0,
      cartItemsTotal: 0,
      deliverDistance: 0,
      deliverTime: new Date(),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputFieldNumber
        target="cartFeeTotal"
        label="Cart Value"
        value={inputs.cartFeeTotal}
        handleInputChange={handleInputChange}
      />
      <InputFieldNumber
        target="deliverDistance"
        label="Distance (meters)"
        value={inputs.deliverDistance}
        handleInputChange={handleInputChange}
      />
      <InputFieldNumber
        target="cartItemsTotal"
        label="Amount of items"
        value={inputs.cartItemsTotal}
        handleInputChange={handleInputChange}
      />

      <InputFieldDate
        target="deliverTime"
        label="Time"
        value={inputs.deliverTime.toISOString().substring(0, 16)}
        handleDateChange={handleDateChange}
      />

      <span className="block">{errorMessage}</span>

      <button type="submit" className="block">
        Calculate delivery price
      </button>
    </form>
  );
};

export default Form;
