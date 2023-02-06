import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import AboutMe from "../components/AboutMe.jsx";

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    )
}

export default HomePage