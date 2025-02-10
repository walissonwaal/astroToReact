import logo from "../assets/logo_santa_ideia.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

export default function Footer() {
  return (
    <footer className="pt-14">
      <div className="max-w-6xl m-auto">
        <div className="flex justify-between">
          <img
            src={logo}
            loading="eager"
            // width={logo.width / 2}
            // densities={[1.5, 2]}
            alt="Logomarca Studio Santa Ideia"
          />
          <div className="flex gap-4">
            <img
              src={linkedin}
              loading="eager"
              // width={linkedin.width}
              // densities={[1.5, 2]}
              alt="Logomarca Studio Santa Ideia"
            />
            <img
              src={instagram}
              loading="eager"
              // width={instagram.width}
              // densities={[1.5, 2]}
              alt="Logomarca Studio Santa Ideia"
            />
            <img
              src={facebook}
              loading="eager"
              // width={facebook.width}
              // densities={[1.5, 2]}
              alt="Logomarca Studio Santa Ideia"
            />
          </div>
        </div>
        <div className="pt-16 pb-8">
          <span className="font-elgraineItalic bg-[#EFEFEF]">
            Edifício JBZ - Av. Carlos Gomes, 400 - Sala 404 Auxiliadora, Porto
            Alegre - RS, 90480-000
          </span>
        </div>
      </div>
      <div className="bg-[#000000] py-4 flex justify-center items-center">
        <span className="bg-[#EFEFEF] text-sm">© 2025 Santa Ideia.</span>
      </div>
    </footer>
  );
}