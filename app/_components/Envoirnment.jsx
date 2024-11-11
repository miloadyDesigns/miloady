import { Environment, OrbitControls, Loader } from "@react-three/drei";
import Points from "./Points";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
const EnvoirnmentComp = () => {
  const [one, two, three, four, five, six] = useLoader(TextureLoader, [
    "/1.jpg", // Positive X
    "/2.jpg", // Negative X
    "/3.jpg", // Positive Y
    "/4.jpg", // Negative Y
    "/5.jpg", // Positive Z
    "/6.jpg", // Negative Z
  ])
  console.log(one.image.currentSrc);

  return (
    <>
      <group>
        <OrbitControls autoRotate autoRotateSpeed={0.5} />
        <Points />
        <Environment
          background
          files={[
            one.image.currentSrc, // Positive X
            two.image.currentSrc, // Negative X
            three.image.currentSrc, // Positive Y
            four.image.currentSrc, // Negative Y
            five.image.currentSrc, // Positive Z
            six.image.currentSrc, // Negative Z
          ]}
        />
      </group>
    </>
  );
};

export default EnvoirnmentComp;
