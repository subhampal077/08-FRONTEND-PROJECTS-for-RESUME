import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import ExplorePage from "./pages/ExplorePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import axios from "axios";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

// axios setup
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_API_ACCESS_TOKEN
}`;

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />

          <Route path=":explore" element={<ExplorePage />} />

          <Route path=":explore/:id" element={<DetailsPage />} />

          <Route path="search" element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
