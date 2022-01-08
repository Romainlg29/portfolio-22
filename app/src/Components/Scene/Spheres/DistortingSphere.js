import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const DistortingSphere = ({
  position = [0, 0, 0],
  scale = [0.4, 0.4, 0.4],
  color = "royalblue",
  speed = 1,
  distort = 0.3,
  roughness = 0,
  metalness = 0,
}) => {
  return (
    <Sphere position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        speed={speed}
        distort={distort}
        roughness={roughness}
        metalness={metalness}
      />
    </Sphere>
  );
};
export default DistortingSphere;
