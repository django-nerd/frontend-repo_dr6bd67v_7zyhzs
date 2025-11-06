import React, { Suspense, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, Float, Sparkles, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

function GlowMaterial({ color = '#00F0FF' }) {
  return (
    <meshStandardMaterial emissive={color} emissiveIntensity={0.7} color={color} metalness={0.2} roughness={0.35} />
  );
}

function HologramCard({ title, tech, hovering }) {
  return (
    <div className={`pointer-events-none select-none rounded-xl border ${hovering ? 'border-cyan-400/60' : 'border-white/10'} bg-black/50 backdrop-blur px-4 py-3 shadow-[0_0_40px_rgba(0,240,255,0.25)]`}> 
      <div className="text-sm font-semibold tracking-wide text-white flex items-center gap-2">
        <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        {title}
      </div>
      <div className="mt-1 text-xs text-white/70">{tech}</div>
    </div>
  );
}

function LaptopModel({ hovering }) {
  // Abstract laptop: base + screen
  const group = useRef();
  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.4;
      group.current.position.y = Math.sin(state.clock.elapsedTime * 1.2) * 0.15;
    }
  });
  return (
    <group ref={group}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.08, 0.8]} />
        {hovering ? <GlowMaterial color="#00F0FF" /> : <meshStandardMaterial color="#0b1520" metalness={0.5} roughness={0.2} />}
      </mesh>
      <mesh position={[0, 0.45, -0.35]} rotation={[Math.PI / 12, 0, 0]} castShadow>
        <boxGeometry args={[1.2, 0.8, 0.05]} />
        {hovering ? <GlowMaterial color="#7c3aed" /> : <meshStandardMaterial color="#0f1a2a" metalness={0.3} roughness={0.4} />}
      </mesh>
      <mesh position={[0, 0.46, -0.36]} rotation={[Math.PI / 12, 0, 0]}>
        <planeGeometry args={[1.1, 0.7]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={hovering ? 0.25 : 0.08} />
      </mesh>
    </group>
  );
}

function DataCrystal({ hovering }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.y += delta * 0.5;
    }
  });
  return (
    <mesh ref={ref} castShadow>
      <octahedronGeometry args={[0.6, 0]} />
      {hovering ? <GlowMaterial color="#FF00A0" /> : <meshStandardMaterial color="#1a0f1f" metalness={0.2} roughness={0.3} />}
    </mesh>
  );
}

function AbstractGeo({ hovering }) {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.6;
  });
  return (
    <group ref={ref}>
      <mesh>
        <torusKnotGeometry args={[0.45, 0.12, 100, 12]} />
        {hovering ? <GlowMaterial color="#00F0FF" /> : <meshStandardMaterial color="#101820" metalness={0.4} roughness={0.35} />}
      </mesh>
    </group>
  );
}

function ConstellationNode({ project, onOpen }) {
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const group = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  const Model = project.type === 'laptop' ? LaptopModel : project.type === 'crystal' ? DataCrystal : AbstractGeo;

  return (
    <group ref={group} position={project.position}>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.4}>
        <group onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)} onClick={() => onOpen(project)}>
          <Model hovering={hover || focused} />
          <mesh position={[0, -0.05, 0]}>
            <ringGeometry args={[0.7, 0.72, 64]} />
            <meshBasicMaterial color={hover ? '#00F0FF' : '#334155'} transparent opacity={hover ? 0.8 : 0.35} />
          </mesh>
          <Html distanceFactor={8} position={[0, 1.2, 0]} center>
            <HologramCard title={project.title} tech={project.tech} hovering={hover} />
          </Html>
        </group>
      </Float>
    </group>
  );
}

function BackgroundFX() {
  return (
    <group>
      <color attach="background" args={["#02050a"]} />
      <fog attach="fog" args={["#02050a", 8, 26]} />
      <Stars radius={80} depth={40} count={3000} factor={3} saturation={0} fade speed={0.6} />
      <Sparkles count={120} scale={[40, 20, 40]} size={2} color="#00F0FF" speed={0.3} />
    </group>
  );
}

function Scene({ projects, onOpenProject }) {
  const lightRef = useRef();
  useFrame(({ clock }) => {
    if (lightRef.current) {
      const t = clock.getElapsedTime();
      lightRef.current.position.x = Math.sin(t * 0.6) * 6;
      lightRef.current.position.z = Math.cos(t * 0.4) * 6;
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight ref={lightRef} position={[5, 6, 3]} intensity={2.2} color={'#00F0FF'} />
      <pointLight position={[-5, -2, -3]} intensity={0.7} color={'#FF00A0'} />
      <BackgroundFX />

      {projects.map((p) => (
        <ConstellationNode key={p.id} project={p} onOpen={onOpenProject} />
      ))}

      <OrbitControls enableDamping dampingFactor={0.08} enablePan={false} minDistance={6} maxDistance={20} />
    </>
  );
}

export default function ProjectsConstellation({ onOpenProject }) {
  const projects = useMemo(() => [
    { id: 'p1', title: 'Neon Dashboard', tech: 'React • Three.js • Tailwind', type: 'laptop', position: [-3, 0.6, -2] },
    { id: 'p2', title: 'Crystal Analytics', tech: 'Python • FastAPI • MongoDB', type: 'crystal', position: [0.5, -0.2, 0.5] },
    { id: 'p3', title: 'Knot Studio', tech: 'GLSL • R3F • Framer Motion', type: 'abstract', position: [3, 1.2, -1] },
    { id: 'p4', title: 'Aurora Shop', tech: 'Next.js • Stripe • Prisma', type: 'laptop', position: [-0.8, 1.4, -3.2] },
  ], []);

  return (
    <section id="projects" className="relative min-h-[90vh] w-full">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Projects <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">Constellation</span>
          </h2>
          <p className="mt-3 text-white/70">Explore a nebula of work. Hover to reveal holograms, click to deep-dive.</p>
        </div>
      </div>

      <div className="relative mx-auto h-[70vh] max-w-7xl rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">
        <Suspense fallback={<div className="grid h-full w-full place-items-center text-white/60">Loading scene…</div>}>
          <Canvas camera={{ position: [0, 2.4, 10], fov: 50 }} shadows>
            <Scene projects={projects} onOpenProject={onOpenProject} />
          </Canvas>
        </Suspense>

        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-fuchsia-500/10" />
      </div>
    </section>
  );
}
