import React from "react";
import video from "../images/travel-vid.mp4";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
    <div className="video">
      <h4>Tours</h4>
      <div className="player">
        <ReactPlayer controls loop url={video} />
        <p>
          Taking a step toward touring and traveling is like opening a door to a
          world beyond the familiar. It's not just about reaching new
          places—it's about discovering new parts of yourself. Whether it's a
          solo trip to clear your head or a group adventure to make memories,
          travel nudges you out of your comfort zone and into stories you'll
          tell for a lifetime. One decision, one packed bag, and suddenly, the
          world feels wide open.
        </p>
        <NavLink to={"/travel"} style={{ textDecoration: "none" }}>
          <button className="hero-btn btn-3">Visit</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Video;
