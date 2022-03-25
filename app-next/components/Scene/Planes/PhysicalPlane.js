import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";

const PhysicalPlane = ({ position, rotation, scale, material }) => {
  const [ref] = usePlane(() => ({
    position: position,
    rotation: rotation,
    scale: scale,
  }));

  return (
    <mesh ref={ref}>
      <Plane material={material} />
    </mesh>
  );
};
export default PhysicalPlane;
