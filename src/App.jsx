import { useEffect } from 'react';
import HeroSection from './components/HeroSection.jsx';
import Starfield from './components/Starfield.jsx';
import PlanetSection from './components/PlanetSection.jsx';
import OutroSection from './components/OutroSection.jsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PLANETS = [
  {
    name: 'Mercury',
    distance: '57.9 million km',
    orbit: '88 Earth days',
    fact: 'The smallest planet and closest to the Sun.',
    gradient: 'radial-gradient(circle at 30% 30%, #cfcfcf, #8a8a8a, #5e5e5e)',
    bgGlow: 'rgba(135,206,235,0.06)',
    halo: 'rgba(135,206,235,0.18)',
    title: '#cde4ff',
  },
  {
    name: 'Venus',
    distance: '108.2 million km',
    orbit: '225 Earth days',
    fact: 'Hottest planet due to its thick, heat-trapping atmosphere.',
    gradient: 'radial-gradient(circle at 30% 30%, #ffd6a5, #ffaf87, #e26d5a)',
    bgGlow: 'rgba(255,191,150,0.07)',
    halo: 'rgba(255,191,150,0.22)',
    title: '#ffe6d1',
  },
  {
    name: 'Earth',
    distance: '149.6 million km',
    orbit: '365.25 days',
    fact: 'The only known planet to support life.',
    gradient: 'radial-gradient(circle at 30% 30%, #9bd1ff, #2a75b3, #184e77)',
    bgGlow: 'rgba(100,149,237,0.07)',
    halo: 'rgba(100,149,237,0.22)',
    title: '#d2ecff',
  },
  {
    name: 'Mars',
    distance: '227.9 million km',
    orbit: '687 Earth days',
    fact: 'Home to the tallest volcano in the solar system, Olympus Mons.',
    gradient: 'radial-gradient(circle at 30% 30%, #ffb199, #ff6f61, #a13d2d)',
    bgGlow: 'rgba(255,111,97,0.07)',
    halo: 'rgba(255,111,97,0.22)',
    title: '#ffd8d1',
  },
  {
    name: 'Jupiter',
    distance: '778.5 million km',
    orbit: '11.86 Earth years',
    fact: 'Has a giant storm called the Great Red Spot.',
    gradient: 'radial-gradient(circle at 30% 30%, #ffd9a0, #d4a373, #945c28)',
    bgGlow: 'rgba(255,217,160,0.06)',
    halo: 'rgba(255,217,160,0.2)',
    title: '#ffe9c7',
  },
  {
    name: 'Saturn',
    distance: '1.43 billion km',
    orbit: '29.46 Earth years',
    fact: 'Famous for its spectacular ring system.',
    gradient: 'radial-gradient(circle at 30% 30%, #f2e9e4, #c9ada7, #a27b5c)',
    bgGlow: 'rgba(242,233,228,0.06)',
    halo: 'rgba(242,233,228,0.18)',
    title: '#fff5ef',
  },
  {
    name: 'Uranus',
    distance: '2.87 billion km',
    orbit: '84 Earth years',
    fact: 'Rotates on its side, making its seasons extreme.',
    gradient: 'radial-gradient(circle at 30% 30%, #c2f5ff, #73c6d9, #2f9eb3)',
    bgGlow: 'rgba(115,198,217,0.07)',
    halo: 'rgba(115,198,217,0.22)',
    title: '#e6fbff',
  },
  {
    name: 'Neptune',
    distance: '4.5 billion km',
    orbit: '164.8 Earth years',
    fact: 'The windiest planet, with supersonic winds.',
    gradient: 'radial-gradient(circle at 30% 30%, #b3d4ff, #3a66c3, #1a2a6c)',
    bgGlow: 'rgba(58,102,195,0.07)',
    halo: 'rgba(58,102,195,0.22)',
    title: '#d8e8ff',
  },
  {
    name: 'Pluto',
    distance: '5.9 billion km',
    orbit: '248 Earth years',
    fact: 'A dwarf planet with a heart-shaped glacier called Tombaugh Regio.',
    gradient: 'radial-gradient(circle at 30% 30%, #e8d7d1, #b49b8f, #7a5d4b)',
    bgGlow: 'rgba(180,155,143,0.06)',
    halo: 'rgba(180,155,143,0.18)',
    title: '#f2e9e4',
  },
];

export default function App() {
  useEffect(() => {
    // Smooth color wash on body background through the journey
    const colors = [
      '#0b1020',
      '#0c0720',
      '#120a2a',
      '#0a1930',
      '#1a1030',
      '#0a0f1a',
    ];
    gsap.to(document.documentElement, {
      duration: 1,
      '--space-bg': colors,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="min-h-screen w-full text-white" style={{ background: 'linear-gradient(180deg, var(--space-bg, #0a0f1a), #000)' }}>
      <Starfield />
      <HeroSection />

      {PLANETS.map((p, i) => (
        <PlanetSection key={p.name} planet={p} index={i} />
      ))}

      <OutroSection />
    </div>
  );
}
