import { useState } from 'react'
import Logo from '../images/logo.svg'
import Hamburger from '../images/icons/hamburger.svg'
import Close from '../images/icons/close.svg'
const Header = () => {
    const [menu, setMenu] = useState(true)
    const handleClick = (evt) => {
        const btn = document.querySelector(".show__menu")
        const closeBtn = document.querySelector(".close__menu")
        closeBtn.classList.toggle("hide__btn")
        btn.classList.toggle("hide__btn")
        setMenu(!menu)

    }

    return (
        <header className="header">
            <div className="logo__container">
                <img className="logo" src={Logo} alt="my frontend portfolio" />
            </div>
            <nav className="nav" aria-label="main navigation">
                {/*Opening and closing the menu */}
                <div className="menu__control">
                    <button className="show__menu"
                        aria-label="open navigation"
                        aria-expanded="false"
                        onClick={handleClick}>

                        <img className="menu__img"
                            src={Hamburger}
                            alt="" />

                    </button>

                    <button className={`close__menu hide__btn`}
                        aria-label="close the navigation"
                        aria-expanded="true"
                        onClick={handleClick}>

                        <img className="menu__img"
                            src={Close}
                            alt="" />

                    </button>

                </div>
                {/* ---------------------------------*/}

                {/*Modal and navigation list items*/}
                <div className={`modal__container ${menu ? "hide__modal" : ""} `}>
                    <ul className="nav__list__items">
                        <li className="nav__list__item"><a href="/">Home</a></li>
                        <li className="nav__list__item"><a href="/">Portfolio</a></li>
                        <li className="nav__list__item"><a href="/">Contact me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header