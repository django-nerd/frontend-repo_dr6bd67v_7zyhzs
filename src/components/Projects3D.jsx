import { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Preload, Detailed } from '@react-three/drei';
import { motion } from 'framer-motion';

function NeonMaterial({ color = '#00F0FF', emissive = '#00F0FF', opacity = 0.9 }) {
  return (
    <meshStandardMaterial
      color={color}
      emissive={emissive}
      emissiveIntensity={1.2}
      transparent
      opacity={opacity}
      roughness={0.2}
      metalness={0.6}
    />
  );
}

function ProjectPanel({ position = [0, 0, 0], rotation = [0, 0, 0], accent = '#00F0FF', title = '', index = 0, onSelect }) {
  const distances = useMemo(() => [6, 12], []);
  return (
    <group position={position} rotation={rotation}>
      <Detailed distances={distances}>
        {/* High detail */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.2, 1.3, 0.12, 16, 16, 2]} />
          <NeonMaterial color="#0b0b0b" emissive={accent} opacity={0.9} />
        </mesh>
        {/* Low detail */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.2, 1.3, 0.12, 1, 1, 1]} />
          <NeonMaterial color="#0b0b0b" emissive={accent} opacity={0.85} />
        </mesh>
      </Detailed>
      {/* Glow accent ring */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[0, 0, 0.08]}>
          <ringGeometry args={[0.5, 0.52, 64]} />
          <meshBasicMaterial color={accent} transparent opacity={0.6} />
        </mesh>
      </Float>
      {/* Title and hotspot */}
      <Html position={[0, 0.85, 0]} center distanceFactor={6} transform>
        <div className="flex flex-col items-center">
          <span className="px-3 py-1 rounded-full text-xs md:text-sm bg-white/5 border border-white/10 text-white/80 backdrop-blur">
            {title}
          </span>
          <button
            onClick={() => onSelect?.(index)}
            className="mt-2 px-3 py-1.5 rounded-md bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/30 text-cyan-300 text-xs md:text-sm transition-colors"
          >
            View details
          </button>
        </div>
      </Html>
    </group>
  );
}

function SceneContent({ projects, onSelect }) {
  return (
    <group>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      {/* Floor grid */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}
        receiveShadow>
        <planeGeometry args={[30, 30, 1, 1]} />
        <meshStandardMaterial color="#080808" />
      </mesh>

      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.6}>
        <ProjectPanel
          position={[-2.6, 0, 0]}
          rotation={[0, 0.15, 0]}
          accent="#00F0FF"
          title={projects[0]?.title || 'Project A'}
          index={0}
          onSelect={onSelect}
        />
      </Float>
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.5}>
        <ProjectPanel
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          accent="#FF00A0"
          title={projects[1]?.title || 'Project B'}
          index={1}
          onSelect={onSelect}
        />
      </Float>
      <Float speed={1.3} rotationIntensity={0.25} floatIntensity={0.7}>
        <ProjectPanel
          position={[2.6, 0, 0]}
          rotation={[0, -0.15, 0]}
          accent="#8A2BE2"
          title={projects[2]?.title || 'Project C'}
          index={2}
          onSelect={onSelect}
        />
      </Float>
    </group>
  );
}

export default function Projects3D({ projects = [], onSelect }) {
  return (
    <div className="relative w-full h-[520px] md:h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-black">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(0,240,255,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(255,0,160,0.12),transparent_55%)]" />
      <Canvas
        shadows={false}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 6], fov: 45 }}
      >
        <Suspense fallback={
          <Html center>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-2 rounded-md bg-white/5 text-white/70 border border-white/10 backdrop-blur"
            >
              Loading scene…
            </motion.div>
          </Html>
        }>
          <SceneContent projects={projects} onSelect={onSelect} />
          <OrbitControls enablePan={false} enableZoom={false} makeDefault dampingFactor={0.08} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
