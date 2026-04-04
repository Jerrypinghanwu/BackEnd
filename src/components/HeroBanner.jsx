import { useState } from 'react';
import { TrendingUp, Code2, BrainCircuit, Users, Sparkles, Zap, ShieldCheck, Database, Target, ArrowRight } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const salaryData = [
  {
    level: '入行起步 (0-1年)',
    salary: '$50萬 - $70萬',
    percent: 30,
    color: '#3b82f6',
    value: '掌握基礎，開始具備實戰開發能力。',
  },
  {
    level: '轉職跳槽 (2-3年)',
    salary: '$80萬 - $120萬',
    percent: 60,
    color: '#6366f1',
    value: '成為即戰力，能獨立負責企業級專案。',
  },
  {
    level: '資深架構 (5年以上)',
    salary: '$150萬 - $300萬+',
    percent: 100,
    color: '#8b5cf6',
    value: '決定系統架構，年薪隨技術護城河無限成長。',
  },
];

const aiReasons = [
  {
    icon: Database,
    title: 'AI 只能寫片段，無法蓋大樓',
    desc: 'AI 可以幫你寫一小段代碼，但它沒辦法幫企業設計出一套能同時讓萬人搶票、而不當機的「票務系統」。這需要工程師的系統設計大腦。',
  },
  {
    icon: ShieldCheck,
    title: 'AI 會出錯，工程師負責「扛責任」',
    desc: 'AI 生成的內容常有錯誤或資安漏洞。企業需要專業後端來確保系統極致穩定，這是 AI 永遠給不了的安心感。',
  },
  {
    icon: Target,
    title: 'AI 沒有商業邏輯',
    desc: '老闆的需求總是變來變去，AI 聽不懂潛台詞。只有工程師能擔任技術決策者，把複雜的人類需求變成穩定運作的獲利系統。',
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
  const [hoveredSalary, setHoveredSalary] = useState(null);
  const { ref: aiSectionRef, isInView: aiSectionInView } = useInViewAnimation({ margin: '-80px' });
  const { ref: salaryHeaderRef, isInView: salaryHeaderInView } = useInViewAnimation();

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

      {/* ===== AI & Career Section ===== */}
      <div id="ai-vision" className="section-padding" style={{ background: '#fff' }}>
        <div className="section-container" ref={aiSectionRef}>
          {/* AI Intro */}
          <div className={`fade-up-sm ${aiSectionInView ? 'in-view' : ''}`} style={{ textAlign: 'center', marginBottom: 80 }}>
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', color: '#1e293b', maxWidth: 1000, margin: '0 auto' }}>
              🔍 AI 浪潮來襲：這不是威脅，
              <br className="md:block hidden" />
              而是你<span style={{ color: '#2563eb' }}>「年薪翻倍」</span>的最好時機！
            </h2>
            <div style={{ maxWidth: 800, margin: '32px auto 0' }}>
              <p style={{ fontSize: 18, color: '#475569', fontWeight: 500, lineHeight: 1.6 }}>
                很多人問：「AI 會寫程式了，現在學開發還有前途嗎？」
                <br />
                事實是：<span style={{ color: '#ef4444', fontWeight: 700 }}>AI 淘汰的是「只會打字」的人，而不是「會思考」的工程師。</span>
              </p>
            </div>
          </div>

          {/* AI Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ marginBottom: 100 }}>
            {aiReasons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`fade-up ${aiSectionInView ? 'in-view' : ''} delay-${idx + 1}`}
                  style={{
                    padding: 40, background: '#f8fafc', borderRadius: 24,
                    border: '1px solid #e2e8f0', transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: '#eff6ff', color: '#2563eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 24
                  }}>
                    <Icon size={28} />
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75 }}>{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Salary Section */}
          <div ref={salaryHeaderRef} className={`fade-up-sm ${salaryHeaderInView ? 'in-view' : ''}`}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#1e293b' }}>
                💰 轉職後端工程師：<span style={{ color: '#2563eb' }}>看不見天花板</span>的薪資成長
              </h3>
              <p style={{ marginTop: 12, color: '#64748b', fontSize: 16 }}>
                後端工程師是所有互聯網產品的「心臟」，地位無可取代
              </p>
            </div>

            {/* Salary Interactive Chart */}
            <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
              {salaryData.map((stage, idx) => (
                <div
                  key={stage.level}
                  onMouseEnter={() => setHoveredSalary(idx)}
                  onMouseLeave={() => setHoveredSalary(null)}
                  style={{
                    padding: '24px 32px', borderRadius: 20,
                    background: hoveredSalary === idx ? '#fff' : '#f8fafc',
                    boxShadow: hoveredSalary === idx ? '0 20px 40px -12px rgba(0,0,0,0.1)' : 'none',
                    border: hoveredSalary === idx ? `2px solid ${stage.color}44` : '2px solid transparent',
                    cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: hoveredSalary === idx ? 'translateX(10px) scale(1.02)' : 'translateX(0) scale(1)',
                    position: 'relative', overflow: 'hidden'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16, position: 'relative', zIndex: 2 }}>
                    <div style={{ minWidth: 200 }}>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>
                        {stage.level}
                      </p>
                      <h4 style={{ fontSize: 24, fontWeight: 800, color: '#1e293b' }}>{stage.salary}</h4>
                    </div>
                    
                    <div style={{ flex: 1, height: 12, background: '#e2e8f0', borderRadius: 99, overflow: 'hidden', minWidth: 200 }}>
                      <div style={{
                        width: `${stage.percent}%`, height: '100%',
                        background: `linear-gradient(90deg, ${stage.color}88, ${stage.color})`,
                        borderRadius: 99, transition: 'width 1s ease',
                        boxShadow: hoveredSalary === idx ? `0 0 20px ${stage.color}aa` : 'none'
                      }} />
                    </div>

                    <div style={{ 
                      width: 48, height: 48, borderRadius: '50%', background: hoveredSalary === idx ? stage.color : '#e2e8f0',
                      color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease', transform: hoveredSalary === idx ? 'rotate(-45deg)' : 'none'
                    }}>
                      <Zap size={24} fill={hoveredSalary === idx ? '#fff' : 'none'} />
                    </div>
                  </div>

                  {/* Expansion Detail */}
                  <div style={{
                    maxHeight: hoveredSalary === idx ? 100 : 0,
                    opacity: hoveredSalary === idx ? 1 : 0,
                    overflow: 'hidden', transition: 'all 0.3s ease',
                    marginTop: hoveredSalary === idx ? 16 : 0
                  }}>
                    <div style={{ padding: '16px 0 0', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <ArrowRight size={18} style={{ color: stage.color }} />
                      <p style={{ color: '#475569', fontSize: 15, fontWeight: 500 }}>{stage.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 48 }}>
              <blockquote style={{ fontSize: 20, fontWeight: 700, color: '#1e293b', fontStyle: 'italic' }}>
                「現在轉職工程師，年薪百萬不再是夢想，而是你的職涯標配。」
              </blockquote>
            </div>
          </div>

          {/* AI Footer Call to Action */}
          <div className={`fade-up ${aiSectionInView ? 'in-view' : ''}`} style={{ 
            marginTop: 100, padding: '64px 40px', borderRadius: 32,
            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
            textAlign: 'center', color: '#fff'
          }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: 24 }}>🚀 如何不被 AI 取代？</h3>
            <p style={{ fontSize: 18, color: '#cbd5e1', maxWidth: 800, margin: '0 auto 40px', lineHeight: 1.8 }}>
              答案只有一個：<span style={{ color: '#fbbf24', fontWeight: 700 }}>學會如何「指揮」AI，並掌握它做不到的底層技術。</span>
              <br />
              在我們的課程中，我們不教你死背語法，我們教你 Linux 底層、資料庫邏輯與架構設計。
              這才是讓你即使在 AI 時代，依然被企業高薪爭搶的硬實力！
            </p>
            <button 
              onClick={() => window.open('https://line.me/R/ti/p/@348vdgmy?ts=01092129&oat_content=url', '_blank')}
              className="btn-primary" 
              style={{ padding: '16px 48px', fontSize: 18, background: '#fff', color: '#1e293b', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            >
              獲取 AI 時代職涯規劃 <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
