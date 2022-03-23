import { motion } from "framer-motion-3d";

const Lights = () => {
  return (
    <group>
      <ambientLight intensity={0.6} />
      <motion.directionalLight
        animate={{
          x: [1, Math.cos(Math.PI), -1],
          y: [-1, Math.sin(Math.PI), 1],
        }}
        transition={{ repeat: "Infinity", repeatType: "reverse", duration: 5 }}
        castShadow
        position={[0, 10, 5]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <directionalLight
        castShadow
        position={[0, 5, -10]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </group>
  );
};
export default Lights;
