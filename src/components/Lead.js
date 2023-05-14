import React from "react";
import Station2 from "../images/midi_persp_corner_alice_on_black_shadow_off.png";
import DesignVideo from "../video/1440.webm";
import ExplosionSound from "../images/ya_explosion_00.png"
 
function Lead() {
    return (
        <section className="lead">
          <h1 className="lead__title">Новая Яндекс Станция</h1>
          <p className="lead__text">Умная колонка второго поколения с лаконичным дизайном и чистым звуком станет центром вашего умного дома с Алисой</p>
          <img className="lead__image" src={Station2} alt="Яндекс Станция 2го поколения"/>
        </section>
    )
}

export default Lead;