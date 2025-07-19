import { useState } from "react";

// Icons
import { IoMdArrowUp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const dataSlider = [
  {
    id: 1,
    title: "Weather App – Application météo interactive",
    description:
      "Application météo responsive avec recherche par ville, développée avec React, API météo et Tailwind CSS. Interface fluide et effets visuels modernes.",
    tech: "React, JavaScript, API OpenWeather, Tailwind CSS",
    image: "/assets/project2.jpg",
    url: "https://azeddinebd.github.io/weather_App/",
    github: "https://github.com/AzeddineBd/weather_App",
  },
  {
    id: 2,
    title: "E-Commerce – Mini site marchand moderne",
    description:
      "Mini site marchand avec affichage des produits, panier interactif et gestion d’état via React et Context API.",
    tech: "React, JavaScript, Context API, CSS Modules",
    image: "/assets/project1.png",
    url: "https://glittery-pudding-cf66c5.netlify.app/",
    github: "https://github.com/AzeddineBd/E-commerce",
  },

  {
    id: 2,
    title: "Hero Section – Animation GSAP",
    description:
      "Hero section avec animation GSAP, intégration de texte et images, responsive design. Utilisation de GSAP pour des animations fluides et dynamiques.",
    tech: "HTML, GSAP, JavaScript, CSS",
    image: "/assets/project3.png",
    url: "https://spiffy-monstera-1b693b.netlify.app/",
    github: "https://github.com/AzeddineBd/heroSection",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + dataSlider.length) % dataSlider.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % dataSlider.length);
  };

  const getPositionClass = (index) => {
    if (index === activeIndex) return "z-20 scale-110";
    if (index === (activeIndex - 1 + dataSlider.length) % dataSlider.length)
      return "z-10 md:-translate-x-70 -translate-x-10 opacity-60 scale-90";
    if (index === (activeIndex + 1) % dataSlider.length)
      return "z-10 md:translate-x-70 translate-x-10 opacity-60 scale-90";
    return "hidden";
  };

  return (
    <>
      <section className="flex flex-grow relative justify-center items-center bg-[--color-bg]">
        <button
          onClick={handlePrev}
          className="absolute left-4 text-[var(--color-text)] text-6xl cursor-pointer z-30"
        >
          ‹
        </button>

        <div className="relative flex justify-center items-center w-full max-w-5xl h-[500px]">
          {dataSlider.map((data, index) => (
            <div
              key={data.id}
              className={`absolute transition-all duration-500 ease-in-out transform ${getPositionClass(
                index
              )}`}
            >
              <img
                src={data.image}
                alt={data.title}
                className="md:w-[40vw] md:h-[44vh] w-[82vw] h-[32vh] object-cover rounded-t-lg shadow-2xl transform duration-300"
              />

              {index === activeIndex && (
                <div className="text-center bg-[var(--color-bg-seconde)] md:w-[40vw] w-[82vw] py-4 px-14 rounded-b-lg shadow-2xl text-[var(--color-text)]">
                  <h2 className="text-2xl font-bold mb-4">{data.title}</h2>
                  <p className="text-[var(--color-subtext))">
                    {data.description}
                  </p>
                  <p className="font-semibold my-4">{data.tech}</p>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      className="text-2xl flex items-center justify-center gap-2 hover:scale-108 transform duration-300"
                      target="_blank"
                      href={data.url}
                    >
                      Visit <IoMdArrowUp className="rotate-45" />
                    </a>
                    <a
                      className="text-2xl flex items-center justify-center gap-2 hover:scale-108 transform duration-300"
                      target="_blank"
                      href={data.github}
                    >
                      Code <FaGithub />
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 text-[var(--color-text)] text-6xl cursor-pointer z-30"
        >
          ›
        </button>
      </section>
    </>
  );
};

export default Projects;
