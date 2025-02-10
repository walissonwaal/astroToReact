import { useEffect } from "react";
import Hero from "./components/Hero";
import ImpactoExclusivo from "./components/ImpactoExclusivo";
import Sobre from "./components/Sobre";
import Marquee from "./components/marquee/Marquee";
import Cta from "./components/Cta";
import Services from "./components/Services";
import Porque from "./components/Porque";
import Contact from "./components/Contact";
import Maps from "./components/Maps";
import Footer from "./components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    // Registrar o ScrollTrigger no GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Instanciar Lenis para suavização do scroll
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Função de animação GSAP
    const initAnimations = () => {
      gsap.from(".fade-in-right", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".fade-in-right",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.from(".fade-in-left", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".fade-in-left",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });

      gsap.from(".slide-left", {
        x: -300,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".slide-left",
          start: "top 60%",
          end: "bottom 50%",
          scrub: true,
        },
      });

      gsap.from(".slide-right", {
        x: 300,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".slide-right",
          start: "top 60%",
          end: "bottom 50%",
          scrub: true,
        },
      });
    };

    initAnimations();

    // Cleanup para evitar memory leaks
    return () => {
      gsap.killTweensOf(
        ".fade-in-right, .fade-in-left, .slide-left, .slide-right"
      );
    };
  }, []);

  return (
    <div className="antialiased bg-[#323232]">
      <Hero />
      <ImpactoExclusivo />
      <Sobre />
      <Marquee />
      {/* <SobreDois /> */}
      <Cta />
      <Services />
      <Porque />
      <Contact />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
