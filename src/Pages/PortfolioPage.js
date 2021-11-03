import { useContext, useEffect } from "react"
import { DataContext } from "./DataContext"
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavButton from "../Components/NavButton"
import Aside from "../Layouts/Aside"
const PortfolioPage = () => {

    const { data } = useContext(DataContext)
   
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        gsap.from(".gsap__load",
        {
            scrollTrigger: ".gsap__load",
            opacity: 0,
            duration: .5,
            delay: 1,
            stagger: 0.8,
            ease: "power4",
        })

    })
 

    return (
        <>
            <main className="main" >
                <h1 className="sr__only">List of projects completed</h1>
                <ul className="projects__lists" >
                    {/*Map the list of prejects with the general overview */}
                    {data.map(item => {
                        return <li className="project__list__item" key={item.id}>

                            <picture className="project__img__container gsap__load">
                                <source media="(min-width: 1080px)"
                                    srcSet={`${item.images.desktop[0]}, ${item.images.desktop[1]} 2x`} />
                                <source media="(min-width: 620px)"
                                    srcSet={`${item.images.tablet[0]}, ${item.images.tablet[1]} 2x`} />
                                <source media="(max-width: 619px)"
                                    srcSet={`${item.images.mobile[0]}, ${item.images.mobile[1]} 2x`} />
                                <img className="hero__img" src={`${item.images.mobile[0]}`} alt="" />
                            </picture>

                            <div className="project__details gsap__load">
                                <div className="project__details__content">
                                    <h2 className="project__title">{item.project}</h2>
                                    <p className="project__content">{item.description}</p>
                                    <NavButton title="view project"
                                        href={`/details/:${item.id}`}
                                    />

                                </div>
                            </div>

                        </li>
                    })}
                </ul>
            </main>
            <Aside />
        </>
    )
}
export default PortfolioPage