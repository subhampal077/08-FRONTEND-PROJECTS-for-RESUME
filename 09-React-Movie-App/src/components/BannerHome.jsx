import React, { useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useSelector } from "react-redux";
import VideoPlay from "./VideoPlay";

const BannerHome = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const [showVideo, setsShowVideo] = useState(false);
  const [videoId, setVideoId] = useState({});
  // console.log(videoId);

  const bannerData = useSelector((state) => state.movieData.bannerData);
  // console.log(bannerData);

  function handlePrev() {
    currentBannerIndex === 0
      ? setCurrentBannerIndex(bannerData.length - 1)
      : setCurrentBannerIndex(currentBannerIndex - 1);
  }

  function handleNext() {
    currentBannerIndex === bannerData.length - 1
      ? setCurrentBannerIndex(0)
      : setCurrentBannerIndex(currentBannerIndex + 1);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(intervalId);
  }, [currentBannerIndex, bannerData]);

  return (
    <div className="overflow-hidden mb-8 md:mb-0">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentBannerIndex * 100}%)` }}
      >
        {bannerData &&
          bannerData.map((item) => (
            <div key={item.id} className="min-w-full relative">
              <img
                className="min-w-full md:h-[85vh] min-h-[460px] object-cover"
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt="movie-img"
              />

              <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900 to-transparent"></div>

              {/* // next prev button */}
              {bannerData.length > 0 && (
                <>
                  <IoIosArrowDropleftCircle
                    onClick={handlePrev}
                    className="text-neutral-500 opacity-30 bg-white rounded-full absolute z-10 top-[45%] left-5 cursor-pointer hover:opacity-70 hidden md:block"
                    size={28}
                  />
                  <IoIosArrowDroprightCircle
                    onClick={handleNext}
                    className="text-neutral-500 opacity-30 bg-white rounded-full absolute z-10 top-[45%] right-5 cursor-pointer hover:opacity-70 hidden md:block"
                    size={28}
                  />
                </>
              )}

              <div className="absolute px-3 md:px-12 bottom-1.5 md:bottom-12 max-w-[500px] flex flex-col items-start md:gap-3 gap-2 text-sm md:text-base">
                <h1 className="md:text-4xl text-2xl font-bold text-white">
                  {item?.title || item?.name || item?.original_name}
                </h1>
                <p>{item.overview.slice(0, 140)}...</p>
                <div className="flex gap-3">
                  <span>Rating: {Number(item.vote_average).toFixed(1)}+</span>
                  <span>|</span>
                  <span>View: {Number(item.popularity).toFixed(0)}</span>
                </div>
                <button
                  onClick={() => {
                    setsShowVideo(true);
                    setVideoId({ id: item?.id, mediaType: item?.media_type });
                  }}
                  className="hover:bg-white text-black font-bold px-3 py-2 rounded-md bg-neutral-200 hover:scale-105"
                >
                  Play Now
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* // VideoPlay container // */}
      {showVideo && (
        <VideoPlay
          mediaType={videoId?.mediaType}
          id={videoId?.id}
          close={() => setsShowVideo(false)}
        />
      )}
    </div>
  );
};

export default BannerHome;
