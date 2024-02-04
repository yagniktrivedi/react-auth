import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTriler";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/UGc5Tzz19UY?si=BsY9mARzeI8PcZn8" +
          trailerVideo?.key +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
