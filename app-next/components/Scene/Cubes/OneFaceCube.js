import { useTexture } from "@react-three/drei";
import { RoughMaterialRoyalBlue } from "../Materials";

const OneFaceCube = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  texture,
}) => {
  const map = useTexture(texture);
  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial
        roughness={0}
        metalness={0.1}
        map={map}
        color={"royalblue"}
        attach="material"
      />
      <meshStandardMaterial
              roughness={0}
              metalness={0.1}
        color={"royalblue"}
        attachArray="material"
      />
      <meshStandardMaterial
        color={"royalblue"}
        roughness={0}
        metalness={0.1}
        attachArray="material"
      />
      <meshStandardMaterial
        color={"royalblue"}
        roughness={0}
        metalness={0.1}
        attachArray="material"
      />
      <meshStandardMaterial
        color={"royalblue"}
        roughness={0}
        metalness={0.1}
        attachArray="material"
      />
      <meshStandardMaterial
        color={"royalblue"}
        roughness={0}
        metalness={0.1}
        attachArray="material"
      />
    </mesh>
  );
};
export default OneFaceCube;
