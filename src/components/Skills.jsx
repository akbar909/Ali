import React from 'react';
import figma from "../assets/figma.png"
import html from '../assets/html.png'
// import tailwind from '../assets/tailwind.png'
// import Javascript from '../assets/javascript.png';
import java from '../assets/java.png'
import canva from '../assets/canva.jpg'
const Skills = () => {
  return (
    <div id='skills' className="container mx-auto px-6 lg:px-10 py-16">
      <h1 className="text-4xl font-bold text-center text-white mb-8">My <span className='text-teal-500'>Skills</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <img src={figma} alt='figma' className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Figma</h2>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: '60%' }}></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <img src={canva} alt='canva' className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Canva</h2>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: '95%' }}></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <img src={html} alt='html' className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Html</h2>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <img src={tailwind} alt='figma' className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Css/Tailwind Css</h2>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: '90%' }}></div>
          </div>
        </div> */}
        {/* <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <img src={Javascript} alt='javascript' className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Javascript</h2>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: '70%' }}></div>
          </div>
        </div> */}
        <div className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
          <img src={java} alt='java' className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-white mb-2">Java</h2>
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-2" style={{ width: '70%' }}></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;