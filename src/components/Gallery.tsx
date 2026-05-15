import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';

type Category = 'All' | 'Bridal' | 'Arabic' | 'Modern';

interface ImageItem {
  id: number;
  url: string;
  category: Category;
  title: string;
}

const images: ImageItem[] = [
  { id: 1, url: '/5.jpeg', category: 'Bridal', title: 'Bridal Heavy Mehendi' },
  { id: 2, url: '/1.jpeg', category: 'Modern', title: 'Minimalist Jewelry Design' },
  { id: 3, url: '/2.jpeg', category: 'Arabic', title: 'Arabic Fusion' },
  { id: 4, url: '/11.jpeg', category: 'Arabic', title: 'Bail/Creeper Style' },
  { id: 5, url: '/3.jpeg', category: 'Modern', title: 'Indian Gulf Fusion' },
  { id: 6, url: '/12.jpeg', category: 'Bridal', title: 'Portrait Bridal Mehendi' },
];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section id="mehendi" className="py-24 bg-[#FDFBF7] dark:bg-[#080808] transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-luxury-gold uppercase text-[10px] tracking-[0.5em] font-semibold mb-2"
            >
              Curated Artistry
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display"
            >
              The Mehendi Gallery
            </motion.h2>
          </div>

          <div className="flex space-x-6 text-[10px] tracking-[0.3em] font-medium uppercase">
            {['All', 'Bridal', 'Arabic', 'Modern'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Category)}
                className={`transition-colors ${filter === cat ? 'text-luxury-gold' : 'text-luxury-charcoal/40 dark:text-luxury-rose/40 hover:text-luxury-charcoal dark:hover:text-luxury-rose'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                layout
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer bento-card transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] dark:hover:shadow-[0_0_50px_rgba(212,175,55,0.3)]"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <p className="text-white uppercase text-[8px] tracking-[0.4em] mb-2">{image.category}</p>
                  <h3 className="text-white font-display text-xl">{image.title}</h3>
                  <div className="mt-4 w-10 h-10 rounded-full border border-white/50 flex items-center justify-center">
                    <ExternalLink size={16} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[12000] bg-black/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-luxury-gold transition-colors">
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-luxury-gold uppercase text-xs tracking-widest mb-2">{selectedImage.category}</p>
                <h3 className="text-white text-3xl font-display italic">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
