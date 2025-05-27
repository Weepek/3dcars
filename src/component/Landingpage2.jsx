
import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
// import CarModel1 from './CarModel.jsx';
import Ferrari from './CarModel1.jsx';

const LoadingIndicator = () => (
  <Text position={[0, 0, 0]} fontSize={0.5} color="white">
    Loading...
  </Text>
);

const Scene = () => {
  const { camera, size } = useThree();
  const aspect = size.width / size.height;

  const referenceWidth = 1000;
  const baseScale = 70;
  const maxScaleFactor = 1.2;
  const scaleFactor = Math.min(
    (size.width / referenceWidth) * baseScale,
    maxScaleFactor * baseScale
  );

  const getCameraSettings = () => {
    const is2xl = size.width >= 1536;
    const isMobile = size.width <= 640;
    return {
      position: isMobile ? [3, 1.5, 8] : is2xl ? [3, 0.8, 5] : [3.5, 1, 8],
      fov: isMobile ? 60 : is2xl ? 45 : 50,
      near: 0.1,
      far: 30,
    };
  };

  useEffect(() => {
    const { position, fov, near, far } = getCameraSettings();
    camera.position.set(...position);
    camera.fov = fov;
    camera.aspect = aspect;
    camera.near = near;
    camera.far = far;
    camera.updateProjectionMatrix();
  }, [camera, size, aspect]);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 7]} intensity={1.5} />
      <Suspense fallback={<LoadingIndicator />}>
        <Ferrari position={[0.4, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} />
      </Suspense>
      <OrbitControls enableZoom={false} minDistance={4} maxDistance={4} />
      <Environment preset="city" />
    </>
  );
};

const LandingPage2 = () => {
  return (
    <div className="z-10 relative min-h-screen w-full bg-black bg-[length:200%_100%] animate-gradient ">
    
      <div className="w-full h-screen rounded-[40px] overflow-hidden flex flex-col mx-auto max-w-7xl">
        <div className="p-12 text-center text-white bg-[length:200%_100%] animate-gradient">
          <h1 className="text-5xl font-medium mb-4 font-Melodrama text-metallicgold">Get Your Dream Car Now</h1>
          <p className="text-lg font-Nunito">Discover your perfect ride today!</p>
          {/* <button className="mt-6 px-8 py-3 text-lg font-Nunito font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full pulse-button hover:bg-gradient-to-l hover:from-purple-700 hover:to-indigo-700 transition duration-300 animate-bounce-in glow-effect">
            Find Your Dream
          </button> */}
          <div className="mt-8 flex justify-center gap-6 flex-wrap">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-48 hover:scale-105 transition-transform duration-300 animate-slide-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-Melodrama text-metallicgold">Speed</h3>
              <p className="text-sm font-Nunito text-gray-300">0-60 mph in 2.5s</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-48 hover:scale-105 transition-transform duration-300 animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-Melodrama text-metallicgold">Luxury</h3>
              <p className="text-sm font-Nunito text-gray-300">Premium leather interiors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-48 hover:scale-105 transition-transform duration-300 animate-slide-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-Melodrama text-metallicgold">Eco-Friendly</h3>
              <p className="text-sm font-Nunito text-gray-300">Zero-emission electric</p>
            </div>
          </div>
        </div>
        <div className="w-full min-h-10/12">
          <Canvas>
            <Scene />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;