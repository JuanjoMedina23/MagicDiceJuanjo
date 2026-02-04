// components
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber/native';
import { useGLTF } from '@react-three/drei/native';
import * as THREE from 'three';

interface GltfModelProps {
  src: any;
  position?: [number, number, number];
  scale?: number;
  rotation?: [number, number, number];
}

export default function GltfModel({ 
  src, 
  position = [0, 0, 0], 
  scale = 1,
  rotation = [0, 0, 0]
}: GltfModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  
  // Debug: ver qué tipo de dato es src
  useEffect(() => {
    console.log('🔍 GltfModel src:', src);
    console.log('🔍 Tipo de src:', typeof src);
  }, [src]);
  
  // Cargar el modelo GLTF
  const gltf = useGLTF(src) as any;
  
  // Debug: ver si el modelo se cargó
  useEffect(() => {
    if (gltf?.scene) {
      console.log(' Modelo cargado correctamente');
    } else {
      console.error(' Error: modelo no tiene scene', gltf);
    }
  }, [gltf]);
  
  // Clonar la escena para evitar problemas con múltiples instancias
  const clonedScene = gltf.scene?.clone() || gltf.clone();
  
  // Opcional: rotaci0n sutil
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <primitive 
      ref={meshRef}
      object={clonedScene} 
      position={position} 
      scale={scale}
      rotation={rotation}
    />
  );
}