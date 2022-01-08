import { RoundedBox, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingCube = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  rotateOnX = false,
  rotateOnY = false,
  rotateOnZ = false,
  rotationFact = 1,
  material,
}) => {
  const d = useScroll();
  const ref = useRef();

  useFrame(() => {
    if (d.delta > d.eps) {
      if (rotateOnX)
        ref.current.rotation.x =
          rotation[0] + d.offset * rotationFact * Math.PI;
      if (rotateOnY)
        ref.current.rotation.y =
          rotation[1] + d.offset * rotationFact * Math.PI;
      if (rotateOnZ)
        ref.current.rotation.z =
          rotation[2] + d.offset * rotationFact * Math.PI;
    }
  });

  return (
    <RoundedBox
      ref={ref}
      position={position}
      rotation={rotation}
      scale={scale}
      radius={0.05}
      smoothness={4}
      receiveShadow
      material={material}
    />
  );
};
export default RotatingCube;
