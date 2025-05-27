// import React, { Suspense, useEffect } from 'react';
// import { Canvas, useThree, useFrame } from '@react-three/fiber';
// import { OrbitControls, Environment, Text } from '@react-three/drei';
// import CarModel from './CarModel2.jsx';

// const LoadingIndicator = () => (
//   <Text position={[0, 0, 0]} fontSize={0.5} color="white">
//     Loading...
//   </Text>
// );

// const Scene = () => {
//   const { camera, size } = useThree();
//   const aspect = size.width / size.height;
//   const lightRef = React.useRef();
//   const carLightRef = React.useRef();
//   const carRef = React.useRef();

//   const referenceWidth = 30000;
//   const baseScale = 2.0;
//   const maxScaleFactor = 1.2;
//   const scaleFactor = Math.min(
//     (size.width / referenceWidth) * baseScale,
//     maxScaleFactor * baseScale
//   );

//   const getCameraSettings = () => {
//     const is2xl = size.width >= 1536;
//     const isMobile = size.width <= 640;
//     return {
//       position: isMobile ? [3, 1.5, 8] : is2xl ? [3, 0.8, 5] : [50, 25, 30],
//       fov: isMobile ? 60 : is2xl ? 45 : 50,
//       near: 0.1,
//       far: 30,
//     };
//   };

//   useEffect(() => {
//     const { position, fov, near, far } = getCameraSettings();
//     camera.position.set(...position);
//     camera.fov = fov;
//     camera.aspect = aspect;
//     camera.near = near;
//     camera.far = far;
//     camera.updateProjectionMatrix();
//   }, [camera, size, aspect]);

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     // Main light orbit
//     const radius = 5;
//     const speed = 0.5;
//     if (lightRef.current) {
//       lightRef.current.position.set(
//         Math.cos(t * speed) * radius,
//         1,
//         Math.sin(t * speed) * radius
//       );
//     }
//     // Car spotlight orbit
//     const carLightRadius = 8;
//     const carLightSpeed = 0.8;
//     if (carLightRef.current) {
//       carLightRef.current.position.set(
//         Math.cos(t * carLightSpeed) * carLightRadius,
//         0.5,
//         Math.sin(t * carLightSpeed) * carLightRadius
//       );
//     }
//     // Rotate the car model
//     if (carRef.current) {
//       carRef.current.rotation.y = -t * 0.5; // Slow rotation on Y-axis
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.8} />
//       <directionalLight position={[5, 5, 7]} intensity={1.2} />
//       <pointLight
//         ref={lightRef}
//         intensity={2}
//         distance={10}
//         color="#a78bfa"
//         position={[5, 1, 0]}
//       />
//       <pointLight
//         ref={carLightRef}
//         intensity={1.5}
//         distance={8}
//         color="#ffffff"
//         position={[3, 0.5, 0]}
//       />
//       <Suspense fallback={<LoadingIndicator />}>
//         <group ref={carRef}>
//           <CarModel position={[0.4, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} />
//         </group>
//       </Suspense>
//       <OrbitControls enableZoom={false} minDistance={4} maxDistance={4} />
//       <Environment preset="city" />
//     </>
//   );
// };

