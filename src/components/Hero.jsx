import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  // FaFacebookSquare,
} from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section
      id="#home"
      className="min-h-screen  flex flex-col py-10 md:flex-row gap-8 text-center justify-center items-center "
    >
      <div className="flex-1 flex justify-center ml-8 md:justify-end">
        <img
          src={hero}
          alt="Hero Pic"
          className="md:w-11/12 w-[800px] pr-12 md:pr-0"
        />
      </div>
      <div className="flex-1 flex flex-col items-center md:items-start">
        <div className="text-center tracking-widest pr-4 md:text-left">
          <h1 className="text-teal-500 font-bold text-5xl md:leading-normal leading-10">
            Hello! <br />
          </h1>
          <h2 className="text-white tracking-widest font-bold lg:text-5xl text-2xl md:leading-normal leading-10 mt-2">My Name is</h2>
          <h2 className="text-white tracking-widest font-bold lg:text-5xl text-4xl md:leading-normal leading-10 lg:mt-2 " > <span className="text-teal-500">Ali </span>Nawaz</h2>
          <h1 className="text-lg mt-2 md:text-2xl leading-5 md:leading-normal font-bold text-gray-300">
            <TypeAnimation
              sequence={[
                'Video Editor',
                1000,
                'Java Developer',
                1000,
                'Graphics Designer',
                1000,
                'Freelancer',
                1000,
                'Communicator',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
        </div>
        <div className="flex flex-col items-center md:items-start mt-8">
          <button className="bg-teal-500 p-3 px-4 rounded-md text-white font-bold mb-4">
            Connect Me
          </button>
          <div className="flex gap-4 text-3xl text-gray-400">
            {/* <FaFacebookSquare className="hover:text-white cursor-pointer" /> */}
         <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer"><FaLinkedin className="hover:text-white cursor-pointer" /></a>   
          <a href="https://github.com/" target="-blank" rel="noreferrer"><FaGithubSquare className="hover:text-white cursor-pointer" /></a>  
           <a href="https://www.instagram.com/"  target="-blank" rel="noreferrer"><FaInstagramSquare className="hover:text-white cursor-pointer" /></a> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
