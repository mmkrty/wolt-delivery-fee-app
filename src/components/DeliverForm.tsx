import React, { useState } from "react";
import { InputData, Errors } from "../utils/models";
import { deliverFeeCalculator } from "../utils/deliverFeeCalculator";
import InputFieldNumber from "./InputFieldNumber";
import InputFieldDate from "./InputFieldDate";

interface Props {
  inputs: InputData;
  setInputs: React.Dispatch<React.SetStateAction<InputData>>;
  setDeliveryFee: React.Dispatch<React.SetStateAction<number>>;
}

const DeliverForm: React.FC<Props> = ({
  inputs,
  setInputs,
  setDeliveryFee,
}) => {
  //handle errors
  const inputError: Errors = {};
  Object.keys(inputs).forEach((key) => {
    inputError[key] = "";
  });

  const [errors, setErrors] = useState<Errors>(inputError);

  const hasError = Object.values(errors).some((val) => val);

  //handle input change events
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setInputs({ ...inputs, [id]: value });
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, deliverTime: new Date(event.target.value) });
  };

  //handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (hasError) return;

    setDeliveryFee(deliverFeeCalculator(inputs));

    // setInputs({
    //   cartFeeTotal: 0,
    //   cartItemsTotal: 0,
    //   deliverDistance: 0,
    //   deliverTime: new Date(),
    // });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black flex flex-col gap-6 px-4 py-5 my-5 rounded-sm"
    >
      <InputFieldNumber
        target="cartFeeTotal"
        label="Cart Value (€)"
        value={inputs.cartFeeTotal}
        errors={errors}
        setErrors={setErrors}
        handleInputChange={handleInputChange}
      />

      <InputFieldNumber
        target="deliverDistance"
        label="Distance (meters)"
        value={inputs.deliverDistance}
        errors={errors}
        setErrors={setErrors}
        handleInputChange={handleInputChange}
        integerOnly={true}
      />

      <InputFieldNumber
        target="cartItemsTotal"
        label="Amount of items"
        value={inputs.cartItemsTotal}
        errors={errors}
        setErrors={setErrors}
        handleInputChange={handleInputChange}
        integerOnly={true}
      />

      <InputFieldDate
        target="deliverTime"
        label="Time (UTC)"
        value={inputs.deliverTime.toISOString().substring(0, 16)}
        errors={errors}
        setErrors={setErrors}
        handleDateChange={handleDateChange}
      />

      <button
        type="submit"
        className="inline-block bg-[#2ED7FE] text-[#001464] font-bold py-2 my-2 rounded-md "
      >
        Calculate delivery price
      </button>
    </form>
  );
};

export default DeliverForm;
