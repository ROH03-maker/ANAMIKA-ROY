import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Moon, Sun, Menu, X, Instagram } from 'lucide-react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Mehendi', href: '#mehendi' },
    { name: 'Crochet', href: '#crochet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 glass-morphism shadow-sm' : 'py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col"
        >
          <span className="text-3xl md:text-4xl font-display text-luxury-gold tracking-tight leading-none">Anamika Roy</span>
          <span className="text-[8px] md:text-xs uppercase tracking-[0.3em] font-medium opacity-60 mt-1">Artistic Portfolio & Boutique</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12 uppercase text-[10px] tracking-[0.3em] font-bold">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-luxury-gold transition-colors pb-1 border-b border-transparent hover:border-luxury-gold"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDark} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://www.instagram.com/_saheb__bristi_" target="_blank" rel="noreferrer" className="p-2 hover:text-luxury-gold transition-colors">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDark}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-morphism py-8 md:hidden"
          >
            <div className="flex flex-col items-center space-y-6 uppercase text-xs tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-8 pt-4">
                <a href="https://www.instagram.com/_saheb__bristi_" target="_blank" rel="noreferrer" className="text-luxury-charcoal dark:text-luxury-cream">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
