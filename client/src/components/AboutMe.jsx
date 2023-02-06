import article1 from '../assets/article1.jpg'
import article2 from '../assets/article2.jpg'
import article3 from '../assets/article3.jpg'
import article4 from '../assets/article4.jpeg'
import bgAboutMe from '../assets/backgroundAboutMe.png'

import "../styling/aboutme.css";

const AboutMe = () => {
    return (
        <div className="component-about-me">
            <img className="svg-icon" alt="" loading="eager" src={bgAboutMe} />
            <main className="aboutmecontent">
                <img className="img-1-icon" alt="" src={article1} />
                <img className="img-2-icon" alt="" src={article3} />
                <img className="img-3-icon" alt="" src={article2} />
                <img className="img-4-icon" alt="" src={article4} />
                <h3 className="ivn-alexis-oiivares">Iván Alexis OIivares Olavarría</h3>
                <p className="hi-im-ivn-container">
                    <span className="hi-im-ivn">{`Hi, I’m Iván, young man of 24 years old and I’ve been `}</span>
                    <span className="hi-im-ivn">
                        working in web development for less than a year as a
                    </span>
                    <span className="hi-im-ivn">web developer.</span>
                    <span className="hi-im-ivn">&nbsp;</span>
                    <span className="hi-im-ivn">{`When I was 18 I discovered how much I actually like `}</span>
                    <span className="hi-im-ivn">
                        designing, so I started to explore this side of the
                    </span>
                    <span className="hi-im-ivn">programming.</span>
                    <span className="hi-im-ivn">&nbsp;</span>
                    <span className="hi-im-ivn">
                        I started my computer engineer career the next year
                    </span>
                    <span className="hi-im-ivn">
                        and I wanted to be Web Developer, Front End mainly
                    </span>
                    <span className="hi-im-ivn">and then I discovered React.</span>
                    <span className="hi-im-ivn">&nbsp;</span>
                    <span className="hi-im-ivn">
                        And now I’m happy looking actively for a job as a Front
                    </span>
                    <span className="hi-im-ivn">End Dev.</span>
                </p>
            </main>
            <header className="titlediv">
                <h3 className="this-is-me">This is me</h3>
                <h3 className="being-the-happiest">being the happiest human being</h3>
            </header>
        </div>
    );
};

export default AboutMe;
