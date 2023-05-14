import React from "react";
import ExplosionSoundImage from "../images/ya_explosion_00.png";
import MultiroomImage from "../images/sound_01_multiroom.png";
import StereoImage from "../images/sound_02_stereo.png";
import EqImage from "../images/sound_03_eq.png"
 
function Sound() {
    return (
        <section className="sound">
          <div className="sound__container">
            <img className="sound__image-explosion" src={ExplosionSoundImage} alt="Внутреннее устройство станции"/>
            <h2 className="sound__title">Звук</h2>
            <p className="sound__subtitle">Слушайте любимую музыку{"\n"}с чистым объёмным звучанием,{"\n"}куда бы ни поставили колонку</p>
            <div className="sound__info">
              <h3 className="sound__info-title">Апериодическая решётка</h3>
              <p className="sound__info-text">Защищает звук от искажений при воспроизведении</p>
              <h3 className="sound__info-title">Room Correction</h3>
              <p className="sound__info-text">Подстраивает звучание под размеры и форму помещения</p>
              <h3 className="sound__info-title">30 Вт</h3>
            </div>
            
          </div>
          <div className="sound__features">
            <div className="sound__feature sound__feature_color_black">
              <img className="sound__feature-image" src={MultiroomImage} />
              <div className="sound__feature-info">
                <h3 className="sound__feature-name">Мультирум</h3>
                <span className="sound__feature-description">Если у вас несколько
  разных колонок</span>
                <p className="sound__feature-text"><a style={{textDecoration: 'underline'}}>Включите</a> одну песню сразу{"\n"}во всех комнатах — например, когда убираетесь в квартире.</p>
              </div>
            </div>
            <div className="sound__feature">
              <img className="sound__feature-image" src={StereoImage} />
              <div className="sound__feature-info">
                <h3 className="sound__feature-name">Стереопара</h3>
                <span className="sound__feature-description">Если есть две{"\n"}одинаковых колонки</span>
                <p className="sound__feature-text"><a style={{textDecoration: 'underline'}}>Соберите</a> из них стереопару —{"\n"}и слушайте музыку в полном объёме.</p>
              </div>
            </div>
            <div className="sound__feature">
              <img className="sound__feature-image" src={EqImage} />
              <div className="sound__feature-info">
                <h3 className="sound__feature-name">Эквалайзер</h3>
                <span className="sound__feature-description">Если хочется{"\n"}больше басов</span>
                <p className="sound__feature-text"><a style={{textDecoration: 'underline'}}>Настройте</a> звук в приложении Дом с Алисой — колонка будет звучать, как скажете.</p>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Sound;

