import React from "react";
import DesignVideo from "../video/1440.webm";
 
function Design() {
    return (
        <section className="design">
          <h2 className="design__title">Дизайн</h2>
          <video src={DesignVideo} className="design__video" autoPlay loop />
        </section>
    )
}

export default Design;

