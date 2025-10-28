import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PlanetSection({ planet, index }) {
  const sectionRef = useRef(null);
  const planetRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enter animations
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
        }
      );

      // Infinite gentle rotation
      gsap.to(planetRef.current, {
        rotate: 360,
        duration: 80 - index * 4,
        ease: 'none',
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [index]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      style={{
        background:
          `radial-gradient(60% 60% at 50% 50%, ${planet.bgGlow} 0%, rgba(0,0,0,0.75) 65%, rgba(0,0,0,0.95) 100%)`,
      }}
    >
      {/* Glow halos */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          `radial-gradient(40% 40% at 50% 50%, ${planet.halo} 0%, rgba(0,0,0,0) 70%)`,
        mixBlendMode: 'screen',
        opacity: 0.6,
      }} />

      {/* Planet visual */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-6xl px-6">
        <div className="flex items-center justify-center">
          <div
            ref={planetRef}
            className="rounded-full shadow-2xl"
            style={{
              width: '280px',
              height: '280px',
              background: planet.gradient,
              boxShadow:
                `0 0 40px ${planet.halo}, inset -20px -20px 50px rgba(0,0,0,0.35), inset 10px 10px 40px rgba(255,255,255,0.08)`,
              willChange: 'transform',
              transform: 'translateZ(0)',
            }}
          />
        </div>

        {/* Text block */}
        <div ref={textRef} className="text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" style={{ color: planet.title }}>
            {planet.name}
          </h2>
          <div className="mt-6 space-y-2 text-sm sm:text-base text-indigo-100/90">
            <p><span className="text-indigo-200/80">Distance from Sun:</span> {planet.distance}</p>
            <p><span className="text-indigo-200/80">Orbital period:</span> {planet.orbit}</p>
            <p className="pt-2 text-indigo-100"><span className="text-indigo-200/80">Fun fact:</span> {planet.fact}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
