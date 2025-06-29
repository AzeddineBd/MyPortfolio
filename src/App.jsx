import Home from "./pages/Home";
import Projects from "./pages/Projects";

// Hooks
import { useRef } from "react";

// Components
import NavTop from "./components/NavTop";
import NavBottom from "./components/NavBottom";

// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function App() {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const b_navRef = useRef(null);

  // Animation GSAP
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
    <>
      <NavTop ref={navRef} />
      <Home ref={heroRef} />
      <Projects />
      <NavBottom ref={b_navRef} />
    </>
  );
}

export default App;
