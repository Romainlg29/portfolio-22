import { intInInterval } from "./Operations";
import { RoughMaterialRoyalBlue } from "../Scene/Materials";
import RoundedCube from "../Scene/Cubes/RoundedCube";
import { Torus, Sphere, Tetrahedron } from "@react-three/drei";
import { memo } from "react";

const RandomMesh = ({ position }) => {
  const r = intInInterval(0, 5);
  switch (r) {
    case 0:
      return (
        <RoundedCube
          position={position}
          rotation={[-Math.PI / 2, Math.PI / 4, 0]}
          scale={0.7}
          material={RoughMaterialRoyalBlue}
        />
      );

    case 1:
      return (
        <Sphere
          position={position}
          scale={0.5}
          material={RoughMaterialRoyalBlue}
        />
      );

    case 2:
      return (
        <Tetrahedron
          position={position}
          rotation={[Math.PI / 4, 0, Math.PI / 2]}
          scale={0.6}
          material={RoughMaterialRoyalBlue}
        />
      );

    case 3:
      return (
        <RoundedCube
          position={position}
          rotation={[Math.PI / 4, Math.PI / 2, 0]}
          scale={0.7}
          material={RoughMaterialRoyalBlue}
        />
      );

    default:
      return (
        <Torus
          position={position}
          rotation={[Math.PI / 2, Math.PI / 6, 0]}
          scale={0.2}
          args={[2, 1, 48, 64]}
          material={RoughMaterialRoyalBlue}
        />
      );
  }
};
export default RandomMesh;
