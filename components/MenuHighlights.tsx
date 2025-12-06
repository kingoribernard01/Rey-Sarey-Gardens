import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wine, Coffee, Leaf, Utensils } from 'lucide-react';

const offerings = [
  {
    id: 1,
    title: "Signature Dining",
    description: "Experience culinary excellence with our breakfast, lunch, and dinner menus featuring locally sourced ingredients.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop",
    icon: <Utensils className="w-6 h-6" />,
    tags: ["Breakfast", "Lunch", "Dinner"]
  },
  {
    id: 2,
    title: "Curated Libations",
    description: "From vintage wines to hand-crafted cocktails and artisan beers, our bar is stocked to impress.",
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=2070&auto=format&fit=crop",
    icon: <Wine className="w-6 h-6" />,
    tags: ["Cocktails", "Wine", "Beer"]
  },
  {
    id: 3,
    title: "Plant-Based & Healthy",
    description: "Thoughtfully crafted vegan and vegetarian options that never compromise on flavor or creativity.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
    icon: <Leaf className="w-6 h-6" />,
    tags: ["Vegan", "Vegetarian", "Gluten-Free"]
  },
  {
    id: 4,
    title: "Café & Desserts",
    description: "Indulge in our artisan coffee blends and decadent house-made desserts, perfect for a sweet finish.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop",
    icon: <Coffee className="w-6 h-6" />,
    tags: ["Coffee", "Pastries", "High Tea"]
  }
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 bg-[#f9f5f0] relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute right-0 top-0 w-96 h-96 bg-primary rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-serif italic text-xl tracking-wider"
          >
            Taste the Extraordinary
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-primary mt-2 mb-6"
          >
            Our Offerings
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto font-light text-lg leading-relaxed"
          >
            Immerse yourself in a world of flavor. From early morning brews to late-night bites, 
            every dish is a masterpiece designed to delight your senses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {offerings.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-accent/20 backdrop-blur-md rounded-full text-accent border border-accent/30">
                        {item.icon}
                    </div>
                    <div className="flex gap-2">
                        {item.tags.map(tag => (
                            <span key={tag} className="text-xs uppercase tracking-widest bg-white/10 px-2 py-1 rounded text-white/80">
                                {tag}
                            </span>
                        ))}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-serif font-bold mb-2 text-white group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-accent text-sm font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    Explore Menu <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
