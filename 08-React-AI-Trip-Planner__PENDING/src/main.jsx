import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/custom/Header";
import CreateTrip from "./components/create-trip/CreateTrip";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/create-trip" element={<CreateTrip />} />
    </Routes>
  </BrowserRouter>
);
