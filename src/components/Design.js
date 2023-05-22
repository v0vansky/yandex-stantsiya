import React from "react";
import VideoMp4 from "../video/1440.mp4";
import VideoWebm from "../video/1440.webm";
/* import Video from "react-native-video"; */
 
function Design() {
    return (
        <section className="design">
          <h2 className="design__title">Дизайн</h2>
          <video
            className="design__video"
            autoPlay
            loop
            playsInline>
            <source src={VideoMp4} type="video/mp4" />
            <source src={VideoWebm} type="video/webm" />
          </video>
        </section>
    )
}

export default Design;

