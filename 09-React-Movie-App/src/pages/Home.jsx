import React from "react";
import { useOutletContext } from "react-router";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useFetchApi } from "../hooks/useFetchApi";
import HorizontalCardDesign from "../components/HorizontalCardDesign";

const Home = () => {
  const { loading, error } = useOutletContext();
  const trendingData = useSelector((state) => state.movieData.bannerData).slice(
    0,
    10
  );

  // getting now playing movies data using useFetchApi custom hook //
  const nowPlaying = useFetchApi("/movie/now_playing", "Now Playing Movies");
  const topRated = useFetchApi("/movie/top_rated", "Top Rated Movies");
  const popularTvShow = useFetchApi("/tv/popular", "Popular TV Show");
  const topRatedTvShow = useFetchApi("/tv/top_rated", "Top Rated TV Show");

  return (
    <div>
      {/*------ Toast Container ------*/}
      <ToastContainer />

      {/*----- loading error handle -----*/}
      <div className="text-center">
        {loading && <p className="mt-40">Loading please wait...</p>}
        {error && <p className="mt-40">{error}</p>}
      </div>

      {/*----- banner section -----*/}
      <BannerHome />

      {/*-----  Trending section -----*/}
      <HorizontalCardDesign
        dataArray={trendingData}
        categoryText={"Trending Today"}
        mediaType={null}
        trending={true}
      />

      {/*----- now playing section -----*/}
      <HorizontalCardDesign
        dataArray={nowPlaying}
        categoryText={"Now Playing Movies"}
        mediaType={"movie"}
      />

      {/*---- top rated section ----*/}
      <HorizontalCardDesign
        dataArray={topRated}
        categoryText={"Top Rated Movies"}
        mediaType={"movie"}
      />

      {/*--- Popular TV Show section ---*/}
      <HorizontalCardDesign
        dataArray={popularTvShow}
        categoryText={"Popular TV Shows"}
        mediaType={"tv"}
      />

      {/*---- Top Rated TV Show section ----*/}
      <HorizontalCardDesign
        dataArray={topRatedTvShow}
        categoryText={"Top Rated TV Shows"}
        mediaType={"tv"}
      />

      {/* // to adjust the mobile screen nav height // */}
      <div className="h-12 md:h-0"></div>
    </div>
  );
};

export default Home;
