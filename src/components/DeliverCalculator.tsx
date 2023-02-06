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
    <div className="bg-primary_light font-inter py-5 px-5 xs:mx-2 w-full h-full xs:w-96 xs:h-auto xs:rounded-sm shadow-lg">
      <h1 className="text-primary_dark text-4xl font-pacifico text-center">
        Deliver Fee Calculator
      </h1>
      <DeliverForm
        inputs={inputs}
        setInputs={setInputs}
        setDeliveryFee={setDeliveryFee}
      />
      <p className="text-2xl text-center text-primary_dark">
        Delivery price: {deliveryFee} €
      </p>
    </div>
  );
};

export default DeliverCalculator;
