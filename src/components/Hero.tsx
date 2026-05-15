import { motion } from 'motion/react';

export default function Hero() {
  const words = "Crafted with Passion, Designed with Heart".split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="h-full glass-morphism bento-card p-10 flex flex-col justify-center relative overflow-hidden min-h-[400px]">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-luxury-rose opacity-30 rounded-full blur-3xl"></div>
      
      <div className="z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="overflow-hidden mb-6"
        >
          <h2 className="text-4xl md:text-6xl font-display leading-[1.1]">
            Crafted with <span className="italic text-luxury-gold">Passion</span>,<br />
            Designed with Heart
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <span className="px-5 py-2.5 bg-luxury-charcoal text-white dark:bg-white dark:text-black rounded-full text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg shadow-black/10">Available for Hire</span>
          <span className="px-5 py-2.5 border border-luxury-charcoal/20 dark:border-white/20 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">Custom Orders</span>
        </motion.div>
      </div>

      {/* Floating Decorative Pattern */}
      <div className="absolute bottom-[-40px] left-[-40px] opacity-10 pointer-events-none scale-150 rotate-12">
        <MehendiPattern className="w-64 h-64 text-luxury-gold" />
      </div>
    </div>
  );
}

function MehendiPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path d="M100 0c55.23 0 100 44.77 100 100s-44.77 100-100 100S0 155.23 0 100 44.77 0 100 0zm0 20C55.82 20 20 55.82 20 100s35.82 80 80 80 80-35.82 80-80-35.82-80-80-80zm0 20c33.14 0 60 26.86 60 60s-26.86 60-60 60-60-26.86-60-60 26.86-60 60-60zm0 20c11.05 0 20 8.95 20 20s-8.95 20-20 20-20-8.95-20-20 8.95-20 20-20z" />
    </svg>
  );
}

function CrochetPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="currentColor">
      <path d="M100 50L150 150H50L100 50ZM100 0L200 200H0L100 0Z" />
    </svg>
  );
}
