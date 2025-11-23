import React, { useState, useEffect } from 'react';
import { Menu, X, Recycle, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '서비스 안내', href: '#services' },
    { name: '폐차 절차', href: '#process' },
    { name: 'AI 견적상담', href: '#ai-advisor' },
    { name: '오시는 길', href: '#footer' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled 
          ? 'bg-brand-dark/90 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
              <Recycle className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-wide text-white">
              (주)한국<span className="text-green-400">종합폐차장</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </a>
              ))}
              <a href="tel:080-666-9000" className="bg-white text-brand-dark px-5 py-2.5 rounded-full font-bold text-sm hover:bg-green-50 transition-colors flex items-center gap-2">
                <Phone size={16} className="text-green-600" />
                무료 상담 080-666-9000
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="bg-white/5 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-card border-t border-white/10 absolute w-full shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:080-666-9000" className="w-full text-center text-brand-dark bg-green-400 hover:bg-green-500 block px-3 py-3 rounded-md text-base font-bold mt-4 transition-colors">
              전화 상담 연결
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;