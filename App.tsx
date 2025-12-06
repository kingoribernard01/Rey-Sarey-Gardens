import React, { useState } from 'react';
import HeroGeometric from './components/ui/modern-hero-section';
import { About3 } from './components/ui/about-3';
import Navbar from './components/Navbar';
import MenuHighlights from './components/MenuHighlights';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import { Button } from './components/ui/button';
import { X, MessageCircle, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showReservationModal, setShowReservationModal] = useState(false);

  const openReservation = () => setShowReservationModal(true);
  const closeReservation = () => setShowReservationModal(false);

  return (
    <div className="bg-[#f9f5f0] min-h-screen font-sans text-gray-900 selection:bg-amber-200 selection:text-amber-900 overflow-x-hidden">
      <Navbar onBookNow={openReservation} />
      
      <main>
        <HeroGeometric 
          title1="Taste of" 
          title2="Elegance" 
          badge="Rey Sarey Gardens"
          onBookNow={openReservation}
        />
        
        <About3 
          title="A Hidden Gem"
          description="Rey Sarey Gardens combines the warmth of a cozy fireplace with the sophistication of upmarket dining. Located along the Northern Bypass, we offer a tranquil escape with lush greenery and exceptional service."
          mainImage={{
            src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop",
            alt: "Elegant Dining Atmosphere"
          }}
          secondaryImage={{
            src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1974&auto=format&fit=crop",
            alt: "Detail of table setting"
          }}
          breakout={{
            src: "",
            alt: "Review",
            title: "Unmatched Vibe",
            description: "The perfect blend of cozy and trendy. A must-visit spot.",
            buttonText: "View Gallery",
            buttonUrl: "#gallery"
          }}
          achievementsTitle="Our Stats"
          achievementsDescription=""
          achievements={[
            { label: "Years of Service", value: "5+" },
            { label: "Regular Guests", value: "2K+" },
            { label: "Events Hosted", value: "500+" },
            { label: "Star Rating", value: "4.9" },
          ]}
        />
        
        <MenuHighlights />
        
        <GallerySection />
        
        <TestimonialsSection />
        
        <FeaturesSection />

        {/* Enhanced Footer */}
        <footer className="bg-[#120303] text-white pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold tracking-wider text-white">REY SAREY</h2>
                        <p className="text-white/60 leading-relaxed font-light">
                            A sanctuary of taste and elegance. Join us for an unforgettable dining experience where every detail matters.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif text-accent">Quick Links</h3>
                        <ul className="space-y-4 text-white/70">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><button onClick={openReservation} className="hover:text-white transition-colors text-left">Reservations</button></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif text-accent">Contact Us</h3>
                        <ul className="space-y-4 text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-1 flex-shrink-0 text-accent" size={18} />
                                <span>Along Northern Bypass, Thome-Marurui Road, Opp. Mukuyu Court</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="flex-shrink-0 text-accent" size={18} />
                                <span>+254 703 986 657</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="flex-shrink-0 text-accent" size={18} />
                                <span>info@reysareygardens.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif text-accent">Opening Hours</h3>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Mon - Thu</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Fri - Sat</span>
                                <span>8:00 AM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Sunday</span>
                                <span>9:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-white/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} Rey Sarey Gardens. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/254703986657" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <MessageCircle size={28} fill="white" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold">Chat with us</span>
      </a>

      {/* Reservation Modal Overlay */}
      <AnimatePresence>
      {showReservationModal && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-[#fffcf8] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
          >
            {/* Modal Header */}
            <div className="bg-primary p-6 text-white relative">
                <button 
                    onClick={closeReservation} 
                    className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10 p-2 rounded-full transition-all"
                >
                <X size={20} />
                </button>
                <h2 className="text-3xl font-serif font-bold">Book a Table</h2>
                <p className="text-white/80 text-sm mt-1">Reserve your spot at Rey Sarey Gardens</p>
            </div>
            
            <div className="p-8">
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Reservation Request Sent! We will contact you shortly to confirm.'); closeReservation(); }}>
                <div className="grid grid-cols-2 gap-5">
                    <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Date</label>
                    <input type="date" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" required />
                    </div>
                    <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Time</label>
                    <input type="time" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" required />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Guests</label>
                    <select className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all">
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5 People</option>
                    <option>6+ People (Call for large groups)</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Name</label>
                    <input type="text" placeholder="Your Full Name" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" required />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-700">Phone</label>
                    <input type="tel" placeholder="0700 000 000" className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" required />
                </div>
                
                <Button type="submit" className="w-full bg-primary text-white py-6 text-lg mt-2 shadow-lg hover:bg-primary/90 hover:shadow-primary/30 transition-all">
                    Confirm Reservation
                </Button>
                </form>
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}
