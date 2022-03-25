import { Scroll } from "@react-three/drei";
import ImageMesh from "../Images/ImageMesh";

const Medias = ({ isPhone, setCursor }) => {
  return (
    <Scroll>
      <group position={[0, -27, -1]}>
        <ImageMesh
          position={[-0.5, 0, 0]}
          texture={`/Assets/Logo/linkedin.svg`}
          scale={3}
          pointerIn={() => setCursor(true)}
          pointerOut={() => setCursor(false)}
          click={() =>
            window.open("https://www.linkedin.com/in/romainlg29/", "_blank")
          }
        />
        <ImageMesh
          texture={`/Assets/Logo/github.svg`}
          scale={2.4}
          pointerIn={() => setCursor(true)}
          pointerOut={() => setCursor(false)}
          click={() => window.open("https://github.com/Romainlg29", "_blank")}
        />
        <ImageMesh
          position={[0.5, 0, 0]}
          texture={`/Assets/Logo/mail.svg`}
          scale={0.6}
          pointerIn={() => setCursor(true)}
          pointerOut={() => setCursor(false)}
          click={() =>
            window.open("mailto:legall.romain29470@gmail.com", "_blank")
          }
        />
      </group>
    </Scroll>
  );
};
export default Medias;
