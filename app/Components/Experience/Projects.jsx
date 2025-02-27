import React from "react";
import employeeMSImage from "../assets/hostit.png";
import bookMSImage from "../assets/matter js.png";

const projects = [
  {
    id: 1,
    name: "My Hostit",
    technologies: "MERN Stack",
    image: employeeMSImage,
  },
  {
    id: 2,
    name: "Matter js ",
    technologies: "MERN Stack",
    image: bookMSImage,
  },
  {
    id: 3,
    name: "Finter For Welder",
    technologies: "MERN Stack",
    image: "/finter.png",
  },
  {
    id: 4,
    name: "Guards",
    technologies: "MERN Stack",
    image: "/guards.png",
  },
  {
    id: 5,
    name: "Chatgpt Clone",
    technologies: "MERN Stack",
    image: "/chatgpt.png",
  },
  {
    id: 6,
    name: "Healet",
    technologies: "MERN Stack",
    image: "/healet.png",
  },
];
const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="contanier mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
transform transition-transform duration-300 hover:scale-105
"
              >
                <img
                  src={item.image}
                  alt=""
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="font-bold text-2xl mb-2">{item.name}</h3>
                <p className="text-gray-400 mb-4">{item.technologies}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
