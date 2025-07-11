import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Hooks
import { useRef } from "react";

// Components
import NavTop from "./components/NavTop";
import NavBottom from "./components/NavBottom";
import MouseLight from "./components/MouseLight";

// GSAP
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// GSAP Plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const bottomNavRef = useRef(null);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const containerRef = useRef(null);
  const contactRef = useRef(null);

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
        duration: 2,
        ease: "power2.out",
      }
    );

    scrollTl.to(projectsRef.current, { opacity: 0, scale: 0 });

    scrollTl.fromTo(
      contactRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Hero Animation
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

    // Home Page Animation

    tl.from(navRef.current, { opacity: 0, y: -50, duration: 1 });
    tl.add(heroTl, "+=0.2");
    tl.from(bottomNavRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.8");
  });
  return (
    <div className="min-h-screen">
      <MouseLight />
      <div className="fixed top-0 left-0 w-full z-40">
        <NavTop
          ref={navRef}
          scrollToSection={(sectionName) => {
            if (sectionName === "projects") {
              // تمرير إلى منتصف ScrollTrigger الذي يحتوي projects
              gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                  y: containerRef.current.offsetTop + window.innerHeight * 0.6,
                },
                ease: "power2.inOut",
              });
            } else if (sectionName === "contact") {
              gsap.to(window, {
                duration: 1.2,
                scrollTo: { y: contactRef.current.offsetTop },
                ease: "power2.inOut",
              });
            }
          }}
        />
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
      <section
        ref={contactRef}
        className="min-h-screen md:pt-0 pt-94 mb-12 flex items-center justify-center"
      >
        <Contact />
      </section>
      <div className="fixed bottom-0 left-0 w-full z-40">
        <NavBottom ref={bottomNavRef} />
      </div>
    </div>
  );
}

export default App;
