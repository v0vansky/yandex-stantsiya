import React from "react";
import AlisaLogo from "../images/alisa_logo.svg";
 
function Alisa() {
    return (
        <section className="alisa">
            <div className="alisa__container">
                <h2 className="alisa__title">Алиса</h2>
                <img className="alisa__logo" src={AlisaLogo} alt="алиса лого" />
            </div>
            <p className="alisa__about">Голосовой помощник, который понимает вас, помогает в делах и знает, что вы любите</p>
            <p className="alisa__initial-word">— Алиса…</p>
            <ul className="alisa__requests">
                <li className="alisa__request">Включи музыку везде&#185;</li>
                <li className="alisa__request">Напомни погулять{'\n'}с собакой через полчаса</li>
                <li className="alisa__request">Поставь будильник{'\n'}на 7 утра</li>
                <li className="alisa__request">Приглуши свет&#178;</li> 
            </ul>
            <div className="alisa__whisper">
                <div className="alisa__whisper-icon" />
                <h3 className="alisa__whisper-title">Шёпот</h3>
                <p className="alisa__whisper-description">Когда все уснут, можно пошептаться. Для этого достаточно понизить голос — Алиса подхватит.</p>
            </div>
        </section>
    )
}

export default Alisa;