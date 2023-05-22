import React from "react";
import Image01 from "../images/smart01.png";
import Image02 from "../images/smart02.png";
import Image03 from "../images/smart03.png";
import Image04 from "../images/smart04.png";
import DevicesImage from "../images/smart-devices.png";
import SmarthomeBGImage from "../images/smarthome_bg.png";
import HomeIcon from "../images/home_icon.png";
import HomeQR from "../images/home_qr.png";
 
function SmartHome() {
    return (
        <section className="smart-home">
            <div className="smart-home__title-container">
                <h2 className="smart-home__title">Умный дом</h2>
                <p className="smart-home__subtitle">Сделайте Станцию центром умного дома{'\n'}с Алисой — и он будет слушаться вашего голоса</p>
            </div>
            <div className="smart-home__features">
                <div className="smart-home__feature" style={{backgroundImage: `url(${Image01})`}}>
                    <h3 className="smart-home__feature-title smart-home__feature-title_type_first">Устройства Zigbee</h3>
                    <p className="smart-home__feature-text">Встроенный хаб управления Zigbee позволяет таким устройствам общаться с колонкой напрямую, без интернета — и быстрее реагировать на ваши команды.</p>
                    <button type="button" className="smart-home__feature-button">Посмотреть</button>
                    <a href="#" className="smart-home__feature-link">Все поддерживаемые категории устройств</a>
                </div>
                <div className="smart-home__feature" style={{backgroundImage: `url(${Image02})`}}>
                    <h4 className="smart-home__feature-title">Экономия электроэнергии</h4>
                    <p className="smart-home__feature-text">Датчики и другие устройства работают от батареек,{'\n'}которых хватает надолго</p>
                </div>
                <div className="smart-home__feature" style={{backgroundImage: `url(${Image03})`}}>
                    <h4 className="smart-home__feature-title">Простое подключение</h4>
                    <p className="smart-home__feature-text">Достаточно{'\n'}попросить: «Алиса,{'\n'}найди устройство»</p>
                    <a href="#" className="smart-home__feature-link">Подробнее</a>
                </div>
                <div className="smart-home__feature" style={{backgroundImage: `url(${Image04})`}}>
                    <h4 className="smart-home__feature-title">Быстрое управление</h4>
                    <p className="smart-home__feature-text">Команды{'\n'}от колонки передаются устройствам напрямую,{'\n'}не через облако</p>
                    <div className="smart-home__feature-question">
                        <span className="smart-home__feature-span">—</span>
                        <p className="smart-home__feature-question-text">Алиса, какая температура в квартире?</p>
                    </div>
                </div>
            </div>

            <div className="smart-home__devices">
                <div className="smart-home__devices-container">
                    <h3 className="smart-home__devices-title">Тысячи других устройств</h3>
                    <button type="button" className="smart-home__devices-button">Посмотреть</button>
                </div>
                <p className="smart-home__devices-text">Работает по Wi-Fi{'\n'}с лампочками, чайниками, пылесосами и другими устройствами самых разных производителей.</p>
                <div className="smart-home__devices-image-container">
                    <img className="smart-home__devices-image" src={DevicesImage} alt="умные устройства" />
                </div>
            </div>

            <div className="smart-home__info" style={{backgroundImage: `url(${SmarthomeBGImage})`}}>
                <div className="smart-home__info-container">
                    <div className="smart-home__info-left">
                        <div className="smart-home__info-text">
                            <h4 className="smart-home__info-title">Включайте{'\n'}из приложения в одно касание</h4>
                            <p className="smart-home__info-paragraph">Детальная настройка и удобные виджеты — в отдельном приложении Дом с Алисой</p>
                        </div>
                        <div className="smart-home__info-download">
                            <p className="smart-home__info-download-text">Скачайте{'\n'}Дом с Алисой</p>
                            <div className="smart-home__info-download-icon" style={{backgroundImage: `url(${HomeIcon})`}} />
                            <img className="smart-home__info-download-qr" src={HomeQR} alt="qr-код на загрузку" />
                        </div>
                    </div>
                    <div className="smart-home__info-alisa">
                        <p className="smart-home__info-alisa-text">Алиса,{'\n'}включи свет&#178;</p>
                        <span className="smart-home__info-alisa-span">—</span>
                    </div>
                    <div className="smart-home__info-right">
                        <div className="smart-home__info-text">
                            <h4 className="smart-home__info-title">Управляйте голосом</h4>
                            <p className="smart-home__info-paragraph">Просто говорите Алисе, что делать, — и она будет включать свет и выполнять{'\n'}другие команды</p>
                        </div>
                        <div className="smart-home__info-text">
                            <h4 className="smart-home__info-title">Создавайте сценарии</h4>
                            <p className="smart-home__info-paragraph">Например, чтобы по одной команде гас свет, затихал пылесос и включались звуки леса</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmartHome;