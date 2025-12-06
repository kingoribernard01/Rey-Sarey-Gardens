"use client"

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./button";
import { ArrowRight, Star, Quote } from "lucide-react";

interface About3Props {
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    src: string; // Used for icon/logo
    alt: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
  }>;
  companiesTitle?: string;
  companies?: Array<{ src: string; alt: string }>;
}

export const About3 = ({
  title = "A Hidden Gem",
  description = "Rey Sarey Gardens combines the warmth of a cozy fireplace with the sophistication of upmarket dining. Located along the Northern Bypass, we offer a tranquil escape with lush greenery and exceptional service.",
  mainImage,
  secondaryImage,
  breakout,
  achievementsTitle,
  achievementsDescription,
  achievements = [],
}: About3Props = {}) => {
  
  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f9f5f0] -skew-x-12 translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold">Our Story</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-8 leading-tight">
                {title}
              </h1>
              
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-8 border-l-4 border-accent pl-6">
                {description}
              </p>

              <div className="flex flex-col gap-6">
                 <p className="text-gray-500 leading-relaxed">
                   Whether you are here for a quick coffee or a romantic dinner, we make every moment memorable. 
                   We believe in the power of atmosphere—where rustic charm meets modern elegance.
                 </p>

                 <div className="flex gap-4 mt-2">
                    <Button className="bg-primary text-white px-8 py-6 text-lg hover:bg-primary/90 shadow-lg group">
                      Explore Our Menu <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </div>
              </div>
            </motion.div>

            {/* Achievements Cards (Mobile/Desktop friendly) */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.8 }}
               className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {achievements.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.15)" }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="bg-white p-4 py-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center justify-center text-center group hover:border-accent/30 transition-all duration-300"
                >
                  <span className="text-3xl md:text-4xl font-serif font-bold text-primary group-hover:text-accent transition-colors duration-300">{item.value}</span>
                  <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-2 font-bold">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:w-1/2 relative h-[600px] w-full mt-10 lg:mt-0">
             {/* Main Image */}
             {mainImage && (
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="absolute top-0 right-0 w-[85%] h-[85%] z-10"
               >
                 <img 
                   src={mainImage.src} 
                   alt={mainImage.alt} 
                   className="w-full h-full object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-2xl" 
                 />
               </motion.div>
             )}

             {/* Secondary Image (Floating) */}
             {secondaryImage && (
               <motion.div
                 initial={{ opacity: 0, x: -50, y: 50 }}
                 whileInView={{ opacity: 1, x: 0, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3, duration: 0.8 }}
                 className="absolute bottom-0 left-0 w-[50%] h-[50%] z-20 border-8 border-white rounded-tr-[30px] shadow-xl overflow-hidden"
               >
                 <img 
                   src={secondaryImage.src} 
                   alt={secondaryImage.alt} 
                   className="w-full h-full object-cover" 
                 />
               </motion.div>
             )}

             {/* Floating Badge/Review */}
             {breakout && (
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6, duration: 0.5 }}
                 className="absolute top-[10%] left-0 z-30 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-[280px] border border-gray-100"
               >
                  <div className="flex items-center gap-1 text-accent mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <Quote className="text-primary/20 absolute top-4 right-4 h-8 w-8" />
                  <h4 className="font-serif font-bold text-lg text-primary mb-1">{breakout.title}</h4>
                  <p className="text-sm text-gray-500 leading-snug">{breakout.description}</p>
               </motion.div>
             )}

             {/* Decorative Circle */}
             <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-accent/20 rounded-full z-0 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
