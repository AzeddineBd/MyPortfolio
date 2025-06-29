// Hooks
import { useRef } from "react";

// Icons
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const b_navRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    const heroTl = gsap.timeline();

    heroTl.from(".text2", {
      opacity: 0,
      scale: 0,
      duration: 1,
      ease: "power3.out",
    });
    heroTl.from(
      ".text1",
      { opacity: 0, x: -50, duration: 1, ease: "elastic.out" },
      "-=0.2"
    );
    heroTl.from(
      ".text3",
      { opacity: 0, x: 50, duration: 1, ease: "elastic.out" },
      "-=0.8"
    );

    tl.from(navRef.current, { opacity: 0, y: -50, duration: 1 });
    tl.add(heroTl, "+=0.2");
    tl.from(b_navRef.current, { opacity: 0, y: 50, duration: 1 }, "+=0.3");
  });

  return (
    <section className="h-screen w-full md:px-8 md:py-2 p-2">
      {/* Navbar */}
      <div ref={navRef} className="flex items-center justify-between">
        <h2 className="font-bold md:text-6xl text-4xl">BD</h2>
        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-gray-400 font-medium">
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-400 font-medium">
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {/* Hero */}
      <div ref={heroRef} className="flex items-center justify-center h-[80%]">
        <div className="relative ">
          <span className="text1 absolute md:top-[-12px] md:left-24 top-[-12px] left-12 md:text-xl text-md text-gray-400">
            I AM
          </span>
          <h1 className="text2 md:text-[12vw] text-8xl font-bold">BEDAR</h1>
          <span className="text3 absolute md:bottom-[-22px] md:right-8 bottom-[-22px] right-2 md:text-xl text-md text-gray-400">
            FRONTEND, DEVELOPER
          </span>
        </div>
      </div>

      <div ref={b_navRef} className="flex justify-between items-center">
        {/* Social Media */}
        <div className="text-gray-400 text-2xl flex flex-col space-y-4">
          <FaFacebook className="transition duration-300 hover:scale-110 cursor-pointer" />
          <FaGithub className="transition duration-300 hover:scale-110 cursor-pointer" />
          <FaLinkedin className="transition duration-300 hover:scale-110 cursor-pointer" />
        </div>
        {/* scroll */}
        <div className="flex flex-col items-center gap-6">
          <p className="rotate-90 text-gray-400">SCROLL</p>
          <div className="h-10 w-1 bg-gray-400 rounded-md"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
