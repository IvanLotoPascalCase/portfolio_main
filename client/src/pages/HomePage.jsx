import NavBar from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Separation from "../components/Separation.jsx";

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Hero></Hero>
            <Separation></Separation>
            <Skills></Skills>
        </div>
    )
}

export default HomePage