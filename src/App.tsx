import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, Stage } from '@react-three/drei';
import Victor from './models/Victor'
import Room from './models/Room'
import Menu from './components/Menu'
import Lina from './posters/Lina'
import DoomEternal from './posters/DoomEternal'
import Ragnaros from './posters/Ragnaros'
import YourName from './posters/YourName'
import Tracer from './posters/Tracer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
   const [animation, setAnimation] = useState('Standing');

   return (
      <>
         <Menu selectAnimation={setAnimation} />
         <Canvas
            camera={{ fov: 24 }}
            dpr={[1, 20]}
            style={{
               backgroundColor: 'transparent',
               width: '100vw',
               height: '100vh',
            }}
         >
            <Suspense fallback={null}>
               <PresentationControls zoom={1} rotation={[0.15, -Math.PI / 4, 0]} speed={1} polar={[0, Math.PI]} azimuth={[-Infinity, Infinity]}>
                  <Stage intensity={1} contactShadow={false} preset="rembrandt" environment="city">
                     <Room position={[-0.28, 0, 0]} />
                     <Victor runAnimation={animation} />
                     <Lina />
                     <Ragnaros />
                     <DoomEternal />
                     <Tracer />
                     <YourName />
                  </Stage>
               </PresentationControls>
               <gridHelper />
            </Suspense>

         </Canvas>
      </>
   );
}

export default App;