// const LandingPage3 = () => {
//   return (
//     <>
//       <style>
//         {`
//           @keyframes gradient {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//           @keyframes slide-in {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           @keyframes fade-scale {
//             0% { opacity: 0; transform: scale(0.9); }
//             100% { opacity: 1; transform: scale(1); }
//           }
//           @keyframes bounce-in {
//             0% { opacity: 0; transform: translateY(30px) scale(0.8); }
//             60% { opacity: 1; transform: translateY(-10px) scale(1.05); }
//             100% { opacity: 1; transform: translateY(0) scale(1); }
//           }
//           @keyframes pulse {
//             0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0.7); }
//             70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(167, 139, 250, 0); }
//             100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(167, 139, 250, 0); }
//           }
//           @keyframes light-move {
//             0% { background-position: -100px 0; }
//             100% { background-position: 300px 0; }
//           }
//           @keyframes particle-float {
//             0% { transform: translateY(0); opacity: 0.5; }
//             50% { opacity: 0.8; }
//             100% { transform: translateY(-100vh); opacity: 0; }
//           }
//           .animate-gradient { 
//             animation: gradient 8s ease infinite; 
//           }
//           .animate-slide-in { 
//             animation: slide-in 0.5s ease-out forwards; 
//           }
//           .fade-scale { 
//             animation: fade-scale 1s ease-out forwards; 
//           }
//           .bounce-in { 
//             animation: bounce-in 0.8s ease-out forwards; 
//           }
//           .pulse-button { 
//             animation: pulse 2s infinite; 
//           }
//           .card-light {
//             position: relative;
//             overflow: hidden;
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }
//           .card-light:hover {
//             transform: scale(1.05);
//             box-shadow: 0 0 20px rgba(167, 139, 250, 0.5);
//           }
//           .card-light:hover::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             right: 0;
//             bottom: 0;
//             background: radial-gradient(circle at 50px 50px, rgba(255, 255, 255, 0.3) 0%, transparent 50%);
//             animation: light-move 1s linear forwards;
//             pointer-events: none;
//           }
//           .text-metallicgold { 
//             color: #ffffff; 
//           }
//           .particle {
//             position: absolute;
//             width: 4px;
//             height: 4px;
//             background: rgba(167, 139, 250, 0.5);
//             border-radius: 50%;
//             animation: particle-float 10s linear infinite;
//             pointer-events: none;
//           }
//         `}
//       </style>
//       <div className="z-10 relative min-h-screen w-full bg-black bg-[length:200%_100%] animate-gradient overflow-hidden">
//         {/* Particle Background */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="particle"
//             style={{
//               left: `${Math.random() * 100}vw`,
//               top: `${Math.random() * 100}vh`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${5 + Math.random() * 5}s`,
//             }}
//           />
//         ))}
//         <div className="w-full h-screen rounded-[40px] overflow-hidden flex flex-col mx-auto max-w-7xl relative z-10">
//           <div className="p-12 text-center text-white bg-[length:200%_100%] animate-gradient">
//             <h1 className="text-5xl font-thin mb-4 font-Audiowide text-metallicgold fade-scale">
//               Get Your Dream Car Now
//             </h1>
//             <p
//               className="text-lg font-Montserrat fade-scale"
//               style={{ animationDelay: '0.3s' }}
//             >
//               Discover your perfect ride today!
//             </p>
//             <div className="mt-8 flex justify-center gap-6 flex-wrap">
//               <div
//                 className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-48 card-light bounce-in"
//                 style={{ animationDelay: '0.3s' }}
//               >
//                 <h3 className="text-xl font-Melodrama text-metallicgold">Speed</h3>
//                 <p className="text-sm font-Nunito text-gray-300">0-60 mph in 2.5s</p>
//               </div>
//               <div
//                 className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-48 card-light bounce-in"
//                 style={{ animationDelay: '0.5s' }}
//               >
//                 <h3 className="text-xl font-Melodrama text-metallicgold">Luxury</h3>
//                 <p className="text-sm font-Nunito text-gray-300">Premium leather interiors</p>
//               </div>
//               <div
//                 className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-48 card-light bounce-in"
//                 style={{ animationDelay: '0.7s' }}
//               >
//                 <h3 className="text-xl font-Melodrama text-metallicgold">Eco-Friendly</h3>
//                 <p className="text-sm font-Nunito text-gray-300">Zero-emission electric</p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full min-h-10/12">
//             <Canvas>
//               <Scene />
//             </Canvas>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LandingPage3;
 

