 

import React from 'react';
import { useGLTF } from '@react-three/drei';

export default function CarModel(props) {
  const { scene } = useGLTF('/models/car.gltf'); // update path as needed
  return <primitive object={scene} {...props} />;
}
useGLTF.preload('/models/car.gltf'); // update path as needed