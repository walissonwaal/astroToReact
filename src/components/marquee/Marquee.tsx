import styles from "./Marquee.module.css";
import rightArrow from "../../assets/right_arrow.svg";

export default function Marquee() {
  return (
    <div className={`${styles.marquee} py-16 3xl:py-20`}>
      <div className={`${styles.marquee__group}`}>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Ideia
        </span>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Planejamento
        </span>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Execução
        </span>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Resultado
        </span>
      </div>
      <div className="marquee__group" aria-hidden="true">
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Ideia
        </span>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Planejamento
        </span>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Execução
        </span>
        <img
        className={styles.img}
          src={rightArrow}
          loading="eager"
          // width={rightArrow.width}
          // densities={[1.5, 2]}
          alt="Símbolo Flecha"
        />
        <span
          className={`${styles.span} font-nordMedium text-8xl text-[#EFEFEF]`}
        >
          Resultado
        </span>
      </div>
    </div>
  );
}
