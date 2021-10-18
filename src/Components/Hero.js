import HeroMobile from '../images/homepage/mobile/image-homepage-hero.jpg'
import HeroTablet from '../images/homepage/tablet/image-homepage-hero.jpg'
import HeroDesktop from '../images/homepage/desktop/image-homepage-hero.jpg'
import DownArrows from '../images/icons/down-arrows.svg'
const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__img__container">
                <picture>
                    <source media="(min-width: 1080px)"
                        srcSet={HeroDesktop} />
                    <source media="(min-width: 620px)"
                        srcSet={HeroTablet} />
                    <img className="hero__img" src={HeroMobile} alt="" />
                </picture>
            </div>
            <div className="hero__content">
                <h1 className="hero__content__title">
                    Hey, I’m Alex Spencer and I love building beautiful websites
                </h1>
                <a className="btn" href="#about__me">
                    <div className="arrows__img__holder">
                        <img className="arrows__img" src={DownArrows} alt="" />
                    </div>
                    <span className="btn__text">About me</span>
                </a>
            </div>
        </div>
    )
}

export default Hero