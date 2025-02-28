import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBannerData } from "./store/movieSlice";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  async function fetchTrendingData() {
    setLoading(true);
    try {
      const res = await axios.get("/trending/all/day");
      // console.log(res.data.results);
      res?.data?.results.length > 0 &&
        dispatch(setBannerData(res.data.results));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrendingData();
  }, []);

  return (
    <div>
      <Header />
      <Outlet context={{ loading, error }} />
      <Footer />
      <MobileNav />
    </div>
  );
};

export default App;
