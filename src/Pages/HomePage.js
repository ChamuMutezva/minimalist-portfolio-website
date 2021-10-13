//import HomeMain from "../Layouts/HomeMain"
import Hero from "../Components/Hero"
import AboutMe from "../Components/AboutMe"
import Aside from "../Layouts/Aside"
const HomePage = () => {
    return (
        <main className="main">
            <Hero />
            <AboutMe />
            <Aside />
        </main>
    )
}
export default HomePage