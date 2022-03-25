import { RoundedBox } from "@react-three/drei";
import { useBox } from "@react-three/cannon";

const PhysicalCube = ({ position, rotation, scale, material, mass = 0 }) => {
  const [ref] = useBox(() => ({
    mass: mass,
    position: position,
    rotation: rotation,
    scale: scale,
  }));
  return (
    <mesh ref={ref}>
      <RoundedBox
        radius={0.05}
        smoothness={4}
        receiveShadow
        material={material}
      />
    </mesh>
  );
};
export default PhysicalCube;
