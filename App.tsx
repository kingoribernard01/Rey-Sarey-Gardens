import React, { useState } from 'react';
import HeroGeometric from './components/ui/modern-hero-section';
import { About3 } from './components/ui/about-3';
import Navbar from './components/Navbar';
import MenuHighlights from './components/MenuHighlights';
import FeaturesSection from './components/FeaturesSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import { Button } from './components/ui/button';
import { X, MessageCircle, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, Calendar, Users, CheckCircle, ChevronRight, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [reservationStatus, setReservationStatus] = useState<'idle' | 'success'>('idle');

  const openReservation = () => {
    setReservationStatus('idle');
    setShowReservationModal(true);
  };
  const closeReservation = () => setShowReservationModal(false);

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setReservationStatus('success');
    }, 1500);
  };

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

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
            src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop",
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
        <footer className="bg-[#120303] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <UtensilsCrossed className="text-accent" />
                            <h2 className="text-2xl font-serif font-bold tracking-wider text-white">REY SAREY</h2>
                        </div>
                        <p className="text-white/60 leading-relaxed font-light text-sm">
                            A sanctuary of taste and elegance. Join us for an unforgettable dining experience where every detail matters.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black hover:border-accent transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif text-accent">Quick Links</h3>
                        <ul className="space-y-4 text-white/70 text-sm">
                            <li><a href="#" className="hover:text-white hover:translate-x-2 inline-block transition-all">Home</a></li>
                            <li><a href="#about" className="hover:text-white hover:translate-x-2 inline-block transition-all">About Us</a></li>
                            <li><a href="#menu" className="hover:text-white hover:translate-x-2 inline-block transition-all">Our Menu</a></li>
                            <li><a href="#gallery" className="hover:text-white hover:translate-x-2 inline-block transition-all">Gallery</a></li>
                            <li><button onClick={openReservation} className="hover:text-white hover:translate-x-2 inline-block transition-all text-left">Reservations</button></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif text-accent">Contact Us</h3>
                        <ul className="space-y-4 text-white/70 text-sm">
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <MapPin className="mt-1 flex-shrink-0 text-accent group-hover:text-white transition-colors" size={18} />
                                <span className="group-hover:text-white transition-colors">Along Northern Bypass, Thome-Marurui Road, Opp. Mukuyu Court</span>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <Phone className="flex-shrink-0 text-accent group-hover:text-white transition-colors" size={18} />
                                <span className="group-hover:text-white transition-colors">+254 703 986 657</span>
                            </li>
                            <li className="flex items-center gap-3 group cursor-pointer">
                                <Mail className="flex-shrink-0 text-accent group-hover:text-white transition-colors" size={18} />
                                <span className="group-hover:text-white transition-colors">info@reysareygardens.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 font-serif text-accent">Opening Hours</h3>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Mon - Thu</span>
                                <span className="text-white">8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Fri - Sat</span>
                                <span className="text-white">8:00 AM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Sunday</span>
                                <span className="text-white">9:00 AM - 10:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-xs">
                    <p>&copy; {new Date().getFullYear()} Rey Sarey Gardens. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0">Designed with elegance.</p>
                </div>
            </div>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/254703986657" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
      >
        <MessageCircle size={28} fill="white" className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-bold text-sm">Chat with us</span>
      </a>

      {/* Modern High-End Reservation Modal */}
      <AnimatePresence>
      {showReservationModal && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#1a0505]/80 backdrop-blur-md"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
                onClick={closeReservation} 
                className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/50 text-white p-2 rounded-full transition-all backdrop-blur-md border border-white/20"
            >
              <X size={20} />
            </button>

            {/* Cinematic Image Side - Left */}
            <div className="hidden md:block w-[45%] relative overflow-hidden bg-gray-900">
               <motion.img 
                 initial={{ scale: 1.1 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 1.5, ease: "easeOut" }}
                 src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
                 alt="Ambiance" 
                 className="absolute inset-0 w-full h-full object-cover opacity-80"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#4a0404] via-[#4a0404]/40 to-transparent mix-blend-multiply"></div>
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
               
               <div className="absolute bottom-0 left-0 p-10 text-white z-10 w-full">
                 <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "3rem" }} 
                    transition={{ delay: 0.5 }}
                    className="h-1 bg-accent mb-6"
                 ></motion.div>
                 <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-4xl font-serif font-bold mb-4 leading-tight"
                 >
                    Reserve <br/>The Extraordinary.
                 </motion.h3>
                 <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-white/80 font-light text-sm leading-relaxed max-w-xs"
                 >
                   "Dining is not just about food; it is about the experience, the atmosphere, and the memories created."
                 </motion.p>
               </div>
            </div>

            {/* Form Side - Right */}
            <div className="w-full md:w-[55%] p-8 md:p-12 overflow-y-auto bg-white custom-scrollbar">
                
                {reservationStatus === 'success' ? (
                   <div className="h-full flex flex-col items-center justify-center text-center py-10 space-y-8">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6, bounce: 0.5 }}
                        className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center shadow-lg mb-2"
                      >
                         <CheckCircle className="w-12 h-12 text-green-600" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-3xl font-serif font-bold text-primary mb-3">Reservation Confirmed</h3>
                        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                            Thank you. We have received your request and look forward to hosting you. A confirmation text has been sent.
                        </p>
                      </motion.div>
                      <div className="w-full h-px bg-gray-100 max-w-xs"></div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                          <Button onClick={closeReservation} className="bg-primary text-white px-10 py-6 rounded-xl hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all font-bold tracking-wide">
                             Return to Home
                          </Button>
                      </motion.div>
                   </div>
                ) : (
                  <>
                    <div className="mb-10 text-center md:text-left">
                        <span className="text-accent uppercase tracking-[0.2em] text-xs font-bold mb-2 block">Online Booking</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Secure a Table</h2>
                    </div>
                    
                    <form className="space-y-6" onSubmit={handleReservationSubmit}>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wide group-focus-within:text-accent transition-colors flex items-center gap-2">
                                  <Calendar size={14}/> Date
                                </label>
                                <input 
                                    type="date" 
                                    min={getTodayDate()}
                                    className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:border-accent bg-transparent outline-none transition-all text-gray-800 placeholder-transparent cursor-pointer" 
                                    required 
                                    onClick={(e) => {
                                      try {
                                        if ('showPicker' in e.currentTarget) {
                                          (e.currentTarget as any).showPicker();
                                        }
                                      } catch (error) {
                                        console.log(error)
                                      }
                                    }}
                                />
                            </div>
                            <div className="space-y-2 group">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-wide group-focus-within:text-accent transition-colors flex items-center gap-2">
                                  <Clock size={14}/> Time
                                </label>
                                <input 
                                    type="time" 
                                    className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:border-accent bg-transparent outline-none transition-all text-gray-800 cursor-pointer" 
                                    required 
                                    onClick={(e) => {
                                      try {
                                        if ('showPicker' in e.currentTarget) {
                                          (e.currentTarget as any).showPicker();
                                        }
                                      } catch (error) {
                                        console.log(error)
                                      }
                                    }}
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2 group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wide group-focus-within:text-accent transition-colors flex items-center gap-2">
                              <Users size={14}/> Party Size
                            </label>
                            <div className="relative">
                              <select className="w-full border-b border-gray-200 py-3 text-lg font-serif focus:border-accent bg-transparent outline-none transition-all text-gray-800 appearance-none cursor-pointer">
                                  <option>2 Guests</option>
                                  <option>3 Guests</option>
                                  <option>4 Guests</option>
                                  <option>5 Guests</option>
                                  <option>6-10 Guests</option>
                                  <option>Large Party (10+)</option>
                              </select>
                              <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none rotate-90" size={16} />
                            </div>
                        </div>
                        
                        <div className="pt-4 space-y-6">
                             <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="floating_name" 
                                    id="floating_name" 
                                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer font-serif" 
                                    placeholder=" " 
                                    required 
                                />
                                <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full Name</label>
                             </div>

                             <div className="relative z-0 w-full group">
                                <input 
                                    type="tel" 
                                    name="floating_phone" 
                                    id="floating_phone" 
                                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer font-serif" 
                                    placeholder=" " 
                                    required 
                                />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number</label>
                             </div>

                             <div className="relative z-0 w-full group">
                                <input 
                                    type="text" 
                                    name="floating_request" 
                                    id="floating_request" 
                                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer font-serif" 
                                    placeholder=" " 
                                />
                                <label htmlFor="floating_request" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Special Requests (Optional)</label>
                             </div>
                        </div>
                        
                        <Button type="submit" className="w-full bg-primary text-white py-6 text-lg mt-6 shadow-xl hover:bg-[#3a0303] hover:shadow-2xl transition-all duration-300 rounded-xl font-bold tracking-wider flex justify-between items-center px-8 group">
                            <span>Confirm Booking</span>
                            <span className="bg-white/10 p-2 rounded-full group-hover:bg-accent/80 group-hover:text-black transition-all duration-300">
                              <ChevronRight size={18} />
                            </span>
                        </Button>
                    </form>
                  </>
                )}
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
}