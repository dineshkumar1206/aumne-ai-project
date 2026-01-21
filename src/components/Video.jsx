import React from "react";
import "./Video.css";

const Video = ({
  src,
  poster,
  overlay = false,
  children,
  height = "100vh",
  className = "",
}) => {
  return (
    <div
      className={`video-wrapper ${className}`}
      style={{ height }}
    >
      <video
        className="video-bg"
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
      />

      {overlay && <div className="video-overlay" />}

      {children && (
        <div className="video-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Video;
