import { MeshDistortMaterial } from "@react-three/drei";
import {
  MeshBasicMaterial,
  MeshLambertMaterial,
  MeshStandardMaterial,
} from "three";

export const TransparentMaterial = new MeshBasicMaterial({
  opacity: 0,
  transparent: true,
});

// NO ROUGHNESS
export const LambertMaterialLightBlue = new MeshLambertMaterial({
  color: "lightblue",
});
export const LambertMaterialRoyalBlue = new MeshLambertMaterial({
  color: "royalblue",
});

// ROUGHNESS
export const RoughMaterialLightBlue = new MeshStandardMaterial({
  color: "lightblue",
  roughness: 0,
  metalness: 0.1,
});
export const RoughMaterialRoyalBlue = new MeshStandardMaterial({
  color: "royalblue",
  roughness: 0,
  metalness: 0.1,
});
export const RoughMaterialSteelBlue = new MeshStandardMaterial({
  color: "steelblue",
  roughness: 0,
  metalness: 0.1,
});
export const RoughMaterialMidnightBlue = new MeshStandardMaterial({
  color: "midnightblue",
  roughness: 0,
  metalness: 0.1,
});
export const RoughMaterialDarkBlue = new MeshStandardMaterial({
  color: "darkblue",
  roughness: 0,
  metalness: 0.1,
});

export const DarkRoyalBlueMaterial = new MeshStandardMaterial({
  color: "royalblue",
  roughness: 0,
  metalness: 0.95,
});

/*export const LightRoyalBlueMaterial = new MeshStandardMaterial({
  color: "royalblue",
  roughness: 0,
  metalness: 0.05,
});*/

// Mandatory to get the wanted color
export const LightRoyalBlueMaterial = () => {
  return (
    <MeshDistortMaterial
      color={"royalblue"}
      speed={0}
      distort={0}
      roughness={0}
      metalness={0.05}
    />
  );
};
