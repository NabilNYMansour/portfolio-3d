import { Environment, Loader, SoftShadows, Text3D, useCursor } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { LaptopModel } from "./components/LaptopModel";
import Icon3D from "./components/Icon3D";
import { nextIcon } from "./utils/Icons";
import { mdiReact, mdiUnity, mdiYoutube, mdiCube } from '@mdi/js';
import IntroText3D from "./components/IntroText3D";
import { isMobile } from 'react-device-detect';

const icons = [
  { name: "nextjs", path: nextIcon, color: "black" },
  { name: "react", path: mdiReact, color: "#5ED3F3" },
  { name: "unity", path: mdiUnity, color: "green" },
  { name: "youtube", path: mdiYoutube, color: "#FF4950" },
  { name: "cube", path: mdiCube, color: "#E28B1A" }
]

const Main = () => {
  const laptop = useRef<THREE.Group>(null);
  const [onLaptop, setOnLaptop] = useState(false);
  const [laptopHovered, LaptopHover] = useState(false);
  const [laptopHoveredHTML, setLaptopHoverHTML] = useState(false);
  const [lookAtPos, setLookAtPos] = useState(new THREE.Vector3(0, 0, 0));

  // const { viewport, camera } = useThree();

  const heyText = useRef<THREE.Group>(null);
  const goBack = useRef<THREE.Group>(null);
  const [goBackHovered, setGoBackHover] = useState(false);
  const [iconsHovered, setIconsHover] = useState(false);
  const nabil = useRef<THREE.Group>(null);
  const [nabilHovered, setNabilHover] = useState(false);

  const [background, setBackground] = useState("#EEEEF1");
  const [selectedApp, setSelectedApp] = useState<string>("");
  const [description, setDescription] = useState<string>(`
Click on an icon or
  the laptop to
  get started.`.trim());

  useCursor(((laptopHovered || laptopHoveredHTML || nabilHovered || iconsHovered) && !onLaptop) || goBackHovered, "pointer");

  useEffect(() => {
    switch (selectedApp) {
      case "nextjs":
        setBackground("#2C2C2C");
        setDescription("Next.js is Best.js");
        break;
      case "react":
        setBackground("#5ED3F3");
        setDescription("React is my go-to library");
        break;
      case "unity":
        setBackground("#1AD175");
        setDescription("Unity never gets old");
        break;
      case "youtube":
        setBackground("#FF4950");
        setDescription("I make videos sometimes");
        break;
      case "cube":
        setBackground("#F7A517");
        setDescription("They call me shaderman");
        break;
      default:
        setBackground("#26252A");
        setDescription(`
Click on an icon or
  the laptop to
  get started.`.trim());
        break;
    }
  }, [selectedApp]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (laptop.current) {
      if ((laptopHovered || laptopHoveredHTML) && !onLaptop) {
        laptop.current.scale.x = THREE.MathUtils.lerp(laptop.current.scale.x, 10.5, 0.1);
        laptop.current.scale.y = THREE.MathUtils.lerp(laptop.current.scale.y, 10.5, 0.1);
        laptop.current.scale.z = THREE.MathUtils.lerp(laptop.current.scale.z, 10.5, 0.1);
      } else {
        laptop.current.scale.x = THREE.MathUtils.lerp(laptop.current.scale.x, 10, 0.1);
        laptop.current.scale.y = THREE.MathUtils.lerp(laptop.current.scale.y, 10, 0.1);
        laptop.current.scale.z = THREE.MathUtils.lerp(laptop.current.scale.z, 10, 0.1);
      }

      if (onLaptop) {
        laptop.current.rotation.x = THREE.MathUtils.lerp(laptop.current.rotation.x, 0.25, 0.1);
        laptop.current.rotation.y = THREE.MathUtils.lerp(laptop.current.rotation.y, 0, 0.1);
        laptop.current.rotation.z = THREE.MathUtils.lerp(laptop.current.rotation.z, 0, 0.1);
        laptop.current.position.y = THREE.MathUtils.lerp(laptop.current.position.y, -1.5, 0.1);

        state.camera.position.lerp(new THREE.Vector3(0, 0, 0.5), 0.05);
        setLookAtPos(lookAtPos.lerp(new THREE.Vector3(0, 0, 0), 0.05));
      } else {
        laptop.current.rotation.x = THREE.MathUtils.lerp(laptop.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1);
        laptop.current.rotation.y = THREE.MathUtils.lerp(laptop.current.rotation.y, Math.sin(t / 4) / 10, 0.1);
        laptop.current.rotation.z = THREE.MathUtils.lerp(laptop.current.rotation.z, Math.sin(t / 8) / 10, 0.1);
        laptop.current.position.y = THREE.MathUtils.lerp(laptop.current.position.y, (-1.5 + Math.sin(t / 2)) / 3, 0.1);

        state.camera.position.lerp(new THREE.Vector3(2, 2, 3), 0.02);
        setLookAtPos(lookAtPos.lerp(new THREE.Vector3(0, 0.5, 1), 0.02));
      }
    }
    if (nabil.current) {
      if (nabilHovered && !laptopHoveredHTML && !laptopHovered) {
        nabil.current.scale.x = THREE.MathUtils.lerp(nabil.current.scale.x, 1.2, 0.1);
        nabil.current.scale.y = THREE.MathUtils.lerp(nabil.current.scale.y, 1.2, 0.1);
        nabil.current.scale.z = THREE.MathUtils.lerp(nabil.current.scale.z, 1.2, 0.1);
      } else {
        nabil.current.scale.x = THREE.MathUtils.lerp(nabil.current.scale.x, 1, 0.1);
        nabil.current.scale.y = THREE.MathUtils.lerp(nabil.current.scale.y, 1, 0.1);
        nabil.current.scale.z = THREE.MathUtils.lerp(nabil.current.scale.z, 1, 0.1);
      }

      nabil.current.rotation.z = THREE.MathUtils.lerp(nabil.current.rotation.z, Math.sin(t / 5) / 20, 0.1);
      nabil.current.position.y = THREE.MathUtils.lerp(nabil.current.position.y, Math.sin(t / 2) / 50, 0.1);
    }
    if (heyText.current) {
      heyText.current.rotation.z = THREE.MathUtils.lerp(heyText.current.rotation.z, Math.sin(t / 5) / 20, 0.1)
      heyText.current.position.y = THREE.MathUtils.lerp(heyText.current.position.y, Math.sin(t / 2) / 50, 0.1);
    }
    if (goBack.current) {
      if (onLaptop) {
        goBack.current.position.y = THREE.MathUtils.lerp(goBack.current.position.y, 0.24, 0.1);
      } else {
        goBack.current.position.y = THREE.MathUtils.lerp(goBack.current.position.y, 10, 0.1);
      }
      if (goBackHovered && !laptopHoveredHTML && !laptopHovered) {
        goBack.current.scale.x = THREE.MathUtils.lerp(goBack.current.scale.x, 1.2, 0.1);
        goBack.current.scale.y = THREE.MathUtils.lerp(goBack.current.scale.y, 1.2, 0.1);
        goBack.current.scale.z = THREE.MathUtils.lerp(goBack.current.scale.z, 1.2, 0.1);
      } else {
        goBack.current.scale.x = THREE.MathUtils.lerp(goBack.current.scale.x, 1, 0.1);
        goBack.current.scale.y = THREE.MathUtils.lerp(goBack.current.scale.y, 1, 0.1);
        goBack.current.scale.z = THREE.MathUtils.lerp(goBack.current.scale.z, 1, 0.1);
      }

    }
    state.camera.lookAt(lookAtPos);
  })

  // useEffect(() => {
  //   const ratio = viewport.width / viewport.height;
  //   camera.zoom = ratio * 9 / 16;
  // }, [viewport]);

  return (
    <>
      <color attach="background" args={[background]} />

      <group ref={laptop} scale={10}>

        <group ref={goBack} rotation-x={-Math.PI / 9} position={[-0.25, 0.25, -0.25]}
          onClick={() => setOnLaptop(false)}
          onPointerEnter={() => setGoBackHover(true)}
          onPointerLeave={() => setGoBackHover(false)}>
          <Text3D
            curveSegments={32}
            height={0.005}
            castShadow size={0.02} font="/Inter_Bold.json">
            Go back
            <meshStandardMaterial color="white" />
          </Text3D>
          <mesh position={[0.055, 0.01, 0]}>
            <planeGeometry args={[0.12, 0.03]} />
            <meshStandardMaterial transparent opacity={0} />
          </mesh>
        </group>

        <group
          onClick={() => setOnLaptop(true)}
          onPointerEnter={() => LaptopHover(true)}
          onPointerLeave={() => LaptopHover(false)}>
          <LaptopModel selected={onLaptop} setSelected={setOnLaptop} setHoverHTML={setLaptopHoverHTML}
            selectedApp={selectedApp} />
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            position={[-0.165, 0, 0.155]}>
            <Text3D
              curveSegments={32}
              height={0.005}
              castShadow size={0.02} font="/Inter_Bold.json">
              {/* ↑ Click me ↑ */}
              {description}
              <meshStandardMaterial color={background} />
              {/* <meshNormalMaterial /> */}
            </Text3D>
            <mesh position={[0.125, -0.03, 0]}>
              <planeGeometry args={[0.25, 0.125]} />
              <meshStandardMaterial transparent opacity={0} />
            </mesh>
          </group>
        </group>

      </group>

      <group position={[-2, -0.25, 3]} rotation={[0, Math.PI / 2, 0]}>
        <IntroText3D heyText={heyText} nabil={nabil} setSelectedApp={setSelectedApp} setNabilHover={setNabilHover} />
        <group position={[-0.5, 0, 0]}
          onPointerEnter={() => setIconsHover(true)}
          onPointerLeave={() => setIconsHover(false)}
        >
          {icons.map((icon, i) => (
            <Icon3D key={i} path={icon.path} color={selectedApp === icon.name ? "white" : icon.color}
              position={[i * 0.7, i * 0.15, 0]} scale={1} selected={selectedApp === icon.name}
              onClick={() => setSelectedApp(icon.name)}
            />
          ))}
        </group>
      </group>
    </>
  )
}

function App() {
  if (isMobile) {
    window.location.href = "https://nabilmansour.com";
    return null;
  }

  return (
    <>
      <Loader />
      <Canvas shadows camera={{ position: [2, 2, 3] }}>
        <Environment preset="city" />
        <SoftShadows size={20} focus={0.5} samples={50} />
        <ambientLight intensity={0.5} />
        <directionalLight castShadow position={[2.5, 8, 2]} intensity={1.5} shadow-mapSize={1024}>
          <orthographicCamera attach="shadow-camera" args={[-5, 5, -5, 5, 0.1, 15]} />
        </directionalLight>
        <Suspense fallback={null}>
          <Main />
        </Suspense>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
      </Canvas>
    </>
  )
}

export default App;


