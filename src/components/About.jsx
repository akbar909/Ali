import React from "react";
import ali from '../assets/about1.png';
const About = () => {
    return (
        <section id="about" className="text-white px-8 py-16">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    About <span className="text-teal-500">Me</span>
                </h3>
                <p className="text-gray-400 my-3 text-lg">My Introduction</p>
                <div className="flex flex-col lg:flex-row-reverse  justify-between  items-center">
                    <div className="mb-6 lg:mb-0 lg:-mt-10">
                        <img src={ali} alt="about" className=" -z-10 lg:w-[2500px]" />
                    </div>
                    <div className="text-gray-300 lg:pl-12">
                        <p className="leading-7 px-4 lg:px-0  text-justify">
                            As an Undergraduate bachelor learner in Computer Systems Engineering, I am passionate about developing a strong
                            foundation in various aspects of technology. I have a keen interest in programming languages such as Java and C++
                            and continuously strive to enhance my skills and knowledge in these areas. Additionally, I am actively
                            learning graphic designing and Video Aditting to explore the creative side of technology and also I am a good Debator
                            and Well Communicator.
                        </p>
                        <div className="flex flex-row lg:ml-6 gap-7 mt-10">
                            <div className="flex flex-col items-center gap-2 text-center justify-center">
                                <h1 className="text-4xl font-bold text-teal-500 ">06<span className="text-teal-500" >+</span></h1>
                                <p className="text-gray-300">Months Experience</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 justify-center">
                                <h1 className="text-4xl font-bold text-teal-500">15<span className="text-teal-500" >+</span></h1>
                                <p className="text-gray-300">Completed Projects</p>
                            </div>
                            <div className="flex flex-col items-center gap-2 justify-center">
                                <h1 className="text-4xl font-bold text-teal-500">02<span className="text-teal-500" >+</span></h1>
                                <p className="text-gray-300">Companies Work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
