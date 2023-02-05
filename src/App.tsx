import DeliverCalculator from "./components/DeliverCalculator";

import "./App.css";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <DeliverCalculator />
      <p className="my-4 text-gray-500 sm:text-center">
        Hao Chen Liu © 2023 All Rights Reserved
      </p>
    </div>
  );
};

export default App;
