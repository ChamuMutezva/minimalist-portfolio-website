import Logo from '../images/logo.svg'
import Hamburger from '../images/icons/hamburger.svg'
import Close from '../images/icons/close.svg'
const Header = () => {
    const handleClick = () => {
        console.log('button')
    }
    return (
        <header>
            <div className="logo__container">
                <img src={Logo} alt="my frontend portfolio" />
            </div>
            <nav>
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
                <div className={`modal__container}`}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Contact me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header