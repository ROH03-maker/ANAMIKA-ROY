/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Crochet from './components/Crochet';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <LoadingScreen />
      
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-fr">
          {/* Main Hero Card */}
          <div className="md:col-span-2 md:row-span-1">
            <Hero />
          </div>
          
          {/* Gallery Preview Card */}
          <div className="md:col-span-1 md:row-span-1">
            <div className="h-full bg-luxury-charcoal text-luxury-cream bento-card p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="z-10">
                <h3 className="text-2xl font-display mb-2 italic">Mehendi Gallery</h3>
                <p className="text-xs opacity-60 leading-relaxed max-w-[200px]">Bridal, Arabic, and Modern patterns. Intricate art for special moments.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-4 z-10">
                {['Bridal', 'Modern', 'Art'].map(tag => (
                  <div key={tag} className="px-4 py-2 rounded-full border border-white/20 bg-white/10 text-[10px] uppercase tracking-widest">{tag}</div>
                ))}
              </div>
              <a href="#mehendi" className="absolute bottom-6 right-6 z-10 w-12 h-12 rounded-full bg-luxury-gold text-black flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight size={20} />
              </a>
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <MehendiPattern className="w-64 h-64" />
              </div>
            </div>
          </div>

          {/* Boutique Card */}
          <div className="md:col-span-1">
            <div className="h-full bg-luxury-rose/50 border border-luxury-rose bento-card p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest opacity-60 block mb-2 font-bold">Boutique</span>
                <h3 className="text-2xl font-display">Wool & Crochet</h3>
              </div>
              <div className="bg-white/80 dark:bg-black/40 p-4 rounded-2xl border border-white/40 mt-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-semibold">Custom Design</p>
                  <span className="text-[10px] bg-luxury-gold text-white px-2 py-0.5 rounded-full uppercase">Order</span>
                </div>
                <p className="text-[11px] opacity-70 italic">Hand-knitted with premium organic yarn.</p>
              </div>
              <a href="#crochet" className="mt-6 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-luxury-charcoal w-fit hover:text-luxury-gold hover:border-luxury-gold transition-colors">View Collection</a>
            </div>
          </div>

        </div>

        {/* Detailed Sections (The components themselves) */}
        <div className="mt-24 space-y-24">
          <Gallery />
          <Crochet />
          <ContactForm />
          
          {/* Quick Order Section at the bottom */}
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white dark:bg-zinc-900 border border-luxury-gold/20 bento-card p-12 flex flex-col justify-center items-center text-center shadow-2xl shadow-luxury-gold/5">
              <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#25D366]/30">
                <WhatsAppIcon size={32} color="white" />
              </div>
              <h3 className="text-3xl font-display mb-2">Quick Order</h3>
              <p className="text-sm md:text-base opacity-60 mb-8 max-w-sm">Connect directly on WhatsApp for lightning-fast responses and custom inquiries.</p>
              <button 
                onClick={() => window.open('https://wa.me/918927598500', '_blank')}
                className="px-12 py-5 bg-luxury-charcoal text-white dark:bg-luxury-gold dark:text-black rounded-full text-[10px] uppercase tracking-[0.4em] font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-luxury-gold/20"
              >
                Message on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

function WhatsAppIcon({ size, color }: { size: number, color: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  );
}

function MehendiPattern({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M50 0L61 39H100L69 61L81 100L50 77L19 100L31 61L0 39H39L50 0Z"/>
    </svg>
  );
}
