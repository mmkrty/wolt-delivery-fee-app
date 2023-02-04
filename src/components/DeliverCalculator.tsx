import React, { useState } from "react";
import { InputData } from "../utils/models";
import DeliverForm from "./DeliverForm";

const DeliverCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<InputData>({
    cartFeeTotal: 0,
    cartItemsTotal: 0,
    deliverDistance: 0,
    deliverTime: new Date(),
  });

  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  return (
    <div>
      <h1 className="text-4xl">Deliver Fee Calculator</h1>
      <DeliverForm
        inputs={inputs}
        setInputs={setInputs}
        setDeliveryFee={setDeliveryFee}
      />
      <div>Delivery price: {deliveryFee}</div>
    </div>
  );
};

export default DeliverCalculator;
