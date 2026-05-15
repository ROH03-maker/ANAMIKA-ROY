import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkMobile();

    const handleMouseMove = (e: MouseEvent) => {
      if (isHidden) setIsHidden(false);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
    };
  }, [mouseX, mouseY, isHidden, isMobile]);

  if (isMobile) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[10000] ${isHidden ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
      {/* Small precise dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 bg-luxury-gold rounded-full pointer-events-none z-[10001]"
        style={{
          left: mouseX,
          top: mouseY,
          x: '-50%',
          y: '-50%',
        }}
      />
      
      {/* Smoother trailing outline */}
      <motion.div
        className="fixed border border-luxury-gold/50 rounded-full pointer-events-none"
        style={{
          left: smoothX,
          top: smoothY,
          x: '-50%',
          y: '-50%',
          width: isPointer ? 20 : 10,
          height: isPointer ? 20 : 10,
        }}
        animate={{
          scale: isPointer ? 1.2 : 1,
          borderWidth: isPointer ? '1.5px' : '1px',
          backgroundColor: isPointer ? 'rgba(212, 175, 55, 0.15)' : 'rgba(212, 175, 55, 0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      />
    </div>
  );
}
