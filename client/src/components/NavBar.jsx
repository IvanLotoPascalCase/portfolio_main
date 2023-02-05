import React from 'react'

import { SiInstagram, SiLinkedin, SiGithub } from 'react-icons/si'
import { GiHamburgerMenu } from 'react-icons/gi'

function NavBar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3
                bg-gradient-to-tr from-primary via-primary-400 to-primary-300">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="font-extrabold font-pf-dp text-3xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-f-primary"
                            href="#pablo"
                        >
                            Loto's Portfolio
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <GiHamburgerMenu></GiHamburgerMenu>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-f-primary hover:text-f-secondary"
                                    href="https://www.linkedin.com/in/iolvrslot0/"
                                    target="_blank"
                                >
                                    <SiLinkedin className="text-lg"></SiLinkedin> <span className="ml-2">LinkedIn</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-f-primary hover:text-f-secondary"
                                    href="https://www.instagram.com/lotussseater/"
                                    target="_blank"
                                >
                                    <SiInstagram className="text-lg"></SiInstagram><span className="ml-2">Instagram</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-f-primary hover:text-f-secondary"
                                    href="https://github.com/IvanLotoPascalCase"
                                    target="_blank"
                                >
                                    <SiGithub className="text-lg"></SiGithub> <span className="ml-2">GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar