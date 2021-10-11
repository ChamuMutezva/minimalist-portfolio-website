import AboutMeMobile from '../images/homepage/mobile/image-homepage-profile.jpg'
import AboutMeTablet from '../images/homepage/tablet/image-homepage-profile.jpg'
import AboutMeDesktop from '../images/homepage/desktop/image-homepage-profile.jpg'
const AboutMe = () => {
    return (
        <div className="about__me">
            <div className="about__img__container">
                <picture>
                    <source media="(min-width: 1080px)"
                        srcSet={AboutMeDesktop} />
                    <source media="(min-width: 620px)"
                        srcSet={AboutMeTablet} />
                    <img className="about__img" src={AboutMeMobile} alt="" />
                </picture>
            </div>
            <div className="about__content">
                <div className="about__content__holder">
                    <h2 className="about__content__title">
                        About me
                    </h2>
                    <p className="about__content__content">
                        I’m a junior front-end developer looking for a new role in an exciting company.
                        I focus on writing accessible HTML, using modern CSS practices and writing clean
                        JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to
                        whatever tools are required. I’m based in London, UK, but I’m happy working remotely
                        and have experience in remote teams. When I’m not coding, you’ll find me outdoors.
                        I love being out in nature whether that’s going for a walk, run or cycling. I’d love
                        you to check out my work.
                    </p>
                    <a className="nav__shared--btn" href="/">
                        go to portfolio
                    </a>
                </div>
            </div>
        </div>
    )
}
export default AboutMe