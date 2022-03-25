import { Tetrahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingTetrahedron = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  rotateOnX = false,
  rotateOnY = false,
  rotateOnZ = false,
  rotationFact = .01,
  material,
}) => {
  const ref = useRef();

  useFrame(() => {
    if (rotateOnX)
      ref.current.rotation.x += rotationFact;
    if (rotateOnY)
      ref.current.rotation.y += rotationFact;
    if (rotateOnZ)
      ref.current.rotation.z += rotationFact;
  });

  return (
    <Tetrahedron
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
      material={material}
    />
  );
};
export default RotatingTetrahedron;
