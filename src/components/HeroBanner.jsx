import { TrendingUp, Code2, BrainCircuit, Users, Sparkles } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const challenges = [
  {
    icon: TrendingUp,
    color: '#f97316',
    bg: '#fff7ed',
    title: '學習曲線非常陡',
    desc: '資料庫、AWS 雲端伺服器、API 技術面廣',
  },
  {
    icon: Code2,
    color: '#2563eb',
    bg: '#eff6ff',
    title: '實戰經驗超級缺',
    desc: '專案經驗少，難展現複雜後端架構',
  },
  {
    icon: BrainCircuit,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    title: '系統思維要求高',
    desc: '要全面考量效能、安全、擴展性',
  },
  {
    icon: Users,
    color: '#10b981',
    bg: '#ecfdf5',
    title: '團隊合作霹靂難',
    desc: '需要多人協作，溝通整合大挑戰',
  },
];

/* Floating particle data (reduced from 10 to 6 for performance) */
const particles = [
  { size: 6, x: '10%', y: '20%', duration: '6s', delay: '0s' },
  { size: 4, x: '25%', y: '60%', duration: '8s', delay: '1s' },
  { size: 8, x: '70%', y: '15%', duration: '7s', delay: '0.5s' },
  { size: 5, x: '80%', y: '70%', duration: '9s', delay: '2s' },
  { size: 3, x: '50%', y: '80%', duration: '6s', delay: '1.5s' },
  { size: 7, x: '15%', y: '75%', duration: '10s', delay: '0.8s' },
];

/* Code-like floating tags */
const floatingTags = [
  { text: '<Java />', x: '8%', y: '25%', rotate: '-12deg', duration: '8s', delay: '0s' },
  { text: 'git push', x: '85%', y: '20%', rotate: '8deg', duration: '9.5s', delay: '0.8s' },
  { text: 'npm start', x: '5%', y: '70%', rotate: '6deg', duration: '11s', delay: '1.6s' },
  { text: 'AWS EC2', x: '88%', y: '65%', rotate: '-6deg', duration: '12.5s', delay: '2.4s' },
  { text: '{ API }', x: '75%', y: '85%', rotate: '10deg', duration: '14s', delay: '3.2s' },
  { text: 'Docker', x: '20%', y: '88%', rotate: '-8deg', duration: '15.5s', delay: '4s' },
];

