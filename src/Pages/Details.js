import { useLocation } from 'react-router'
import { useContext } from "react"
import { DataContext } from "./DataContext"
import NavButton from '../Components/NavButton'
const DetailsPage = () => {
    const location = useLocation()
    const pathname = location.pathname.split(':')
    const lastitem = pathname[pathname.length - 1]
    const { data } = useContext(DataContext)
    const targetData = data[lastitem - 1]
    console.log(data)
    console.log(lastitem)
    console.log(targetData)
    return (
        <main className="main">
            <h2 className={`sr__only`}>A detailed analysis of the {targetData.project} project</h2>
            <div className="heroes__item">
                <picture className="heroes__img__container">
                    <source media="(min-width: 1080px)"
                        srcSet={targetData.heroes.desktop[1]} />
                    <source media="(min-width: 620px)"
                        srcSet={targetData.heroes.tablet[1]} />
                    <img className="hero__img heroes__img" src={targetData.heroes.mobile[1]}
                     alt={`overview presentation of the ${targetData.project} project`} />
                </picture>
                <div className="details__content">
                    <div className="details__content__sub">
                        <h2 className="details__content__title">{targetData.project}</h2>
                        <p className="details__content__content">{targetData.description}</p>

                        <p className="details__techs__summary">
                            <strong>{targetData.title}</strong>
                            <strong>{targetData.techs}</strong>
                        </p>

                        <NavButton title="view project"
                            href={targetData.website}
                            target="_blank"
                            rel="noreferrer" />

                    </div>
                </div>
            </div>
            <div className="details__more">
                <h2 className="details__more--title">
                    Project Background
                </h2>
                <p className="details__more__content">
                    {targetData.background}
                </p>
                <h3 className="details__preview__title">
                    Static Preview
                </h3>
                <picture className="details__preview__img__container">
                    <source media="(min-width: 1080px)"
                        srcSet={targetData.preview.desktop[1]} />
                    <source media="(min-width: 620px)"
                        srcSet={targetData.preview.tablet[1]} />
                    <img className="hero__img details__preview__img"
                     src={targetData.preview.mobile[1]}
                      alt={`the heading section static presentation of the ${targetData.project}`} />
                </picture>
                <picture className="details__preview__img__container">
                    <source media="(min-width: 1080px)"
                        srcSet={targetData.preview.desktop[3]} />
                    <source media="(min-width: 620px)"
                        srcSet={targetData.preview.tablet[3]} />
                    <img className="hero__img details__preview__img"
                     src={targetData.preview.mobile[3]}
                     alt={`the main and overrall static presentation of the ${targetData.project}`}/>
                </picture>
            </div>
        </main>

    )
}
export default DetailsPage