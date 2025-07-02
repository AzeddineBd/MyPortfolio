import { gsap } from "gsap";
import { useRef, useState } from "react";

function Btn() {
  const btnRef = useRef(null);
  const dayRef = useRef(null);
  const nightRef = useRef(null);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    gsap.to(btnRef.current, {
      duration: 2,
      x: !darkMode ? 0 : 32,
      ease: "elastic.out",
    });

    // transition opacity
    gsap.to(dayRef.current, {
      duration: 0.2,
      opacity: darkMode ? 0 : 1,
    });

    gsap.to(nightRef.current, {
      duration: 0.2,
      opacity: darkMode ? 1 : 0,
    });

    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className="relative w-14 h-6 flex items-center rounded-full p-1 overflow-hidden shadow-inner shadow-black/60 cursor-pointer"
      onClick={toggleDarkMode}
    >
      {/* Backgrounds */}
      <div
        ref={dayRef}
        className="absolute left-0 w-full h-full bg-[url('/assets/day.jpg')] bg-cover transition-opacity duration-500"
        style={{ opacity: 1, zIndex: 10 }}
      ></div>
      <div
        ref={nightRef}
        className="absolute left-0 w-full h-full bg-[url('/assets/night.jpg')] bg-cover transition-opacity duration-500"
        style={{ opacity: 0, zIndex: 10 }}
      ></div>
      {/* layer for shadow */}
      <div
        className="absolute inset-0 rounded-full shadow-inner shadow-black/40 z-10 pointer-events-none"
        style={{ boxShadow: "inset 0px 0px 1px 1px rgba(0, 0, 0, 0.2)" }}
      ></div>

      {/* Toggle button */}
      <div
        ref={btnRef}
        className={`w-4 h-4 ${
          darkMode
            ? "bg-[url('/assets/sun.png')] bg-cover"
            : "bg-[url('/assets/moon.png')] bg-cover"
        } rounded-full z-20 relative shadow-xs shadow-black/60`}
      ></div>
    </div>
  );
}

export default Btn;
