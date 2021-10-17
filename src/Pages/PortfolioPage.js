import { useContext } from "react"
import { DataContext } from "./DataContext"
import NavButton from "../Components/NavButton"
const PortfolioPage = () => {
    //let match = useRouteMatch();
    const { data } = useContext(DataContext)  

    return (
        <main className="main" >
            <h1 className="sr__only">List of projects completed</h1>
            <ul className="projects__lists" >
                {data.map(item => {
                    return <li className="project__list__item" key={item.id}>
                        <picture className="project__img__container">
                            <source media="(min-width: 1080px)"
                                srcSet={item.images.desktop[1]} />
                            <source media="(min-width: 620px)"
                                srcSet={item.images.tablet[1]} />
                            <img className="hero__img" src={item.images.mobile[1]} alt="" />
                        </picture>
                        <div className="project__details">
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
    )
}
export default PortfolioPage