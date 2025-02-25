import React, { useState, useEffect } from "react";
import { GiCrossMark } from "react-icons/gi";
import LineIcon from "./LineIcon";
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isOpen] = useState(false);
    useEffect(() => {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = "smooth";
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true);
                setShowScrollButton(true);
            } else {
                setSticky(false);
                setShowScrollButton(false);
            }
        }
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const menuItems = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];
    const [open, setOpen] = useState(false);

    return (
        <div>
            <nav id="home">
                <header className={` self-stretch flex items-center justify-between px-4 lg:px-0 top-0 fixed left-0 z-50 right-0 ${sticky ? "bg-white/60  duration-1000" : ""}`}>
                    <div className="text-white lg:px-8 sm:px-0 font-bold text-xl md:text-2xl  lg:text-2xl">
                        <h1 className={`p-2 ${sticky ? " text-gray-950" : " "} -z-10 ${isOpen ? "-z-20" : ""}`}>
                Ali <span className={`text-teal-500 ${sticky ? "text-teal-800" : ""}`}>Nawaz</span>
                        </h1>
                    </div>
                    <div className="hidden lg:flex">
                        <ul className={`flex text-lg gap-4 font-semibold text-gray-900 py-4 px-6 rounded-bl-full ${sticky ? "bg-white/0 " : "bg-white"}`}>
                            {menuItems.map((items, i) => (
                                <li key={i} className="px-6 hover:text-teal-800">
                                    <a href={items.link}>{items.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className="lg:hidden">
                        {!open ?
                            (<div onClick={() => setOpen(!open)} className={`items-center flex z-30 cursor-pointer text-white text-2xl top-8 ${sticky ? " text-black" : ""} `}> <LineIcon /></div>) :
                            (
                                <GiCrossMark onClick={() => setOpen(!open)} className="text-gray-950 cursor-pointer  right-9 md:right-8 fixed z-10" />
                            )}
                        <>
                            <div className={`bg-white  top-0 right-0 fixed  w-96 h-full py-20
            ${open ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>


                                {
                                    menuItems.map((link, i) => (
                                        <div
                                            onClick={() => setOpen(!open)}
                                            key={i}
                                            className={`${open ? ' my-10' : 'my-10'
                                                }`}
                                        >
                                            <a href={link.link} className={`hover:text-cyan-600 duration-200
                                        ${open ? 'text-gray-950 font-extrabold flex flex-col items-center ' : 'text-gray-950 flex flex-col items-center'}`}>{link.name}</a>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    </div>
                </header>


            </nav>
            {showScrollButton && (
                <div className={`fixed bottom-10 right-10 bg-gray-600  px-4 py-2 font-extrabold text-2xl rounded-md cursor-pointer text-teal-500 ${sticky ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500`} onClick={scrollToTop}>
                    ^
                </div>
            )

            }

        </div>
    )
}

export default Navbar