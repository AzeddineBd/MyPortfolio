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
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP Plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function App() {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const b_navRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const containerRef = useRef(null);

  // Animation GSAP
  useGSAP(() => {
    // GSAP Timeline
    const tl = gsap.timeline();
    const heroTl = gsap.timeline();
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

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
    tl.from(b_navRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.8");

    // Scroll Gsap
    scrollTl.to(homeRef.current, {
      opacity: 0,
      scale: 4,
      duration: 2,
      ease: "power2.out",
    });

    scrollTl.fromTo(
      projectsRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  });
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <NavTop ref={navRef} />
      </div>
      <section className="h-screen relative overflow-hidden" ref={containerRef}>
        <div
          ref={homeRef}
          className="absolute inset-0 scale-100 opacity-100 flex items-center justify-center"
        >
          <Home ref={heroRef} />
        </div>
        <div
          ref={projectsRef}
          className="absolute inset-0 opacity-0 scale-0 flex items-center justify-center"
        >
          <Projects />
        </div>
      </section>
      <div className="h-screen"></div>
      <div className="fixed bottom-0 left-0 w-full z-50">
        <NavBottom ref={b_navRef} />
      </div>
    </div>
  );
}

export default App;
