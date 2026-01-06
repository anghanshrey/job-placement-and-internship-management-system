import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 60 },
          size: { value: 3 },
          move: { speed: 1 },
          links: { enable: true },
        }
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1
      }}
    />
  );
}
