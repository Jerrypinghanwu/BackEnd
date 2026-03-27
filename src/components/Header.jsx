import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '課程亮點', id: 'highlights' },
  { label: '課程大綱', id: 'curriculum' },
  { label: '學習方式', id: 'learning' },
  { label: '專題實作', id: 'projects' },
  { label: '適合對象', id: 'audience' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Framework-optimized extreme scroll handling to avoid manual repaint issues
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? '#ffffff' : 'transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <motion.div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none', flexShrink: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span style={{
              fontSize: 20, fontWeight: 700, letterSpacing: '0.05em',
              color: scrolled ? '#1e293b' : '#fff',
              transition: 'color 0.3s',
            }}>
              兆宇培育
            </span>
          </motion.div>

          {/* Desktop Navigation — center area */}
          <nav style={{
            display: 'none',
            alignItems: 'center',
            gap: '36px',
          }}
          className="lg:!flex"
          aria-label="主導航"
          >
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none', border: 'none',
                  fontSize: 14, fontWeight: 500,
                  color: scrolled ? '#475569' : 'rgba(255,255,255,0.85)',
                  cursor: 'pointer', whiteSpace: 'nowrap',
                  transition: 'color 0.3s',
                  padding: '8px 0',
                }}
                onMouseEnter={(e) => e.target.style.color = scrolled ? '#2563eb' : '#fff'}
                onMouseLeave={(e) => e.target.style.color = scrolled ? '#475569' : 'rgba(255,255,255,0.85)'}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA — right side */}
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('curriculum')}
            style={{
              display: 'none',
              alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              color: '#fff', fontWeight: 600, fontSize: 14,
              padding: '10px 24px', borderRadius: 9999,
              border: 'none', cursor: 'pointer', flexShrink: 0,
              boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
            }}
            className="lg:!inline-flex"
          >
            立即了解課程
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            style={{ background: 'none', border: 'none', padding: 8, borderRadius: 8, cursor: 'pointer', display: 'block' }}
            className="lg:!hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="選單"
          >
            {mobileOpen ? (
              <X style={{ width: 24, height: 24, color: scrolled ? '#1e293b' : '#fff' }} />
            ) : (
              <Menu style={{ width: 24, height: 24, color: scrolled ? '#1e293b' : '#fff' }} />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: '#fff',
              display: 'flex', flexDirection: 'column',
              paddingTop: 96, paddingLeft: 32, paddingRight: 32,
            }}
            className="lg:!hidden"
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }} aria-label="行動裝置導航">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    textAlign: 'left', fontSize: 18, fontWeight: 500,
                    color: '#334155', padding: '16px 0',
                    borderBottom: '1px solid #f1f5f9',
                    background: 'none', border: 'none', borderBottomWidth: 1, borderBottomStyle: 'solid', borderBottomColor: '#f1f5f9',
                    cursor: 'pointer',
                  }}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="btn-primary"
              style={{ marginTop: 32, width: '100%', padding: '16px 0', fontSize: 18 }}
              onClick={() => scrollToSection('curriculum')}
            >
              立即了解課程
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
