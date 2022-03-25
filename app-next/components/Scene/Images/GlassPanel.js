import { RoundedBox } from "@react-three/drei";
import ImageMesh from "../Images/ImageMesh";
import { GlassMaterial } from "../Materials";
import { motion } from "framer-motion-3d";

const GlassPanel = ({
  setCursor,
  texture,
  imageScale = 1,
  position = [0, 0, 0],
  onClick = () => {},
}) => {
  return (
    <motion.mesh
      position={position}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", bounce: 0.3, duration: 1 }}
      onPointerOver={() => setCursor(true)}
      onPointerOut={() => setCursor(false)}
      onClick={onClick}
    >
      <ImageMesh texture={texture} scale={imageScale} position={[0, 0, 0.1]} />
      <RoundedBox scale={[3, 2, 0.1]} material={GlassMaterial} />
    </motion.mesh>
  );
};
export default GlassPanel;
