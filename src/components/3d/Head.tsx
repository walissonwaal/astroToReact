// @ts-nocheck
import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame, useGraph } from "@react-three/fiber";

export default function Head(props) {
  const group = React.useRef();
  const { nodes, materials, animations, scene } = useGLTF(
    "/head_template_web-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      for (let i = 0; i < Object.keys(actions).length; i++) {
        actions[Object.keys(actions)[i]]?.play();
      }
    }
  }, [actions]);

  useFrame((state) => {
    if (group.current) {
      if (group.current.rotation.y < Math.PI / 2) {
        group.current.rotation.y += 0.02;
        if (group.current.rotation.y > Math.PI / 2)
          group.current.rotation.y = Math.PI / 2;
      }
      // Anima a emissão do material "Material.001"
      if (materials["Material.001"]) {
        const time = state.clock.elapsedTime;
        const emissionStrength = time * 2; // Pulsa entre 0 e 2
        materials["Material.001"].emissive.setRGB(
          emissionStrength,
          emissionStrength,
          emissionStrength
        ); // Luz branca pulsante
      }
    }
  });

  // rotation={[Math.PI, -1.272, Math.PI]}

  return (
    <group
      ref={group}
      {...props}
      rotation={[Math.PI, 1.272, Math.PI]}
      dispose={null}
    >
      <group name="Scene">
        <mesh
          name="Icosphere001"
          geometry={nodes.Icosphere001.geometry}
          material={materials["Material.001"]}
          position={[0, 0.964, 0]}
          scale={0.174}
        />
        <mesh
          name="head_remesh_cell"
          geometry={nodes.head_remesh_cell.geometry}
          material={materials.rock}
          position={[-0.072, 1.322, 0.623]}
        />
        <mesh
          name="head_remesh_cell001"
          geometry={nodes.head_remesh_cell001.geometry}
          material={materials.rock}
          position={[0.262, -0.322, -0.249]}
        />
        <mesh
          name="head_remesh_cell002"
          geometry={nodes.head_remesh_cell002.geometry}
          material={materials.rock}
          position={[0.429, 0.748, -0.033]}
        />
        <mesh
          name="head_remesh_cell003"
          geometry={nodes.head_remesh_cell003.geometry}
          material={materials.rock}
          position={[0.097, 0.165, 0.28]}
        />
        <mesh
          name="head_remesh_cell004"
          geometry={nodes.head_remesh_cell004.geometry}
          material={materials.rock}
          position={[-0.315, 1.464, 0.381]}
        />
        <mesh
          name="head_remesh_cell005"
          geometry={nodes.head_remesh_cell005.geometry}
          material={materials.rock}
          position={[-0.229, 1.628, 0.272]}
        />
        <mesh
          name="head_remesh_cell006"
          geometry={nodes.head_remesh_cell006.geometry}
          material={materials.rock}
          position={[-0.267, 0.753, -0.421]}
        />
        <mesh
          name="head_remesh_cell007"
          geometry={nodes.head_remesh_cell007.geometry}
          material={materials.rock}
          position={[0.076, -0.399, 0.134]}
        />
        <mesh
          name="head_remesh_cell008"
          geometry={nodes.head_remesh_cell008.geometry}
          material={materials.rock}
          position={[0.129, 0.632, 0.61]}
        />
        <mesh
          name="head_remesh_cell009"
          geometry={nodes.head_remesh_cell009.geometry}
          material={materials.rock}
          position={[-0.268, 1.664, -0.12]}
        />
        <mesh
          name="head_remesh_cell010"
          geometry={nodes.head_remesh_cell010.geometry}
          material={materials.rock}
          position={[-0.286, 1.176, 0.536]}
        />
        <mesh
          name="head_remesh_cell011"
          geometry={nodes.head_remesh_cell011.geometry}
          material={materials.rock}
          position={[-0.123, 1.557, -0.5]}
        />
        <mesh
          name="head_remesh_cell012"
          geometry={nodes.head_remesh_cell012.geometry}
          material={materials.rock}
          position={[-0.294, 0.809, 0.482]}
        />
        <mesh
          name="head_remesh_cell013"
          geometry={nodes.head_remesh_cell013.geometry}
          material={materials.rock}
          position={[-0.1, 0.273, 0.519]}
        />
        <mesh
          name="head_remesh_cell014"
          geometry={nodes.head_remesh_cell014.geometry}
          material={materials.rock}
          position={[0.48, 0.908, -0.136]}
        />
        <mesh
          name="head_remesh_cell015"
          geometry={nodes.head_remesh_cell015.geometry}
          material={materials.rock}
          position={[0.01, 1.011, 0.653]}
        />
        <mesh
          name="head_remesh_cell016"
          geometry={nodes.head_remesh_cell016.geometry}
          material={materials.rock}
          position={[-0.053, 0.482, 0.637]}
        />
        <mesh
          name="head_remesh_cell017"
          geometry={nodes.head_remesh_cell017.geometry}
          material={materials.rock}
          position={[-0.289, 1.399, -0.489]}
        />
        <mesh
          name="head_remesh_cell018"
          geometry={nodes.head_remesh_cell018.geometry}
          material={materials.rock}
          position={[0.352, 1.093, -0.493]}
        />
        <mesh
          name="head_remesh_cell019"
          geometry={nodes.head_remesh_cell019.geometry}
          material={materials.rock}
          position={[-0.294, 0.417, 0.37]}
        />
        <mesh
          name="head_remesh_cell020"
          geometry={nodes.head_remesh_cell020.geometry}
          material={materials.rock}
          position={[0.334, 0.973, 0.498]}
        />
        <mesh
          name="head_remesh_cell021"
          geometry={nodes.head_remesh_cell021.geometry}
          material={materials.rock}
          position={[0.197, 1.434, 0.512]}
        />
        <mesh
          name="head_remesh_cell022"
          geometry={nodes.head_remesh_cell022.geometry}
          material={materials.rock}
          position={[0.36, 1.508, -0.292]}
        />
        <mesh
          name="head_remesh_cell023"
          geometry={nodes.head_remesh_cell023.geometry}
          material={materials.rock}
          position={[0.302, 0.312, -0.121]}
        />
        <mesh
          name="head_remesh_cell024"
          geometry={nodes.head_remesh_cell024.geometry}
          material={materials.rock}
          position={[-0.438, 1.413, -0.229]}
        />
        <mesh
          name="head_remesh_cell025"
          geometry={nodes.head_remesh_cell025.geometry}
          material={materials.rock}
          position={[0.02, 1.386, -0.622]}
        />
        <mesh
          name="head_remesh_cell026"
          geometry={nodes.head_remesh_cell026.geometry}
          material={materials.rock}
          position={[-0.169, 0.5, -0.375]}
        />
        <mesh
          name="head_remesh_cell027"
          geometry={nodes.head_remesh_cell027.geometry}
          material={materials.rock}
          position={[-0.217, 1.038, -0.598]}
        />
        <mesh
          name="head_remesh_cell028"
          geometry={nodes.head_remesh_cell028.geometry}
          material={materials.rock}
          position={[-0.026, 0.17, -0.444]}
        />
        <mesh
          name="head_remesh_cell029"
          geometry={nodes.head_remesh_cell029.geometry}
          material={materials.rock}
          position={[0.458, 0.87, 0.203]}
        />
        <mesh
          name="head_remesh_cell030"
          geometry={nodes.head_remesh_cell030.geometry}
          material={materials.rock}
          position={[-0.464, 0.901, -0.154]}
        />
        <mesh
          name="head_remesh_cell031"
          geometry={nodes.head_remesh_cell031.geometry}
          material={materials.rock}
          position={[-0.286, -0.235, -0.202]}
        />
        <mesh
          name="head_remesh_cell032"
          geometry={nodes.head_remesh_cell032.geometry}
          material={materials.rock}
          position={[0.343, 1.591, 0.075]}
        />
        <mesh
          name="head_remesh_cell033"
          geometry={nodes.head_remesh_cell033.geometry}
          material={materials.rock}
          position={[-0.438, 1.137, 0.275]}
        />
        <mesh
          name="head_remesh_cell034"
          geometry={nodes.head_remesh_cell034.geometry}
          material={materials.rock}
          position={[0.5, 1.218, -0.097]}
        />
        <mesh
          name="head_remesh_cell035"
          geometry={nodes.head_remesh_cell035.geometry}
          material={materials.rock}
          position={[-0.263, 0.562, 0.477]}
        />
        <mesh
          name="head_remesh_cell036"
          geometry={nodes.head_remesh_cell036.geometry}
          material={materials.rock}
          position={[0.399, 0.567, 0.165]}
        />
        <mesh
          name="head_remesh_cell037"
          geometry={nodes.head_remesh_cell037.geometry}
          material={materials.rock}
          position={[0.208, 1.102, 0.588]}
        />
        <mesh
          name="head_remesh_cell038"
          geometry={nodes.head_remesh_cell038.geometry}
          material={materials.rock}
          position={[-0.503, 1.027, 0.042]}
        />
        <mesh
          name="head_remesh_cell039"
          geometry={nodes.head_remesh_cell039.geometry}
          material={materials.rock}
          position={[0.311, -0.003, -0.062]}
        />
        <mesh
          name="head_remesh_cell040"
          geometry={nodes.head_remesh_cell040.geometry}
          material={materials.rock}
          position={[0.164, 0.697, -0.505]}
        />
        <mesh
          name="head_remesh_cell041"
          geometry={nodes.head_remesh_cell041.geometry}
          material={materials.rock}
          position={[0.435, 1.131, 0.29]}
        />
        <mesh
          name="head_remesh_cell042"
          geometry={nodes.head_remesh_cell042.geometry}
          material={materials.rock}
          position={[-0.314, 0.344, 0.069]}
        />
        <mesh
          name="head_remesh_cell043"
          geometry={nodes.head_remesh_cell043.geometry}
          material={materials.rock}
          position={[0.055, -0.205, -0.558]}
        />
        <mesh
          name="head_remesh_cell044"
          geometry={nodes.head_remesh_cell044.geometry}
          material={materials.rock}
          position={[-0.138, -0.214, 0.144]}
        />
        <mesh
          name="head_remesh_cell045"
          geometry={nodes.head_remesh_cell045.geometry}
          material={materials.rock}
          position={[0.041, 0.882, -0.637]}
        />
        <mesh
          name="head_remesh_cell046"
          geometry={nodes.head_remesh_cell046.geometry}
          material={materials.rock}
          position={[0.079, 1.7, 0.253]}
        />
        <mesh
          name="head_remesh_cell047"
          geometry={nodes.head_remesh_cell047.geometry}
          material={materials.rock}
          position={[0.22, 1.352, -0.557]}
        />
        <mesh
          name="head_remesh_cell048"
          geometry={nodes.head_remesh_cell048.geometry}
          material={materials.rock}
          position={[0.278, 0.54, -0.247]}
        />
        <mesh
          name="head_remesh_cell049"
          geometry={nodes.head_remesh_cell049.geometry}
          material={materials.rock}
          position={[0.065, 1.72, -0.251]}
        />
        <mesh
          name="head_remesh_cell050"
          geometry={nodes.head_remesh_cell050.geometry}
          material={materials.rock}
          position={[0.576, 1.046, -0.04]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/head_template_web-transformed.glb");