export default function HeroBanner() {
  const { ref: challengesTitleRef, isInView: challengesTitleInView } = useInViewAnimation({ margin: '-80px' });
  const { ref: challengesGridRef, isInView: challengesGridInView } = useInViewAnimation({ margin: '-50px' });

  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ===== Blue Gradient Hero with CSS-animated background ===== */}
      <div style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 60%, #60a5fa 100%)',
        position: 'relative',
        paddingTop: 'clamp(120px, 20vw, 200px)',
        paddingBottom: 'clamp(80px, 14vw, 140px)',
        paddingLeft: 'clamp(16px, 4vw, 24px)',
        paddingRight: 'clamp(16px, 4vw, 24px)',
      }}>

        {/* Animated gradient overlay — pure CSS */}
        <div
          className="hero-gradient-overlay"
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 60%)',
          }}
        />

        {/* Large glowing orbs — pure CSS */}
        <div
          className="hero-orb-1"
          style={{
            position: 'absolute', top: -80, left: -80,
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147,197,253,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="hero-orb-2"
          style={{
            position: 'absolute', bottom: -100, right: -60,
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,64,175,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          className="hero-orb-3"
          style={{
            position: 'absolute', top: '40%', left: '50%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Floating particles — pure CSS */}
        {particles.map((p, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              position: 'absolute',
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              pointerEvents: 'none',
              '--duration': p.duration,
              '--delay': p.delay,
            }}
          />
        ))}

        {/* Floating code tags — pure CSS */}
        {floatingTags.map((tag) => (
          <div
            key={tag.text}
            className="hero-tag"
            style={{
              position: 'absolute',
              left: tag.x, top: tag.y,
              fontSize: 14, fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 600,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '0.05em',
              '--rotate': tag.rotate,
              '--duration': tag.duration,
              '--delay': tag.delay,
            }}
          >
            {tag.text}
          </div>
        ))}

        {/* Main content */}
        <div style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          {/* Badge with pulse */}
          <div className="hero-entrance hero-entrance-1" style={{ marginBottom: 40 }}>
            <span
              className="hero-badge"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                padding: '10px 24px', borderRadius: 9999,
                fontSize: 14, fontWeight: 600, color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
              }}
            >
              <span className="hero-sparkle" style={{ display: 'inline-flex' }}>
                <Sparkles style={{ width: 18, height: 18 }} />
              </span>
              2025 全新課程上線
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="hero-entrance hero-entrance-2"
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 800, lineHeight: 1.25,
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              color: '#fff', marginBottom: 32,
              maxWidth: 900, marginLeft: 'auto', marginRight: 'auto',
            }}
          >
            我們用
            <span className="hero-month-highlight" style={{ display: 'inline', fontWeight: 900 }}>
              6 個月
            </span>
            時間
            <br />
            手把手帶你成為
            <br />
            <span className="hero-text-glow" style={{ color: '#fbbf24', display: 'inline' }}>
              後端工程師
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="hero-entrance hero-entrance-3"
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              maxWidth: 600, margin: '0 auto 40px',
              padding: '0 16px',
              lineHeight: 1.8,
            }}
          >
            不僅帶你學會後端開發、雲端架構部署能力，
            <br className="max-sm:hidden" />
            更同時完成企業等級的團隊作品！
          </p>

          {/* CTA Buttons */}
          <div
            className="hero-entrance hero-entrance-4"
            style={{
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'center',
              gap: 16,
              padding: '0 16px',
            }}
          >
            <button
              className="hero-cta-primary sm:!w-auto sm:!min-w-[200px]"
              onClick={() => window.open('https://line.me/R/ti/p/@348vdgmy?ts=01092129&oat_content=url', '_blank')}
              style={{
                background: '#fff', color: '#1d4ed8',
                fontWeight: 700, fontSize: 16,
                padding: '14px 40px', borderRadius: 9999,
                border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                minWidth: '220px',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              立即了解課程
            </button>
            <button
              className="hero-cta-secondary sm:!w-auto sm:!min-w-[200px]"
              onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'transparent', color: '#fff',
                fontWeight: 600, fontSize: 16,
                padding: '14px 40px', borderRadius: 9999,
                border: '2px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                minWidth: '220px',
                width: '100%',
                maxWidth: '400px',
              }}
            >
              查看完整課綱
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="hero-entrance hero-entrance-5" style={{ marginTop: 64 }}>
            <div
              className="hero-scroll-indicator"
              style={{
                width: 28, height: 44, borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.3)',
                margin: '0 auto',
                display: 'flex', justifyContent: 'center', paddingTop: 8,
              }}
            >
              <div
                className="hero-scroll-dot"
                style={{
                  width: 4, height: 10, borderRadius: 2,
                  background: 'rgba(255,255,255,0.6)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Challenges Section ===== */}
      <div id="highlights" className="section-padding" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
        <div className="section-container">
          <div
            ref={challengesTitleRef}
            className={`fade-up-sm ${challengesTitleInView ? 'in-view' : ''}`}
            style={{ textAlign: 'center', marginBottom: 64 }}
          >
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1e293b' }}>
              想成為後端工程師的
              <span style={{ color: '#2563eb' }}> 隱藏挑戰</span>
            </h2>
            <p className="section-subheading" style={{ marginTop: 16 }}>
              這些痛點，我們深知。課程設計就是為了一一擊破！
            </p>
          </div>

          {/* Challenge Cards */}
          <div
            ref={challengesGridRef}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 24,
            }}
          >
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`card-bordered challenge-card fade-up ${challengesGridInView ? 'in-view' : ''} delay-${idx + 1}`}
                  style={{ padding: 36, textAlign: 'center' }}
                >
                  <div
                    className="challenge-icon"
                    style={{
                      width: 72, height: 72, borderRadius: 20,
                      background: item.bg, color: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}
                  >
                    <Icon style={{ width: 36, height: 36 }} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
