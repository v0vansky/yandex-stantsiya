import React from "react";
import Logo from "../images/YAStation_logo.png"
import BgImage from "../images/purchase_bg.png"
 
function Purchase() {
    return (
        <section className="purchase" style={{backgroundImage: `url(${BgImage})`}}>
            <div className="purchase__container">
                <img className="purchase__logo" src={Logo} alt="Я Станция лого" />
                <h2 className="purchase__title">Умная колонка второго поколения</h2>
                <button type="button" className="purchase__button purchase__button_type_buy">Купить за 16 990 ₽*</button>
                <button type="button" className="purchase__button purchase__button_type_compare">Сравнить с другими</button>
            </div>
        </section>
    )
}

export default Purchase;