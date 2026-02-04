// components/BurgerScene.tsx
import { Canvas } from "@react-three/fiber/native";
import GltfModel from "@/components/atoms/GltfModel";
import { calcularPosicion, type IngredienteKey } from "../lib/constants/ingredientes";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { endEvent } from "react-native/Libraries/Performance/Systrace";
import { PixelRatio } from "react-native";
import { jsiConfigureProps } from "react-native-reanimated/lib/typescript/core";

interface BurgerSceneProps {
  burger: IngredienteKey[];
  ingredientesUris: Record<string, string>;
}

export default function BurgerScene({ burger, ingredientesUris }: BurgerSceneProps) {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} />
      
      {burger.map((item, index) => (
        <GltfModel
          key={`${item}-${index}`}
          src={ingredientesUris[item]}
          position={[0, calcularPosicion(burger, index), 0]}
          scale={1}
        />
      ))}
    </Canvas>
  );
}