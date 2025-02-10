import logo from "../assets/logo_santa_ideia.svg";
import manifesto from "../assets/manifesto.webm";

export default function Hero() {
  return (
    <>
      <header
        id="header"
        className="fixed min-h-20 px-8 md:px-16 py-4 top-0 w-full z-10"
      >
        <div className="flex justify-between max-w-5xl m-auto items-center">
          <img
            src={logo}
            loading="eager"
            // width={logo.width / 2.3}
            // densities={[1.5, 2]}
            alt="Logomarca Studio Santa Ideia"
          />
          <button
            id="menu-toggle"
            className="lg:hidden text-[#EFEFEF] text-2xl"
            aria-label="Abrir Menu"
          >
            ☰
          </button>
          <nav className="lg:flex gap-10 text-sm text-[#EFEFEF] uppercase font-nordMedium tracking-wide hidden">
            <a>sobre</a>
            <a>serviços</a>
            <a>diferenciais</a>
          </nav>
          <button className="bg-[#EFEFEF] px-4 py-3 font-nordMedium tracking-wide text-xs rounded-lg hidden lg:block">
            Vamos Conversar
          </button>
        </div>
      </header>
      <div className="relative h-[100svh] overflow-hidden">
        <video
          src={manifesto}
          autoPlay
          muted
          typeof="video/mp4"
          className="w-full aspect-video"
        ></video>
      </div>
      <div className="backdrop-blur-sm border-b-off-white/30 bg-off-black bg-opacity-30 border-b"></div>
    </>
  );
}
