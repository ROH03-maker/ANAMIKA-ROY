import { motion } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: string;
  type: string;
  image: string;
  isOrder: boolean;
}

const products: Product[] = [
  { id: 1, title: 'Gajra Bracelet', price: '₹199', type: 'Exotic Wool', image: '/8.jpeg', isOrder: true },
  { id: 2, title: 'Gajra Bracelet', price: '₹199', type: 'Limited edition', image: '/10.jpeg', isOrder: true },
  { id: 3, title: 'Hair Bun Gajra', price: '₹249', type: 'Custom Fit', image: '/6.jpeg', isOrder: false },
];

export default function Crochet() {
  const handleOrder = (product: string) => {
    const message = encodeURIComponent(`Hi Anamika, I'm interested in a custom order for the ${product}. Can we discuss the details?`);
    window.open(`https://wa.me/918927598500?text=${message}`, '_blank');
  };

  return (
    <section id="crochet" className="py-24 bg-luxury-cream dark:bg-[#0c0c0c] transition-colors duration-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-luxury-gold uppercase text-[10px] tracking-[0.6em] font-semibold mb-4"
          >
            Handcrafted Comfort
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-display italic"
          >
            The Wool Collection
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="relative glass-morphism bento-card p-6 flex flex-col group h-full"
            >
              {product.isOrder && (
                <div className="absolute top-8 left-8 z-10">
                  <span className="bg-luxury-gold text-black text-[8px] tracking-widest uppercase font-bold py-1.5 px-3 rounded-full shadow-lg shadow-luxury-gold/20">
                    Custom Order
                  </span>
                </div>
              )}
              
              <div className="relative h-[400px] overflow-hidden rounded-[24px] mb-8 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] dark:group-hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] tracking-widest text-luxury-charcoal/50 dark:text-luxury-rose/50 uppercase mb-1">
                      {product.type}
                    </p>
                    <h3 className="text-2xl font-display">{product.title}</h3>
                  </div>
                  <span className="text-xl font-medium text-luxury-gold">{product.price}</span>
                </div>
              </div>

              <button
                onClick={() => handleOrder(product.title)}
                className="mt-6 flex items-center justify-center space-x-3 w-full py-4 border border-luxury-charcoal/10 dark:border-luxury-rose/10 rounded-full hover:bg-luxury-charcoal hover:text-white dark:hover:bg-luxury-gold dark:hover:text-black transition-all group/btn"
              >
                <ShoppingBag size={18} className="transition-transform group-hover/btn:scale-110" />
                <span className="uppercase text-[10px] tracking-widest font-semibold">Inquire Now</span>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 glass-morphism bento-card text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-display mb-6 italic">Looking for something unique?</h3>
          <p className="text-luxury-charcoal/60 dark:text-luxury-rose/60 mb-8 max-w-xl mx-auto leading-relaxed">
            From bridal sweaters to personalized baby blankets, I specialize in bringing your vision to life with the finest wool and intricate crochet patterns.
          </p>
          <button
            onClick={() => handleOrder('Custom Request')}
            className="px-12 py-4 bg-luxury-gold text-black uppercase text-[10px] tracking-[0.4em] font-bold rounded-full shadow-lg shadow-luxury-gold/20 hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Custom Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
