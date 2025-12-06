import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Button } from './ui/button';

interface NavbarProps {
  onBookNow: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className={`p-2 rounded-full ${isScrolled ? 'bg-primary text-white' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
             <UtensilsCrossed size={24} />
           </div>
           <span className={`text-xl font-bold font-serif tracking-wider ${isScrolled ? 'text-primary' : 'text-white'}`}>
             REY SAREY
           </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? 'text-foreground' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={onBookNow}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold"
          >
            Book a Table
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
             <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => {
              onBookNow();
              setIsMobileMenuOpen(false);
          }} className="w-full bg-primary text-white">
            Book a Table
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;