import React, { Suspense, useEffect, useMemo, useCallback, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import { debounce } from 'lodash';  
import CarModel from './CarModel2.jsx';

const LoadingIndicator = () => (
  <Text position={[0, 0, 0]} fontSize={0.5} color="white">
    Loading...
  </Text>
);

const Scene = () => {
  const { camera, size } = useThree();
  const lightRef = useRef();
  const carLightRef = useRef();
  const carRef = useRef();

  // Memoize camera settings to avoid recalculations
  const cameraSettings = useMemo(() => {
    const isMobile = size.width <= 640;
    const is2xl = size.width >= 1536;
    return {
      position: isMobile ? [3, 1.5, 8] : is2xl ? [3, 0.8, 5] : [5, 2.5, 7],
      fov: isMobile ? 60 : is2xl ? 45 : 50,
      near: 0.1,
      far: 20, // Reduced far plane for better depth precision
    };
  }, [size.width]);

  // Memoize scale factor
  const scaleFactor = useMemo(() => {
    const referenceWidth = 30000; // Adjusted for common screen sizes
    const baseScale = 2.0;
    const maxScaleFactor = 1.2;
    return Math.min((size.width / referenceWidth) * baseScale, maxScaleFactor * baseScale);
  }, [size.width]);

  // Debounced camera update
  const updateCamera = useCallback(
    debounce(() => {
      camera.position.set(...cameraSettings.position);
      camera.fov = cameraSettings.fov;
      camera.aspect = size.width / size.height;
      camera.near = cameraSettings.near;
      camera.far = cameraSettings.far;
      camera.updateProjectionMatrix();
    }, 100),
    [camera, cameraSettings, size]
  );

  useEffect(() => {
    updateCamera();
    return () => updateCamera.cancel(); // Cleanup debounce
  }, [updateCamera]);

  // Optimized useFrame for animations
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5; // Reduced frequency for smoother animation
    if (lightRef.current) {
      lightRef.current.position.set(
        Math.cos(t) * 4, // Reduced radius
        1,
        Math.sin(t) * 4
      );
    }
    if (carLightRef.current) {
      carLightRef.current.position.set(
        Math.cos(t * 1.6) * 6, // Adjusted radius and speed
        0.5,
        Math.sin(t * 1.6) * 6
      );
    }
    if (carRef.current) {
      carRef.current.rotation.y = -t * 0.3; // Slower rotation
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} /> {/* Reduced intensity */}
      <pointLight
        ref={lightRef}
        intensity={1.5} // Lower intensity
        distance={8}
        color="#a78bfa"
        position={[4, 1, 0]}
      />
      <pointLight
        ref={carLightRef}
        intensity={1}
        distance={6}
        color="#ffffff"
        position={[3, 0.5, 0]}
      />
      <Suspense fallback={<LoadingIndicator />}>
        <group ref={carRef}>
          <CarModel position={[0.4, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} />
        </group>
      </Suspense>
      <OrbitControls enableZoom={false} minDistance={4} maxDistance={4} />
      <Environment preset="city" />
    </>
  );
};

const LandingPage3 = () => {
  return (
    <>
      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes slide-in {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fade-scale {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes bounce-in {
            0% { opacity: 0; transform: translateY(20px); }
            60% { opacity: 1; transform: translateY(-5px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.03); }
            100% { transform: scale(1); }
          }
          .animate-gradient { 
            animation: gradient 10s ease infinite; /* Slower for less CPU usage */
          }
          .animate-slide-in { 
            animation: slide-in 0.6s ease-out forwards; 
          }
          .fade-scale { 
            animation: fade-scale 0.8s ease-out forwards; 
          }
          .bounce-in { 
            animation: bounce-in 0.7s ease-out forwards; 
          }
          .pulse-button { 
            animation: pulse 2.5s infinite; /* Slower pulse */
          }
          .card-light {
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .card-light:hover {
            transform: scale(1.03); /* Reduced scale */
            box-shadow: 0 0 15px rgba(167, 139, 250, 0.4);
          }
          .text-metallicgold { 
            color: #ffffff; 
          }
          .particle {
            position: absolute;
            width: 3px; /* Smaller particles */
            height: 3px;
            background: rgba(167, 139, 250, 0.4);
            border-radius: 50%;
            animation: particle-float 8s linear infinite;
            pointer-events: none;
          }
          @keyframes particle-float {
            0% { transform: translateY(0); opacity: 0.4; }
            100% { transform: translateY(-80vh); opacity: 0; }
          }
        `}
      </style>
      <div className="z-10 relative min-h-screen w-full bg-black bg-[length:200%_100%] animate-gradient overflow-hidden">
        {/* Reduced number of particles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
        <div className="w-full h-screen rounded-[30px] overflow-hidden flex flex-col mx-auto max-w-6xl relative z-10">
          <div className="p-8 text-center text-white bg-[length:200%_100%] animate-gradient">
            <h1 className="text-4xl font-light mb-3 font-Audiowide text-metallicgold fade-scale">
              Get Your Dream Car Now
            </h1>
            <p
              className="text-base font-Montserrat fade-scale"
              style={{ animationDelay: '0.2s' }}
            >
              Discover your perfect ride today!
            </p>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              <div
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg w-40 card-light bounce-in"
                style={{ animationDelay: '0.2s' }}
              >
                <h3 className="text-lg font-Melodrama text-metallicgold">Speed</h3>
                <p className="text-xs font-Nunito text-gray-300">0-60 mph in 2.5s</p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg w-40 card-light bounce-in"
                style={{ animationDelay: '0.4s' }}
              >
                <h3 className="text-lg font-Melodrama text-metallicgold">Luxury</h3>
                <p className="text-xs font-Nunito text-gray-300">Premium leather interiors</p>
              </div>
              <div
                className="bg-white/10 backdrop-blur-sm p-3 rounded-lg w-40 card-light bounce-in"
                style={{ animationDelay: '0.6s' }}
              >
                <h3 className="text-lg font-Melodrama text-metallicgold">Eco-Friendly</h3>
                <p className="text-xs font-Nunito text-gray-300">Zero-emission electric</p>
              </div>
            </div>
          </div>
          <div className="w-full flex-1">
            <Canvas
              gl={{ antialias: true, powerPreference: 'high-performance' }}
              dpr={[1, 1.5]} // Limit DPR for performance
            >
              <Scene />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage3;