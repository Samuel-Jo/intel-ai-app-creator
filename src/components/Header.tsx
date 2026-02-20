import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
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
    { name: '개요', href: '#program' },
    { name: '커리큘럼', href: '#curriculum' },
    { name: '기술스택', href: '#tech-stack' },
    { name: '일정/장소', href: '#schedule' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-lg' : 'py-6 bg-white'}`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        color: isScrolled ? 'white' : 'black'
      }}
    >
      <div className="container flex items-center justify-between relative text-inherit">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 group cursor-pointer z-10"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm" />
          </div>
          <div className="text-xl font-bold tracking-tight font-heading">
            Intel AI Creator
          </div>
        </motion.div>

        {/* Desktop Nav - Centered */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-bold ${isScrolled ? 'text-text-muted hover:text-white' : 'text-gray-600 hover:text-blue-600'} transition-colors tracking-tight font-heading`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA - Right */}
        <div className="hidden lg:flex items-center z-10">
          <button className="px-8 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            지원하기
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center glass rounded-xl text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 glass"
            style={{
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(30px)',
              padding: '2rem'
            }}
          >
            <ul className="flex flex-col gap-6 mb-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-2xl font-bold text-white block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <button className="btn-premium btn-primary w-full py-4 text-lg">
              지금 바로 지원하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
