import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'
import Github from '../images/icons/github.svg'
import Twitter from '../images/icons/twitter.svg'
import Linkein from '../images/icons/linkedin.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="logo__container footer__logo__container">
                    <Link to="/">
                        <img className="footer__logo" src={Logo} alt="my frontend portfolio" />
                    </Link>
                </div>
                <nav className="footer__nav">
                    {/*Modal and navigation list items*/}
                    <div className={`footer__nav__list`}>
                        <ul className="footer__nav__list__items">
                            <li className="footer__nav__list__item">
                                <Link to="/" className="footer__nav--btn">Home</Link>
                            </li>
                            <li className="footer__nav__list__item">
                                <Link to="/PortfolioPage" className="footer__nav--btn">Portfolio</Link>
                            </li>
                            <li className="footer__nav__list__item">
                                <Link to="/ContactPage" className="footer__nav--btn">Contact me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="social__list">
                    <ul className="social__list__items">
                        <li className="social__list__item">
                            <a href="./" className="social__link--btn" aria-label="preview my work on github">
                                <img className="social__icons" src={Github} alt="" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social__list__item">
                            <a href="./" className="social__link--btn" aria-label="lets connect on twitter">
                                <img className="social__icons" src={Twitter} alt="" aria-hidden="true" />
                            </a>
                        </li>
                        <li className="social__list__item">
                            <a href="./" className="social__link--btn" aria-label="lets connect on linkein">
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
