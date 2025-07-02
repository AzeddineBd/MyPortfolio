import { useEffect } from "react";

const MouseLight = () => {
  useEffect(() => {
    const light = document.getElementById("mouse-light");

    const updatePosition = (e) => {
      const x = e.clientX - 64;
      const y = e.clientY - 64;
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
      className="pointer-events-none fixed top-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-30 z-50 bg-yellow-400 dark:bg-blue-400"
    />
  );
};

export default MouseLight;
