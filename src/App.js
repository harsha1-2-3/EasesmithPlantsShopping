import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlantsAndPots from "./components/PlantsAndPots";
import ThankYouPage from "./components/ThankYouPage";
import "./App.css";

const App = () => (
  <div className="bg-app">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PlantsAndPots />} />
        <Route exact path="thankyou" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
export default App;
