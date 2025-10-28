import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Starfield() {
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);

  useEffect(() => {
    const totalScroll = 6000;

    const anims = [
      gsap.to(layer1Ref.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: `+=${totalScroll}`, scrub: true },
      }),
      gsap.to(layer2Ref.current, {
        yPercent: -16,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: `+=${totalScroll}`, scrub: true },
      }),
      gsap.to(layer3Ref.current, {
        yPercent: -28,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: `+=${totalScroll}`, scrub: true },
      }),
    ];

    return () => {
      anims.forEach((a) => a.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div
        ref={layer1Ref}
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 20% 30%, rgba(255,255,255,0.75) 50%, transparent 51%), radial-gradient(1px 1px at 80% 70%, rgba(255,255,255,0.65) 50%, transparent 51%), radial-gradient(1px 1px at 50% 50%, rgba(255,255,255,0.55) 50%, transparent 51%)',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px 600px, 400px 400px, 800px 800px',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      <div
        ref={layer2Ref}
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(2px 2px at 10% 80%, rgba(173,216,230,0.8) 50%, transparent 51%), radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.7) 50%, transparent 51%), radial-gradient(2px 2px at 40% 60%, rgba(135,206,235,0.7) 50%, transparent 51%)',
          backgroundRepeat: 'repeat',
          backgroundSize: '700px 700px, 500px 500px, 900px 900px',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      <div
        ref={layer3Ref}
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.5) 50%, transparent 51%), radial-gradient(2px 2px at 70% 50%, rgba(186,85,211,0.6) 50%, transparent 51%), radial-gradient(1px 1px at 85% 30%, rgba(255,255,255,0.6) 50%, transparent 51%)',
          backgroundRepeat: 'repeat',
          backgroundSize: '800px 800px, 600px 600px, 1000px 1000px',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.4) 100%)'
      }} />
    </div>
  );
}
