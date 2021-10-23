import { ReactComponent as Github } from "../images/icons/github.svg"
import { ReactComponent as Twitter } from "../images/icons/twitter.svg"
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg"
const ContactSocials = () => {
    return (
        <div className="social__contact">
            <ul className="social__contact__list">
                <li className="social__contact__item">
                    <a className="social__link--btn contact__social__link--btn" href="/">
                        <Github title="My github profile page"
                            aria-label="All the projects that i have done on my github page" />
                    </a>
                </li>
                <li className="social__contact__item">
                    <a className="social__link--btn contact__social__link--btn" href="/">
                        <Twitter title="visit me on twitter"
                            aria-label="Lets chat on twitter" />
                    </a>
                </li>
                <li className="social__contact__item">
                    <a className="social__link--btn contact__social__link--btn" href="/">
                        <Linkedin title="linkedin page"
                            aria-label="Lets chat on linkedin" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default ContactSocials