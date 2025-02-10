// @ts-nocheck
import { Canvas } from "@react-three/fiber";
import Head from "./3d/Head";
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import { Bloom, DepthOfField, EffectComposer, ToneMapping } from "@react-three/postprocessing";

export default function SobreDois() {
  return (
    <section className="py-16">
      <div className="flex gap-6 flex-1 max-w-4xl m-auto">
        <div className="fade-in-left flex flex-col justify-end items-end basis-1/2 w-1/2">
          <div className="flex flex-col gap-4 font-elgraineItalic border-r h-auto pr-6 border-r-off-white text-xl bg-[#EFEFEF] text-right">
            <p>
              No Studio Santa Ideia, criamos experiências visuais únicas, feitas
              para deixar uma marca duradoura.
            </p>
            <p>
              Com uma abordagem consultiva e estratégica, trabalhamos lado a
              lado com nossos clientes para transformar ideias em impacto real.
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
        <Canvas
          flat
          shadows
          camera={{ position: [5, 0, 10], fov: 25 }}
          style={{ background: "black" }}
          id="canvas"
        >
          <fog attach="fog" args={["black", 15, 22.5]} />
          <Stage
            intensity={0.5}
            environment="park"
            shadows={{ type: "accumulative", bias: -0.001, intensity: Math.PI }}
            adjustCamera={false}
          >
            <Head rotation={[0, Math.PI, 0]} />
          </Stage>
          {/* <Grid renderOrder={-1} position={[0, -1.85, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} sectionColor={[0.5, 0.5, 10]} fadeDistance={30} /> */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.05}
            enableZoom={true}
            makeDefault
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
          <EffectComposer disableNormalPass>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={0.05}
              height={480}
            />
            <Bloom
              luminanceThreshold={2}
              luminanceSmoothing={0.9}
              height={300}
              mipmapBlur
            />
            <ToneMapping />
            {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
          </EffectComposer>
          <Environment files="/studio.exr" blur={0.8} />
        </Canvas>
      </div>
    </section>
  );
}