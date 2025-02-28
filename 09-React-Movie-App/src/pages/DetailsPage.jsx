import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import HorizontalCardDesign from "../components/HorizontalCardDesign";
import { useFetchApi } from "../hooks/useFetchApi";
import useFetchDetails from "../hooks/useFetchDetails";
import { useEffect, useState } from "react";
import VideoPlay from "../components/VideoPlay";

const DetailsPage = () => {
  const [showVideo, setsShowVideo] = useState(false);

  const params = useParams();
  // console.log(params);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.id]);

  const detailsData = useFetchDetails(
    `/${params?.explore}/${params?.id}`,
    "Details"
  );
  // console.log(detailsData);

  const castData = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`,
    "Credits"
  );
  // console.log(castData);

  const similarData = useFetchApi(
    `/${params.explore}/${params.id}/similar`,
    `Similar  ${params.explore}`
  );
  // console.log(similarData);

  const recommendedData = useFetchApi(
    `/${params.explore}/${params.id}/recommendations`
  );
  // console.log(recommendedData);

  return (
    <div>
      <ToastContainer />

      {detailsData && (
        <div className="text-white">
          {/* --- backdrop image section --- */}
          <div className="relative md:block w-full h-[400px] md:h-[48vh]">
            <img
              className="w-full h-full object-cover"
              src={`https://image.tmdb.org/t/p/original/${detailsData?.backdrop_path}`}
              alt="Details-image"
            />
            <div className="absolute top-0 bg-gradient-to-t from-neutral-900 to-transparent w-full h-full"></div>
          </div>

          {/* ---image and details texts flex container --- */}
          <div className="md:flex gap-10 px-3 md:px-12">
            {/* poster image play now  */}
            <div className="md:-mt-28 relative">
              <img
                className="w-[184px] h-60 object-cover rounded-t-md hidden md:block"
                src={`https://image.tmdb.org/t/p/original/${detailsData?.poster_path}`}
                alt="poster-image"
              />
              <button
                onClick={() => setsShowVideo(true)}
                className="mb-2 md:max-w-[184px] w-full bg-neutral-200 text-black font-semibold py-1.5 rounded-md md:rounded-b-md md:rounded-t-none hover:bg-white transition-all"
              >
                Play Now
              </button>
            </div>

            {/* all details texts */}
            <div className="flex-1 text-sm md:text-base">
              <div className="my-2">
                <h2 className="mb-1 text-3xl md:text-4xl font-bold">
                  {detailsData?.title || detailsData?.name}
                </h2>
                <p>{detailsData?.tagline}</p>
              </div>

              <div className="bg-neutral-400 h-[1px]"></div>

              <div className="flex items-center my-2 gap-3">
                <p>Rating: {Number(detailsData?.vote_average).toFixed(1)}</p>
                <p>|</p>
                <p>View: {Number(detailsData?.vote_count)}</p>
                <p>|</p>
                {detailsData?.runtime && (
                  <p>
                    Duration: {Number(detailsData?.runtime / 60).toFixed(0)}
                    h&nbsp;
                    {Number(detailsData?.runtime % 60)}m
                  </p>
                )}
              </div>
              <div className="bg-neutral-400 h-[1px]"></div>

              <div className="my-2">
                <h2 className="text-xl font-bold">Overview</h2>
                <p>{detailsData?.overview}</p>
              </div>
              <div className="bg-neutral-400 h-[1px]"></div>

              <div className="my-2 flex items-center gap-3">
                <p>Status: {detailsData?.status}</p>
                <p>|</p>
                <p>Release Date: {detailsData?.release_date}</p>
                <p>|</p>
                <p>Revenue: ${detailsData?.revenue}</p>
              </div>
              <div className="bg-neutral-400 h-[1px]"></div>
              <div className="my-2">
                <p>
                  Director:{" "}
                  {castData?.crew
                    ?.filter((item) => item?.job === "Director")
                    ?.map((item) => item.name)
                    .join(", ")}
                </p>
              </div>

              <div className="bg-neutral-400 h-[1px]"></div>

              <div className="my-2">
                <p>
                  Writer:{" "}
                  {castData?.crew
                    ?.filter((item) => item?.job === "Writer")
                    ?.map((item) => item.name)
                    .join(", ")}
                </p>
              </div>
              <div className="bg-neutral-400 h-[1px]"></div>

              {castData && (
                <div className="my-2">
                  <p className="text-xl font-semibold">Cast: </p>
                  <div className="my-5 flex flex-wrap gap-4 items-start justify-center">
                    {castData?.cast
                      ?.filter((el) => el.profile_path)
                      ?.map((el) => (
                        <div className="w-20 text-center" key={el.id}>
                          <img
                            className="w-20 h-20 rounded-full object-cover"
                            src={`https://image.tmdb.org/t/p/original${el?.profile_path}`}
                            alt="caster-image"
                          />
                          <p className="text-xs">{el?.name}</p>
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* -- similar movies/tv section -- */}
          <HorizontalCardDesign
            dataArray={similarData}
            categoryText={`Similar ${params.explore} Shows`}
            mediaType={params.explore}
          />

          {/* -- recommended movies/tv section -- */}
          <HorizontalCardDesign
            dataArray={recommendedData}
            categoryText={`Recommended ${params.explore} Shows`}
            mediaType={params.explore}
          />
        </div>
      )}

      {/* // VideoPlay container // */}
      {showVideo && (
        <VideoPlay
          mediaType={params?.explore}
          id={params?.id}
          close={() => setsShowVideo(false)}
        />
      )}

      {/* // to adjust the mobile screen nav height // */}
      <div className="h-12 md:h-6"></div>
    </div>
  );
};

export default DetailsPage;
