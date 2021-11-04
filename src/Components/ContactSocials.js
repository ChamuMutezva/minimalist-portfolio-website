import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactComponent as Github } from "../images/icons/github.svg"
import { ReactComponent as Twitter } from "../images/icons/twitter.svg"
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg"
const ContactSocials = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.to(".social__icons",
            {
                scrollTrigger: {
                    trigger: ".social__icons",
                    toggleActions: "restart pause reverse none",
                },
                ease: "back",
                duration: 3,
                rotation: 360,
                stagger: 0.5,
            })

    }, [])

    return (
        <div className="social__contact">
            <ul className="social__contact__list">
                <li className="social__contact__item">
                    <a className="social__link--btn contact__social__link--btn"
                        href="https://github.com/ChamuMutezva"
                        target="_blank"
                        rel="noreferrer">
                        <Github title="My github profile page"
                             className="social__icons"
                            aria-label="All the projects that i have done on my github page" />
                    </a>
                </li>
                <li className="social__contact__item">
                    <a className="social__link--btn contact__social__link--btn"
                        href="https://twitter.com/ChamuMutezva"
                        target="_blank"
                        rel="noreferrer">
                        <Twitter title="visit me on twitter"
                             className="social__icons"
                            aria-label="Lets chat on twitter" />
                    </a>
                </li>
                <li className="social__contact__item">
                    <a className="social__link--btn contact__social__link--btn"
                        href="https://www.linkedin.com/in/chamumutezva/"
                        target="_blank"
                        rel="noreferrer">
                        <Linkedin title="linkedin page"
                             className="social__icons"
                            aria-label="Lets chat on linkedin" />
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default ContactSocials
