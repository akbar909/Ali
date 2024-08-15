import React, { useState } from 'react';
import thumbnail1 from '../assets/thumbnail1.jpg';
import fullImage1 from '../assets/project1.jpg';
import thumbnail2 from '../assets/thumbnail2.jpg';
import fullImage2 from '../assets/project2.jpg';
import thumbnail3 from '../assets/thumbnail3.jpg';
import fullImage3 from '../assets/projesct3.jpg';


const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      thumbnail: thumbnail1,
      image: fullImage1,

    },
    {
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      thumbnail: thumbnail2,
      image: fullImage2,

    },

    {
      title: 'Project 3',
      description: 'This is a description of Project 3.',
      thumbnail: thumbnail3,
      image: fullImage3,

    },
  ];

  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div id='projects' className="container mx-auto px-6 lg:px-10 py-16">
      <h1 className="text-4xl font-bold text-center text-white mb-8">My <span className='text-teal-500'>Projects</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 text-center">
            <img src={project.thumbnail} alt={project.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <button onClick={() => openModal(project.image)} className="bg-teal-500 hover:bg-teal-300 hover:text-gray-950 text-white font-bold py-2 px-4 rounded">
              View Project
            </button>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button onClick={closeModal} className="absolute animate-pulse border-2 top-2 right-2 text-white px-2 bg-black text-2xl">&times;</button>
            <img src={modalImage} alt="Project" className="w-[450px] h-[450px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
