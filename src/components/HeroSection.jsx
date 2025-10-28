import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef(null);
  const promptRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        promptRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.6 }
      );

      // Fade hero slightly as user starts scrolling
      gsap.to(containerRef.current, {
        opacity: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100svh] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradient to match space vibe */}
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(60% 60% at 50% 50%, rgba(36, 0, 70, 0.35) 0%, rgba(0, 0, 0, 0.55) 70%, rgba(0,0,0,0.85) 100%)',
      }} />

      {/* Title and prompt */}
      <div className="relative z-10 flex h-full w-full items-center justify-center text-center px-6">
        <div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-tr from-indigo-300 via-fuchsia-300 to-cyan-200 drop-shadow-[0_0_20px_rgba(138,43,226,0.35)]">
            Solar Scroll – Journey Through the Solar System
          </h1>
          <p ref={promptRef} className="mt-6 text-base sm:text-lg text-indigo-200/90">
            Scroll to begin your journey
          </p>
        </div>
      </div>
    </section>
  );
}
