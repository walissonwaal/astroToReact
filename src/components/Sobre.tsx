import diagonalArrow from "../assets/diagonal-arrow.svg";

export default function Sobre() {
  return (
    <section className="py-16">
      <div className="flex gap-6 max-w-4xl m-auto">
        <canvas className="slide-left" id="three-canvas"></canvas>
        <div className="fade-in-right flex flex-col justify-end">
          <div className="flex flex-col gap-4 font-elgraineItalic border-l h-auto pl-6 border-r-off-white text-xl bg-[#EFEFEF]">
            <p className="max-w-[50ch]">
              Somos um estúdio focado em criar campanhas que vão além da
              publicidade.
            </p>
            <p>
              Aqui, cada detalhe é pensado para emocionar e conectar, com
              soluções sob medida para cada cliente.
            </p>
          </div>
          <div className="flex items-center gap-5 mt-12">
            <a href="#" className="font-nordMedium bg-[#EFEFEF] text-lg">
              Vamos Conversar
            </a>
            <button className="rounded-full bg-[#323232] p-3">
              <img
                src={diagonalArrow}
                loading="eager"
                // width={diagonalArrow.width}
                // densities={[1.5, 2]}
                alt="Símbolo Flecha"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}