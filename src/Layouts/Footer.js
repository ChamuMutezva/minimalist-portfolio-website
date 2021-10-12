import Logo from '../images/logo.svg'
import Github from '../images/icons/github.svg'
import Twitter from '../images/icons/twitter.svg'
import Linkein from '../images/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="logo__container footer__logo__container">
                    <img className="footer__logo" src={Logo} alt="my frontend portfolio" />
                </div>
                <nav className="footer__nav">
                    {/*Modal and navigation list items*/}
                    <div className={`footer__nav__list`}>
                        <ul className="footer__nav__list__items">
                            <li className="footer__nav__list__item">
                                <a className="footer__nav--item" href="/">Home</a>
                            </li>
                            <li className="footer__nav__list__item">
                                <a className="footer__nav--item" href="/">Portfolio</a>
                            </li>
                            <li className="footer__nav__list__item">
                                <a className="footer__nav--item" href="/">Contact me</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="social__list">
                    <ul className="social__list__items">
                        <li className="social__list__item">
                            <a href="./" aria-label="preview my work on github">
                                <img className="social__icons" src={Github} alt="" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social__list__item">
                            <a href="./" aria-label="lets connect on twitter">
                                <img className="social__icons" src={Twitter} alt="" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social__list__item">
                            <a href="./" aria-label="lets connect on linkein">
                                <img className="social__icons" src={Linkein} alt="" aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer