import React, { useState } from "react";
import { InputData } from "../utils/models";
import DeliverForm from "./DeliverForm";

const DeliverCalculator = () => {
  const [inputs, setInputs] = useState<InputData>({
    cartFeeTotal: 0,
    cartItemsTotal: 0,
    deliverDistance: 0,
    deliverTime: new Date(),
  });

  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  return (
    <div className="bg-[#001464] font-inter py-5 px-5 mx-2 rounded-md shadow">
      <h1 className="text-[#2ED7FE] text-4xl font-pacifico text-center">
        Deliver Fee Calculator
      </h1>
      <DeliverForm
        inputs={inputs}
        setInputs={setInputs}
        setDeliveryFee={setDeliveryFee}
      />
      <p className="text-xl text-center text-white">
        Delivery price: {deliveryFee}
      </p>
    </div>
  );
};

export default DeliverCalculator;
