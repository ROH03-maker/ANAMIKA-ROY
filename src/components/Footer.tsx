import { motion } from 'motion/react';
import { Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 bg-luxury-cream dark:bg-[#0c0c0c] transition-colors duration-500 border-t border-luxury-charcoal/5 dark:border-luxury-rose/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl font-display font-semibold mb-12 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.6)] bg-luxury-charcoal px-10 py-4 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)]"
          >
            Anamika Roy<span className="text-luxury-gold drop-shadow-[0_0_15px_rgba(212,175,55,1)]">.</span>
          </motion.div>

          <div className="flex space-x-12 mb-12">
            {[
              { icon: <Instagram size={28} />, name: 'Instagram', href: 'https://www.instagram.com/_saheb__bristi_', color: 'hover:text-[#E1306C]', glow: 'group-hover:shadow-[0_0_40px_rgba(225,48,108,0.8)]' },
              { icon: <WhatsAppIcon />, name: 'WhatsApp', href: 'https://wa.me/917318972244', color: 'hover:text-[#25D366]', glow: 'group-hover:shadow-[0_0_40px_rgba(37,211,102,0.8)]' },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative flex items-center justify-center w-16 h-16 rounded-full glass-morphism transition-all duration-300 ${social.color} hover:scale-110`}
              >
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110 ${social.glow}`} />
                <div className="z-10">{social.icon}</div>
              </a>
            ))}
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-luxury-charcoal/10 dark:border-luxury-rose/10 space-y-4 md:space-y-0">
            <p className="text-[10px] tracking-widest text-luxury-charcoal/40 dark:text-luxury-rose/40 uppercase">
              © {currentYear} Anamika Roy Art. All Rights Reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 text-[10px] tracking-[0.4em] font-bold uppercase hover:text-luxury-gold transition-colors"
            >
              <span>Back to top</span>
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowUp size={14} />
              </motion.div>
            </button>
            
            <p className="text-[10px] tracking-widest text-luxury-charcoal/40 dark:text-luxury-rose/40 uppercase">
              Designed with Heart
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" size={24} width="24" height="24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
