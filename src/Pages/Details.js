import { useLocation } from 'react-router'
import { useRouteMatch, Link } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import { DataContext } from "./DataContext"
//import NavButton from '../Components/NavButton'
import Previous from '../images/icons/arrow-left.svg'
import Next from '../images/icons/arrow-right.svg'

const DetailsPage = () => {
    const location = useLocation()
    // result of above: Object { pathname: "/details/:1", search: "", hash: "", state: undefined, key: "ipksi1" }
    // objective: to use the last digit of the pathname for dynamic routing =>  pathname: "/details/:1"
    // use string method to split the pathname string and store value in lastItem
    // the last item gives us the id of the route - but what we want finally is the index of the data 
    // corresponding to the id. In this case id:1 === index:0 , id:2 === index:1
    // (Number(pathname[pathname.length - 1]) - 1) : the value of the array for the last item then 
    // subtract 1 to get the actual index
    const pathname = location.pathname.split(':') // gives an array of 2
    const [lastItem, setlastItem] = useState(Number(pathname[pathname.length - 1]) - 1)
    const { data } = useContext(DataContext)
    const [targetData, setTargetData] = useState(data[lastItem])
    let match = useRouteMatch();

    const handlePrevious = () => {

        if (lastItem > 0) {
            setlastItem(() => lastItem - 1)
            setTargetData(data[lastItem])
        } else {
            setlastItem(data.length - 1)
            setTargetData(data[lastItem])
        }

        console.log(lastItem)
    }

    const handleNext = () => {

        console.log(lastItem)
        console.log(data.length)

        if (lastItem < data.length - 1) {
            setlastItem(lastItem + 1)
            setTargetData(data[lastItem])
        } else {
            setlastItem(0)
            setTargetData(data[lastItem])
        }
        console.log(lastItem)
    }

    useEffect(() => {

    }, [lastItem, targetData])


    return (
        <main className="main" aria-live="polite">
            <h1 className={`sr__only`}>A detailed analysis of the {targetData.project} project</h1>
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

                        <a className="nav__shared--btn"
                            href={targetData.website}
                            target="_blank"
                            rel="noreferrer">View website</a>

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
                <div className="preview__images">
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
                            alt={`the main and overrall static presentation of the ${targetData.project}`} />
                    </picture>

                    <div className="project__nav">
                        <div className="previous__project">
                            <Link to={`${match.url}/:${lastItem}`} onClick={handlePrevious}>
                                <img src={Previous} alt="" />
                                <span className="sr__only">Previous project</span>
                            </Link>


                            <h3>{targetData.previous}</h3>
                            <p>Previous project</p>
                        </div>
                        <div className="next__project">
                            <Link to={`${match.url}/:${targetData.id}`} onClick={handleNext}>
                                <img src={Next} alt="" />
                                <span className="sr__only">next project</span>
                            </Link>
                            <h3>{targetData.next}</h3>
                            <p>Next project</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
export default DetailsPage