import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1974&auto=format&fit=crop",
    alt: "Dining Table Setup",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    alt: "Cocktails at the Bar",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Restaurant Interior",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop",
    alt: "Gourmet Dish",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
    alt: "Outdoor Garden",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  }
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.2em] text-sm font-bold"
          >
            Visual Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-primary mt-3"
          >
            Captured Moments
          </motion.h2>
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 bg-accent mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative group rounded-xl overflow-hidden cursor-pointer shadow-md ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                 <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="text-accent w-8 h-8 mx-auto mb-2" />
                    <p className="text-white font-serif text-xl tracking-wide border-b border-accent pb-1">{img.alt}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
                <Instagram size={20} />
                <span>Follow us on Instagram</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;