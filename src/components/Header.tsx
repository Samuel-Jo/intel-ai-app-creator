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
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-lg' : 'py-6 bg-transparent'}`}
      style={{
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none'
      }}
    >
      <div className="container flex items-center justify-between relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 group cursor-pointer z-10"
        >
          <div className="text-xl md:text-2xl font-black tracking-tighter text-white font-heading">
            INTEL <span className="text-accent-yellow transition-all group-hover:shadow-neon">AI APP</span> CREATOR
          </div>
        </motion.div>

        {/* Desktop Nav & CTA - Right side group */}
        <div className="hidden lg:flex items-center gap-10 z-10">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-text-muted hover:text-white transition-colors tracking-widest uppercase font-heading"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="btn-premium btn-primary px-8 py-3 text-sm" style={{ background: '#3b82f6' }}>
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
    </nav>
  );
}
