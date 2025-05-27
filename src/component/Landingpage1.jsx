 
 
// // work 

// import React, { Suspense, useEffect } from 'react';
// import { Canvas, useThree } from '@react-three/fiber';
// import { OrbitControls, Environment, Text } from '@react-three/drei';
// import CarModel from './CarModel.jsx';

// const LoadingIndicator = () => (
//   <Text position={[0, 0, 0]} fontSize={0.5} color="white">
//     Loading...
//   </Text>
// );

// // const Scene = () => {
// //   const { camera, size } = useThree();
// //   const aspect = size.width / size.height;

// //   const referenceWidth = 1000;
// //   const baseScale = 70;
// //   const scaleFactor = (size.width / referenceWidth) * baseScale;

  

// //   useEffect(() => {
// //     camera.position.set(2.5,1,6);
// //     camera.fov = 50;
// //     camera.aspect = aspect;
// //     camera.near = 0.1;
// //     camera.far = 30;
// //     camera.updateProjectionMatrix();
// //   }, [camera, size, aspect]);

// const Scene = () => {
//   const { camera, size } = useThree();
//   const aspect = size.width / size.height;

//   // Responsive scaling logic
//   const referenceWidth = 1000;
//   const baseScale = 70;
//   // Cap the scaleFactor to prevent excessive scaling on large screens
//   const maxScaleFactor = 1.2; // Adjust this value to limit max size
//   const scaleFactor = Math.min(
//     (size.width / referenceWidth) * baseScale,
//     maxScaleFactor * baseScale
//   );

//   // Adjust camera properties based on screen size
//   const getCameraSettings = () => {
//     const is2xl = size.width >= 1536; // Tailwind's 2xl breakpoint
//     const isMobile = size.width <= 640; // Tailwind's sm breakpoint

//     return {
//       position: isMobile ? [3, 1.5, 8] : is2xl ? [2, 0.8, 5] : [2.5, 1, 6],
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

//   return (
//     <>
//       <ambientLight intensity={1} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <Suspense fallback={<LoadingIndicator />}>
//         <CarModel position={[0.5, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} />
//       </Suspense>
//       <OrbitControls enableZoom={false} minDistance={4} maxDistance={4} />
//       <Environment preset="city" />
//     </>
//   );
// };

// const LandingPage1 = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full  bg-black  ">
//       <div className="w-full  h-screen  rounded-[40px] overflow-hidden flex flex-col">
        
//         {/* Top: Text */}
//         <div className="p-12 text-center text-white bg-purple-800 ">
//           <h1 className="text-5xl font-medium mb-4 font-Melodrama text-metaalicgold ">Get Your Dream Car Now</h1>
//           <p className="text-lg font-Nunito">Discover your perfect ride today!</p>

//           <button className='mt-6 '>Dream</button>
//         </div>

//         {/* Bottom: Model */}
//         <div className=" w-full  min-h-10/12">
//           <Canvas>
//             <Scene />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage1;



// import React, { Suspense, useEffect } from 'react';
// import { Canvas, useThree } from '@react-three/fiber';
// import { OrbitControls, Environment, Text } from '@react-three/drei';
// import CarModel from './CarModel.jsx';

// const LoadingIndicator = () => (
//   <Text position={[0, 0, 0]} fontSize={0.5} color="white">
//     Loading...
//   </Text>
// );

// const Scene = () => {
//   const { camera, size } = useThree();
//   const aspect = size.width / size.height;

//   const referenceWidth = 1000;
//   const baseScale = 70;
//   const maxScaleFactor = 1.2;
//   const scaleFactor = Math.min(
//     (size.width / referenceWidth) * baseScale,
//     maxScaleFactor * baseScale
//   );

//   const getCameraSettings = () => {
//     const is2xl = size.width >= 1536;
//     const isMobile = size.width <= 640;
//     return {
//       position: isMobile ? [3, 1.5, 8] : is2xl ? [3, 0.8, 5] : [2.5, 1, 6],
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

//   return (
//     <>
//       <ambientLight intensity={1} />
//       <directionalLight position={[5, 5, 5]} intensity={1.5} />
//       <Suspense fallback={<LoadingIndicator />}>
//         <CarModel position={[0.5, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} />
//       </Suspense>
//       <OrbitControls enableZoom={false} minDistance={4} maxDistance={4} />
//       <Environment preset="city" />
//     </>
//   );
// };

// const LandingPage1 = () => {
//   return (
//     <div className="flex flex-col items-center justify-center w-full bg-black">
//       <div className="w-full h-screen rounded-[40px] overflow-hidden flex flex-col">
//         <div className="p-12 text-center text-white ">
//           <h1 className="text-5xl font-medium mb-4 font-Melodrama text-metaalicgold">Get Your Dream Car Now</h1>
//           <p className="text-lg font-Nunito">Discover your perfect ride today!</p>
//           <button className="mt-6 px-8 py-3 text-lg font-Nunito font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full pulse-button hover:bg-gradient-to-l hover:from-purple-700 hover:to-indigo-700 transition duration-300 ">
//             Find Your Dream
//           </button>
//         </div>
//         <div className=" w-full min-h-10/12">
//           <Canvas>
//             <Scene />
//           </Canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage1;


// new page with changed design 
import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Text } from '@react-three/drei';
import Navbar from './Navbar.jsx';
import CarModel from './CarModel.jsx';

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
        <CarModel position={[0.4, 0, 0]} scale={[scaleFactor, scaleFactor, scaleFactor]} />
      </Suspense>
      <OrbitControls enableZoom={false} minDistance={4} maxDistance={4} />
      <Environment preset="city" />
    </>
  );
};

const LandingPage1 = () => {
  return (
    <div className="z-10 relative min-h-screen w-full bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-800 bg-[length:200%_100%] animate-gradient ">
    
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

export default LandingPage1;