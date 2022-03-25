import { RoundedBox } from "@react-three/drei";

const RoundedCube = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  radius,
  smoothness,
  material,
}) => {
  return (
    <RoundedBox
      position={position}
      rotation={rotation}
      scale={scale}
      radius={radius}
      smoothness={smoothness}
      material={material}
    />
  );
};
export default RoundedCube;
