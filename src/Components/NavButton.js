import { Link } from "react-router-dom"
const NavButton = (props) => {
    return (
        <Link to={props.href}
            className="nav__shared--btn"           
            target={props.target}
            rel={props.rel}>
            {props.title}
        </Link>
    )
}
export default NavButton