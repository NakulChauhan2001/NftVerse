import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Temp from "./Temp";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <Canvas clasName="canvas">
        <OrbitControls enableZoom={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Temp />
        </Suspense>
      </Canvas>
    </div>
  );
}
