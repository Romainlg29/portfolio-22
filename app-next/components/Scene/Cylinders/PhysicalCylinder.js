import { useCylinder } from "@react-three/cannon";
import { Cylinder } from "@react-three/drei";

const PhysicalCylinder = ({
  position,
  rotation,
  scale,
  material,
  mass = 0,
}) => {
  const [ref] = useCylinder(() => ({
    mass: mass,
    position: position,
    rotation: rotation,
    scale: scale,
  }));
  return (
    <mesh ref={ref}>
      <Cylinder material={material} args={[0.25, 0.25, 1, 20]} />
    </mesh>
  );
};
export default PhysicalCylinder;
