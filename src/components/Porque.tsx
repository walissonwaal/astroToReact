import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import montanhaBg from "../assets/montanha-bg.png";
import { useEffect } from "react";


export default function Porque() {
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const image = document.getElementById("parallax-image");
    // Configura o efeito de parallax
    gsap.to(image, {
      y: -150, // Move 100px para cima
      ease: "none", // Animação linear
      scrollTrigger: {
        trigger: image, // Elemento que dispara o scroll
        start: "top top", // Começa no topo da página
        end: "bottom top", // Termina quando o topo da página alcança o final da frase
        scrub: true, // Sincroniza com o scroll do usuário
      },
    });

    gsap.from(".fade-in-porque", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".fade-in-porque",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".fade-in-01", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".fade-in-01",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".fade-in-02", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".fade-in-02",
        start: "top 70%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".fade-in-03", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".fade-in-03",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    });
    gsap.from(".fade-in-04", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".fade-in-04",
        start: "top 60%",
        end: "bottom 20%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="pt-16 pb-56 relative -z-20 overflow-hidden">
      <div className="grid grid-cols-12 gap-6 max-w-6xl m-auto">
        <h1 className="fade-in-porque col-start-2 col-span-full font-brutalno2 text-[#ffffff] text-6xl leading-tight">
          Por que escolher o<br />
          <span className="text-7xl ml-[20%]">Studio Santa Ideia?</span>
        </h1>
      </div>
      <div className="grid grid-cols-2 max-w-6xl m-auto">
        {/* <!-- Início Destaque 1 --> */}
        <div className="fade-in-01 flex flex-col mt-20 gap-3 bg-[#EFEFEF]">
          <div className="flex justify-end align-bottom">
            <span className="font-elgraineItalic text-6xl self-end leading-none">
              1.
            </span>
            <h4 className="font-elgraineItalic text-3xl self-end">
              Exclusividade e Hiperpersonalização
            </h4>
          </div>
          <p className="font-brutalno2 text-2xl ml-[13%]">
            Cada projeto é único e feito sob medida.
          </p>
        </div>
        {/* <!-- Fim Destaque 1 --> */}
        {/* <!-- Início Destaque 2 --> */}
        <div className="fade-in-02 flex flex-col mt-36 gap-3 bg-[#EFEFEF]">
          <div className="flex justify-end align-bottom">
            <span className="font-elgraineItalic text-6xl self-end leading-none">
              2.
            </span>
            <h4 className="font-elgraineItalic text-3xl self-end">
              Exclusividade e Hiperpersonalização
            </h4>
          </div>
          <p className="font-brutalno2 text-2xl ml-[13%]">
            Cada projeto é único e feito sob medida.
          </p>
        </div>
        {/* <!-- Fim Destaque 2 --> */}
        {/* <!-- Início Destaque 3 --> */}
        <div className="fade-in-03 flex flex-col mt-10 gap-3 bg-[#EFEFEF]">
          <div className="flex justify-end align-bottom">
            <span className="font-elgraineItalic text-6xl self-end leading-none">
              3.
            </span>
            <h4 className="font-elgraineItalic text-3xl self-end">
              Exclusividade e Hiperpersonalização
            </h4>
          </div>
          <p className="font-brutalno2 text-2xl ml-[13%]">
            Cada projeto é único e feito sob medida.
          </p>
        </div>
        {/* <!-- Fim Destaque 3 --> */}
        {/* <!-- Início Destaque 4 --> */}
        <div className="fade-in-04 flex flex-col mt-28 gap-3 bg-[#EFEFEF]">
          <div className="flex justify-end align-bottom">
            <span className="font-elgraineItalic text-6xl self-end leading-none">
              4.
            </span>
            <h4 className="font-elgraineItalic text-3xl self-end">
              Exclusividade e Hiperpersonalização
            </h4>
          </div>
          <p className="font-brutalno2 text-2xl ml-[13%]">
            Cada projeto é único e feito sob medida.
          </p>
        </div>
        {/* <!-- Fim Destaque 4 --> */}
      </div>
      <div className="absolute -bottom-[100px] -z-10 bg-off-black overflow-hidden">
        <img
          id={"parallax-image"}
          src={montanhaBg}
          loading="eager"
          // width={montanhaBg.width / 2}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
          className="mix-blend-lighten"
        />
      </div>
    </section>
  );
}
