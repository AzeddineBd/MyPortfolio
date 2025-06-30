import { useState } from "react";

const dataSlider = [
  {
    id: 1,
    title: "Title",
    description: "Description",
    image:
      "https://plus.unsplash.com/premium_photo-1750355751988-ac2f0cbc335c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Title2",
    description: "Description",
    image:
      "https://cdn.prod.website-files.com/5e593fb060cf877cf875dd1f/624f1135bd83b9172f33b35a_6234f3abe2198da0233edb3b_1-developer-webflow-template.png",
  },
  {
    id: 3,
    title: "Title3",
    description: "Description",
    image:
      "https://wrapmarketusercontent.com/assets/items/thumb/39a174f5663946660cac4ad5976412f1cc5593e23ec06b7c65b05c97b15a4cc2.webp?v=1728672472",
  },
  {
    id: 4,
    title: "Title4",
    description: "Description",
    image:
      "https://wrapmarketusercontent.com/assets/items/thumb/39a174f5663946660cac4ad5976412f1cc5593e23ec06b7c65b05c97b15a4cc2.webp?v=1728672472",
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
      <section className="flex flex-grow relative justify-center items-center bg-black">
        <button
          onClick={handlePrev}
          className="absolute left-4 text-white text-4xl z-30"
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
                className="md:w-[40vw] md:h-[44vh] w-[82vw] h-[32vh] object-cover rounded-lg shadow-2xl hover:rotate-2 transform duration-300"
              />

              {index === activeIndex && (
                <div className="text-center mt-4 text-white">
                  <h2 className="text-2xl font-bold">{data.title}</h2>
                  <p className="text-gray-300">{data.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-4 text-white text-4xl z-30"
        >
          ›
        </button>
      </section>
    </>
  );
};

export default Projects;
