import { Scroll } from "@react-three/drei";

const Three = ({ isPhone }) => {
  return (
    <Scroll>
      <group position={[0, -17, 0]}></group>
    </Scroll>
  );
};
export default Three;
