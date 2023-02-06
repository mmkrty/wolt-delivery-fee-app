import DeliverCalculator from "./components/DeliverCalculator";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="min-h-screen sm:w-screen sm:h-screen flex flex-col justify-center items-center relative ">
      <DeliverCalculator />
      <p className="hidden xs:block my-4 text-sm text-gray-500 sm:text-center">
        Hao Chen Liu © 2023 All Rights Reserved
      </p>
    </div>
  );
};

export default App;
