import NavButton from "../Components/NavButton"
const Aside = () => {
    return(
        <aside className="aside">
            <h3 className="aside__title">Interested in doing a project together?</h3>
            <div className="aside__divider"></div>
            <NavButton title="contact me" href="/ContactPage" />
        </aside>
    )
}
export default Aside