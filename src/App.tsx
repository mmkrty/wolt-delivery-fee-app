import React, { useState } from "react";
import { InputData } from "./utils/models";
import Form from "./components/Form";
import "./App.css";

const App: React.FC = () => {
  const [inputs, setInputs] = useState<InputData>({
    cartFeeTotal: 0,
    cartItemsTotal: 0,
    deliverDistance: 0,
    deliverTime: new Date(),
  });

  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  return (
    <div className="App">
      <h1 className="text-4xl">Deliver Fee Calculator</h1>
      <Form
        inputs={inputs}
        setInputs={setInputs}
        setDeliveryFee={setDeliveryFee}
      />
      <div>Delivery price: {deliveryFee}</div>
    </div>
  );
};

export default App;
