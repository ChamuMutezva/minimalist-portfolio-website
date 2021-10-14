const NavButton = (props) => {
    return (
        <a className="nav__shared--btn"
            href={props.href}
            target={props.target}
            rel={props.rel}>
            {props.title}
        </a>
    )
}
export default NavButton