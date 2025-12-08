import React, { useState } from 'react';
import { Check, Music, Flame, Accessibility, Baby, Car, MapPin, Phone, Mail, Clock, Send, Calendar, Users, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<'booking' | 'contact'>('booking');

  const vibeCards = [
    {
      id: 1,
      title: "Cozy Fireplace",
      subtitle: "Warmth & Intimacy",
      description: "Experience the comforting glow of our signature fireplace, perfect for chilly evenings and romantic conversations.",
      icon: <Flame className="w-6 h-6 text-accent" />,
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Live Melodies",
      subtitle: "Acoustic Sessions",
      description: "Let the rhythm of weekly live acoustic performances elevate your dining experience without overwhelming conversation.",
      icon: <Music className="w-6 h-6 text-accent" />,
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Scenic Outdoors",
      subtitle: "Nature's Embrace",
      description: "Dine amidst lush greenery in our carefully manicured gardens. A breath of fresh air for brunch or lunch.",
      icon: <Check className="w-6 h-6 text-accent" />,
      image: "https://images.unsplash.com/photo-1578474843222-9593bc814220?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Trendy & Chic",
      subtitle: "Instagram-Worthy",
      description: "Every corner is designed with aesthetics in mind. Modern decor meets rustic charm for the perfect photo op.",
      icon: <Users className="w-6 h-6 text-accent" />,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const getTodayDate = () => {
    return new Date().toISOString().split('T')[0];
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Revamped Atmosphere Vibe Section */}
      <section id="highlights" className="relative py-24 bg-[#f9f5f0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-accent uppercase tracking-[0.2em] text-sm font-bold"
             >
               The Atmosphere
             </motion.span>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-6xl font-serif font-bold text-primary mt-4 mb-6"
             >
               Vibe Check
             </motion.h2>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="max-w-2xl mx-auto text-gray-600 font-light text-lg"
             >
               Rey Sarey Gardens isn't just a restaurant; it's a feeling. From the crackle of the fire to the gentle strum of a guitar, we curate moments.
             </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vibeCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative h-[420px] rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0505] via-[#1a0505]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                   <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                      <div className="mb-4 bg-white/10 w-fit p-3 rounded-full backdrop-blur-sm border border-white/10 group-hover:bg-accent/20 group-hover:border-accent/50 transition-colors">
                        {card.icon}
                      </div>
                      <h4 className="text-lg font-sans font-bold text-accent uppercase tracking-wider mb-1 opacity-80">{card.subtitle}</h4>
                      <h3 className="text-2xl font-serif font-bold text-white mb-3">{card.title}</h3>
                      <p className="text-white/70 font-light text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {card.description}
                      </p>
                   </div>
                   <div className="h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out mt-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Accessibility & Family Section - Dark Theme */}
      <section className="py-24 bg-[#1a0505] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
              Designed for <span className="text-accent">Everyone</span>
            </h2>
            <div className="h-1 w-24 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/10">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Accessibility className="w-8 h-8 text-accent group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Accessibility First</h3>
              <p className="text-white/60 leading-relaxed">
                Seamless wheelchair access from car park to table. Dedicated accessible facilities ensuring comfort for all our guests.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/10">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Baby className="w-8 h-8 text-accent group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Family Joy</h3>
              <p className="text-white/60 leading-relaxed">
                We celebrate families. High chairs, a curated kids' menu, and birthday hosting services make every celebration special.
              </p>
            </div>

            <div className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/10">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <Car className="w-8 h-8 text-accent group-hover:text-black transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Stress-Free Parking</h3>
              <p className="text-white/60 leading-relaxed">
                Arrive with ease. Enjoy complimentary parking in our private lot or utilize the convenient street parking nearby.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comprehensive Contact & Booking Section */}
      <section id="contact" className="py-24 bg-[#f9f5f0]">
         <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Get in Touch</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-2">Visit & Reserve</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
               {/* Left Column: Info & Map */}
               <div className="lg:w-1/2 p-0 flex flex-col">
                  <div className="bg-primary text-white p-10 md:p-12">
                      <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                        <MapPin className="text-accent" /> Location Details
                      </h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="bg-white/10 p-2 rounded-lg"><MapPin size={20} /></div>
                           <div>
                             <p className="font-bold text-accent">Address</p>
                             <p className="text-white/80">Along Northern Bypass, Thome-Marurui Road</p>
                             <p className="text-white/60 text-sm">Opposite Mukuyu Court</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="bg-white/10 p-2 rounded-lg"><Phone size={20} /></div>
                           <div>
                             <p className="font-bold text-accent">Phone</p>
                             <p className="text-white/80">+254 703 986 657</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <div className="bg-white/10 p-2 rounded-lg"><Clock size={20} /></div>
                           <div>
                             <p className="font-bold text-accent">Opening Hours</p>
                             <p className="text-white/80">Daily: 8:00 AM - 11:00 PM</p>
                           </div>
                        </div>
                      </div>
                  </div>
                  <div className="h-full min-h-[300px] w-full bg-gray-200 relative">
                     <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9135!2d36.8530!3d-1.2195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15f9b9f9f9f9%3A0x9f9f9f9f9f9f9f9f!2sMukuyu%20Court!5e0!3m2!1sen!2ske!4v1625641234567!5m2!1sen!2ske"
                       width="100%" 
                       height="100%" 
                       style={{border:0}} 
                       allowFullScreen 
                       loading="lazy"
                       title="Rey Sarey Gardens Location"
                       className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                      ></iframe>
                      <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow text-xs font-bold text-primary pointer-events-none">
                        Opposite Mukuyu Court
                      </div>
                  </div>
               </div>

               {/* Right Column: Contact/Booking Tabs */}
               <div className="lg:w-1/2 p-8 md:p-12 bg-white flex flex-col">
                  {/* Tab Navigation */}
                  <div className="flex p-1 bg-gray-100/80 rounded-xl mb-8">
                     <button 
                        onClick={() => setActiveTab('booking')}
                        className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'booking' ? 'bg-white text-primary shadow-md transform scale-[1.02]' : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'}`}
                     >
                        <Calendar size={16} /> Book a Table
                     </button>
                     <button 
                        onClick={() => setActiveTab('contact')}
                        className={`flex-1 py-3 text-sm font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${activeTab === 'contact' ? 'bg-white text-primary shadow-md transform scale-[1.02]' : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'}`}
                     >
                        <Mail size={16} /> Send Message
                     </button>
                  </div>

                  <div className="flex-grow">
                    {activeTab === 'booking' ? (
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         key="booking"
                         className="h-full flex flex-col"
                       >
                         <h3 className="text-2xl font-serif font-bold text-primary mb-2">Reserve Your Table</h3>
                         <p className="text-gray-500 mb-6 text-sm">Join us for an exceptional dining experience. Immediate confirmation.</p>
                         
                         <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Reservation Request Sent!'); }}>
                            <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-600 uppercase">Date</label>
                                  <input 
                                    type="date" 
                                    min={getTodayDate()}
                                    className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer" 
                                    required 
                                    onClick={(e) => {
                                      try {
                                        if ('showPicker' in e.currentTarget) {
                                          (e.currentTarget as any).showPicker();
                                        }
                                      } catch (error) {
                                        console.log(error);
                                      }
                                    }}
                                  />
                               </div>
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-600 uppercase">Time</label>
                                  <input 
                                    type="time" 
                                    className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all cursor-pointer" 
                                    required 
                                    onClick={(e) => {
                                      try {
                                        if ('showPicker' in e.currentTarget) {
                                          (e.currentTarget as any).showPicker();
                                        }
                                      } catch (error) {
                                        console.log(error);
                                      }
                                    }}
                                  />
                               </div>
                            </div>
                            
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-gray-600 uppercase">Guests</label>
                               <div className="relative">
                                  <Users className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
                                  <select className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 pl-10 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                    <option>5 People</option>
                                    <option>6+ People (Call us)</option>
                                  </select>
                               </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-600 uppercase">Name</label>
                                  <input type="text" placeholder="Full Name" className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
                               </div>
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-600 uppercase">Phone</label>
                                  <input type="tel" placeholder="07XX XXX XXX" className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
                               </div>
                            </div>
                            
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-gray-600 uppercase">Special Request</label>
                               <textarea className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 h-20 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none" placeholder="Allergies, Occasion..."></textarea>
                            </div>

                            <Button type="submit" className="w-full bg-primary text-white py-6 text-lg shadow-lg hover:bg-primary/90 mt-2">
                               Confirm Reservation
                            </Button>
                         </form>
                       </motion.div>
                    ) : (
                       <motion.div 
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         key="contact"
                         className="h-full flex flex-col"
                       >
                         <h3 className="text-2xl font-serif font-bold text-primary mb-2">Send a Message</h3>
                         <p className="text-gray-500 mb-6 text-sm">Questions? Feedback? Event planning? We're here to help.</p>
                         
                         <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-gray-600 uppercase">Name</label>
                               <input type="text" className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-600 uppercase">Email</label>
                                  <input type="email" className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" required />
                               </div>
                               <div className="space-y-1">
                                  <label className="text-xs font-bold text-gray-600 uppercase">Phone</label>
                                  <input type="tel" className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all" />
                               </div>
                            </div>
                            <div className="space-y-1">
                               <label className="text-xs font-bold text-gray-600 uppercase">Message</label>
                               <textarea className="w-full border border-gray-200 bg-gray-50/50 rounded-lg p-3 h-32 focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none" required></textarea>
                            </div>
                            
                            <Button type="submit" className="w-full bg-accent text-accent-foreground py-6 text-lg hover:bg-accent/90 mt-2">
                               <Send className="w-4 h-4 mr-2" /> Send Message
                            </Button>
                         </form>
                       </motion.div>
                    )}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default FeaturesSection;