function Header() {
    return (
        <header className="header">
          <div className="header__logo" />
          <ul className='header__menu'>
            <li className="header__link">Алиса</li>
            <li className="header__link">Умные колонки</li>
            <li className="header__link">Яндекс ТВ</li>
            <li className="header__link">Умный дом</li>
          </ul>
          <button type='button' className='header__button'>Купить</button>
        </header>
    )
}
export default Header;