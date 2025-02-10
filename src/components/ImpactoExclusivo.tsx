import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import mainImage from "../assets/mao_lampada.png";
import aureola from "../assets/aureola.png";

export default function ImpactoExclusivo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    setTimeout(() => {
      const phrase = document.getElementById("parallax-phrase");

      if (phrase) {
        gsap.to(phrase, {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: phrase,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        ScrollTrigger.refresh(); // Garante que os triggers sejam atualizados corretamente
      }
    }, 100); // Pequeno atraso para garantir que o elemento esteja no DOM
  }, []);

  return (
    <section className="pt-32 pb-16 relative">
      <div
        id="parallax-phrase"
        className="absolute flex justify-center items-center top-0 -z-10"
      >
        <span className="font-brutalno2 text-center text-[#282828] text-[10rem] rotate-180 max-w-[90%]">
          Impacto exclusivo, criado para você.
        </span>
      </div>
      <div className="flex flex-col justify-center items-center relative max-w-4xl m-auto">
        <span className="absolute left-7 top-7 font-brutalno2 text-[#5B5B5B] text-6xl max-w-[20ch]">
          Impacto exclusivo, criado para você.
        </span>
        <img src={mainImage} loading="eager" alt="Mão segurando lâmpada" />
        <img
          src={aureola}
          className="absolute -right-20 -bottom-10"
          loading="eager"
          alt="Símbolo"
        />
      </div>
      <div className="max-w-4xl m-auto mt-6 relative">
        <h3 className="font-brutalno2 text-[#ffffff] text-4xl">
          Publicidade boutique com atendimento dedicado, criatividade e
          inovação.
        </h3>
      </div>
    </section>
  );
}
