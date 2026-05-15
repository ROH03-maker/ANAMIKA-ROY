import { motion } from 'motion/react';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[11000] flex flex-col items-center justify-center bg-luxury-cream dark:bg-[#0c0c0c]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
      onAnimationComplete={() => {
        document.body.style.overflow = 'auto';
      }}
      style={{ pointerEvents: 'none' }}
    >
      <div className="relative">
        <motion.h1
          className="text-4xl md:text-6xl font-display text-luxury-charcoal dark:text-luxury-rose"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Anamika Roy
        </motion.h1>
        <motion.div
          className="h-[1px] bg-luxury-gold mt-4"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />
        <motion.p
          className="text-xs tracking-[0.4em] uppercase text-luxury-charcoal/50 dark:text-luxury-rose/50 mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Artistic Expressions
        </motion.p>
      </div>
    </motion.div>
  );
}
