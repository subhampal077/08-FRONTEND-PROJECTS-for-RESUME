import React from "react";
import { IoMdClose } from "react-icons/io";
import { useFetchApi } from "../hooks/useFetchApi";

const VideoPlay = ({ mediaType, id, close }) => {
  //   console.log(mediaType, id);

  const videoData = useFetchApi(`/${mediaType}/${id}/videos`, "Video");
  //   console.log(videoData);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-neutral-900 bg-opacity-90 z-50 flex items-center justify-center">
      <div className="bg-black w-full h-[45vh] md:h-[70vh] max-w-screen-lg aspect-video rounded-md overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${videoData[0]?.key}`}
          className="w-full h-full"
        />
      </div>
      <IoMdClose
        onClick={close}
        size={32}
        className="absolute bottom-28 md:bottom-14 cursor-pointer hover:rotate-90 transition-all border-2"
      />
    </div>
  );
};

export default VideoPlay;
