import { useState, useEffect, useCallback } from 'react';
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
  const [headerVisible, setHeaderVisible] = useState(false);

  // Optimized passive scroll listener
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    // Trigger entrance animation
    requestAnimationFrame(() => setHeaderVisible(true));
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = useCallback((id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease, transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled ? '#ffffff' : 'transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none',
          transform: headerVisible ? 'translateY(0)' : 'translateY(-80px)',
          opacity: headerVisible ? 1 : 0,
        }}
      >
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 4vw, 24px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <div
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', userSelect: 'none', flexShrink: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span style={{
              fontSize: 20, fontWeight: 700, letterSpacing: '0.05em',
              color: scrolled ? '#1e293b' : '#fff',
              transition: 'color 0.3s',
            }}>
              兆宇培育
            </span>
          </div>

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
          <button
            onClick={() => scrollToSection('curriculum')}
            style={{
              display: 'none',
              alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
              color: '#fff', fontWeight: 600, fontSize: 14,
              padding: '10px 24px', borderRadius: 9999,
              border: 'none', cursor: 'pointer', flexShrink: 0,
              boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
              transition: 'transform 0.2s ease, box-shadow 0.3s ease',
            }}
            className="lg:!inline-flex"
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05) translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            立即了解課程
          </button>

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
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 40,
            background: '#fff',
            display: 'flex', flexDirection: 'column',
            paddingTop: 'clamp(80px, 12vw, 96px)',
            paddingLeft: 'clamp(24px, 6vw, 32px)',
            paddingRight: 'clamp(24px, 6vw, 32px)',
            paddingBottom: 'env(safe-area-inset-bottom)',
            animation: 'fadeIn 0.3s ease',
          }}
          className="lg:!hidden"
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 8 }} aria-label="行動裝置導航">
            {navLinks.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  textAlign: 'left', fontSize: 18, fontWeight: 500,
                  color: '#334155', padding: '16px 0',
                  background: 'none', border: 'none',
                  borderBottom: '1px solid #f1f5f9',
                  cursor: 'pointer',
                  opacity: 0,
                  animation: `heroContentFadeIn 0.4s ease forwards`,
                  animationDelay: `${i * 0.08}s`,
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            className="btn-primary"
            style={{
              marginTop: 32, width: '100%', padding: '16px 0', fontSize: 18,
              opacity: 0,
              animation: 'heroContentFadeIn 0.4s ease forwards',
              animationDelay: '0.4s',
            }}
            onClick={() => scrollToSection('curriculum')}
          >
            立即了解課程
          </button>
        </div>
      )}
    </>
  );
}
