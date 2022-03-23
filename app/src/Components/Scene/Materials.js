import { MeshDistortMaterial } from "@react-three/drei";
import {
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
} from "three";

export const TransparentMaterial = new MeshBasicMaterial({
  opacity: 0,
  transparent: true,
});

export const RoughMaterialRoyalBlue = new MeshStandardMaterial({
  color: "royalblue",
  roughness: 0,
  metalness: 0.1,
});

export const DarkRoyalBlueMaterial = new MeshStandardMaterial({
  color: "royalblue",
  roughness: 0,
  metalness: 0.95,
});

// Mandatory to get the wanted color
/*export const LightRoyalBlueMaterial = () => {
  return (
    <MeshDistortMaterial
      color={"royalblue"}
      speed={0}
      distort={0}
      roughness={0}
      metalness={0.05}
    />
  );
};*/

export const LightRoyalBlueMaterial = () => {
  return (
    <MeshPhysicalMaterial
      color={"royalblue"}
      speed={0}
      distort={0}
      roughness={0}
      metalness={0.05}
    />
  );
};

export const GlassMaterial = new MeshPhysicalMaterial({
  transparent: true,
  opacity: 0.25,
  color: "#bababa",
  roughness: 0,
  metalness: 0.5,
  reflectivity: 1,
});

export const GlassAlternateMaterial = () => {
  return (
    <meshPhysicalMaterial
      thickness={0.05}
      roughness={0}
      clearcoat={1}
      clearcoatRoughness={1}
      transmission={.99}
      ior={2}
      envMapIntensity={50}
      color={"#bababa"}
    />
  );
};
