import { useEffect } from "react";

const MouseLight = () => {
  useEffect(() => {
    const light = document.getElementById("mouse-light");

    const updatePosition = (e) => {
      const x = e.clientX - 44;
      const y = e.clientY - 44;
      light.style.transform = `translate(${x}px, ${y}px)`;
    };

    document.addEventListener("mousemove", updatePosition);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      id="mouse-light"
      className="pointer-events-none fixed top-0 left-0 w-22 h-22 rounded-full blur-2xl opacity-30 z-50 bg-black dark:bg-white sm:block hidden"
    />
  );
};

export default MouseLight;
