import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import diagonalArrow from "../assets/diagonal-arrow.svg";

export default function Cta() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pequeno timeout para garantir que os elementos estejam no DOM antes da animação
    setTimeout(() => {
      const elements = gsap.utils.toArray(".fade-in");

      elements.forEach((el: any) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        });
      });

      ScrollTrigger.refresh(); // Garante que os triggers sejam recalculados corretamente
    }, 100);
  }, []);

  return (
    <section className="py-16">
      <div className="flex flex-col items-start relative max-w-6xl m-auto">
        <h3 className="fade-in font-brutalno1 text-[64px] text-[#EFEFEF]">
          Você tem uma ideia?
        </h3>
        <h1 className="fade-in font-brutalno2 text-[#ffffff] text-[96px] leading-tight text-end self-end">
          Nós temos a Santa Ideia para dar vida a ela.
        </h1>
        <div className="fade-in inline-block self-end mt-8">
          <div className="flex items-center gap-5">
            <a href="#" className="font-nordMedium text-[#EFEFEF] text-lg">
              Vamos Conversar
            </a>
            <button className="rounded-full bg-[#EFEFEF] p-3">
              <img src={diagonalArrow} loading="eager" alt="Símbolo Flecha" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
