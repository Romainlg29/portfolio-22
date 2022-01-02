import { MeshLambertMaterial, MeshStandardMaterial } from "three";

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

// METALNESS
export const MetalMaterialLightBlue = new MeshStandardMaterial({
  color: "lightblue",
  roughness: 0,
  metalness: 0.9,
});
export const MetalMaterialRoyalBlue = new MeshStandardMaterial({
  color: "royalblue",
  roughness: 0,
  metalness: 0.9,
});
export const MetalMaterialSteelBlue = new MeshStandardMaterial({
  color: "steelblue",
  roughness: 0,
  metalness: 0.9,
});
export const MetalMaterialMidnightBlue = new MeshStandardMaterial({
  color: "midnightblue",
  roughness: 0,
  metalness: 0.9,
});
export const MetalMaterialDarkBlue = new MeshStandardMaterial({
  color: "darkblue",
  roughness: 0,
  metalness: 0.9,
});
