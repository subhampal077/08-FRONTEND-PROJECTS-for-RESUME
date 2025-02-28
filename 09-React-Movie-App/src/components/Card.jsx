import React from "react";
import { Link } from "react-router";

const Card = ({ data, mediaType, index, Trending }) => {
  // console.log(data);

  //nullish coalescing operator // It only checks for null or undefined
  const media_Type = data.media_type ?? mediaType;

  return (
    <Link
      to={"/" + media_Type + "/" + data?.id}
      className="flex-shrink-0 overflow-hidden max-w-[182px] w-full md:max-w-[216px]"
    >
      <div className=" relative w-full rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200 opacity-95">
        <img
          className="w-full h-[260px] md:h-[310px] object-cover"
          src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
          alt="No Image Found!"
        />

        {Trending && (
          <p className="text-sm absolute top-2 bg-neutral-200 opacity-70 px-2 py-0.5 rounded-r-full text-black">
            #{index + 1} Trending
          </p>
        )}

        <div className="px-2 py-1.5 flex flex-col gap-1 bg-neutral-200 opacity-75 text-black font-semibold absolute w-full text-[11px] md:text-xs bottom-0">
          <div className="flex items-center justify-between">
            <p className="text-xs md:text-sm font-bold">
              {data?.title || data?.name || data?.original_name}
            </p>
            <p>{data.media_type?.toUpperCase()}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>{data?.first_air_date || data?.release_date}</p>
            {data?.vote_average ? (
              <p>Rating: {Number(data?.vote_average).toFixed(1)}</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
