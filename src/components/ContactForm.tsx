import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ subject: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#080808] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-luxury-gold uppercase text-[10px] tracking-[0.5em] font-semibold mb-4"
            >
              Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display leading-[0.9] mb-8"
            >
              Let's create something <span className="italic text-luxury-gold">extraordinary</span>.
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 text-luxury-charcoal/60 dark:text-luxury-rose/60">
              <div className="bento-card bg-luxury-cream/50 p-6">
                <p className="uppercase text-[10px] tracking-widest font-bold text-luxury-charcoal dark:text-luxury-rose mb-2">Location</p>
                <p className="font-light text-xs">Kushmandi, West Bengal, India</p>
              </div>
              <div className="bento-card bg-luxury-cream/50 p-6">
                <p className="uppercase text-[10px] tracking-widest font-bold text-luxury-charcoal dark:text-luxury-rose mb-2">Email</p>
                <p className="font-light text-xs">rohitsarkarworks03@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
