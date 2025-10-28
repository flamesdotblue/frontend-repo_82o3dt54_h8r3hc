import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OutroSection() {
  const ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[80svh] flex items-center justify-center text-center px-6"
      style={{
        background:
          'radial-gradient(50% 50% at 50% 50%, rgba(10,15,30,0.3) 0%, rgba(0,0,0,0.9) 80%)',
      }}
    >
      <div className="pointer-events-none absolute inset-0" style={{
        background:
          'radial-gradient(35% 35% at 50% 50%, rgba(63,94,251,0.15) 0%, rgba(252,70,107,0.1) 40%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'screen',
      }} />
      <div ref={textRef} className="max-w-3xl">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-100">
          You’ve reached the edge of our Solar System — beyond lies the unknown.
        </h3>
        <p className="mt-6 text-indigo-200/80">
          Thanks for journeying with us. Keep exploring!
        </p>
      </div>
      <noscript>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-indigo-200/60">
          JavaScript is disabled. Animations are limited, but you can still read the content.
        </div>
      </noscript>
    </section>
  );
}
