import { motion } from 'framer-motion';
import { TrendingUp, Code2, BrainCircuit, Users, Sparkles } from 'lucide-react';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

/* Floating particle data */
const particles = [
  { size: 6, x: '10%', y: '20%', duration: 6, delay: 0 },
  { size: 4, x: '25%', y: '60%', duration: 8, delay: 1 },
  { size: 8, x: '70%', y: '15%', duration: 7, delay: 0.5 },
  { size: 5, x: '80%', y: '70%', duration: 9, delay: 2 },
  { size: 3, x: '50%', y: '80%', duration: 6, delay: 1.5 },
  { size: 7, x: '15%', y: '75%', duration: 10, delay: 0.8 },
  { size: 4, x: '90%', y: '40%', duration: 7, delay: 3 },
  { size: 6, x: '40%', y: '30%', duration: 8, delay: 2.5 },
  { size: 3, x: '60%', y: '90%', duration: 5, delay: 1.2 },
  { size: 5, x: '35%', y: '10%', duration: 9, delay: 0.3 },
];

/* Code-like floating tags */
const floatingTags = [
  { text: '<Java />', x: '8%', y: '25%', rotate: -12 },
  { text: 'git push', x: '85%', y: '20%', rotate: 8 },
  { text: 'npm start', x: '5%', y: '70%', rotate: 6 },
  { text: 'AWS EC2', x: '88%', y: '65%', rotate: -6 },
  { text: '{ API }', x: '75%', y: '85%', rotate: 10 },
  { text: 'Docker', x: '20%', y: '88%', rotate: -8 },
];

export default function HeroBanner() {
  return (
    <section id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ===== Blue Gradient Hero with animated background ===== */}
      <div style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 30%, #3b82f6 60%, #60a5fa 100%)',
        position: 'relative',
        paddingTop: 200,
        paddingBottom: 140,
        paddingLeft: 24,
        paddingRight: 24,
      }}>

        {/* Animated gradient overlay (Simplified for performance) */}
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          style={{ 
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 60%)',
            willChange: 'opacity'
          }}
        />

        {/* Large glowing orbs with slow animation */}
        <motion.div
          animate={{ y: [0, -30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: -80, left: -80,
            width: 400, height: 400, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147,197,253,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
            willChange: 'transform, opacity'
          }}
        />
        <motion.div
          animate={{ y: [0, 30, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: -100, right: -60,
            width: 500, height: 500, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,64,175,0.2) 0%, transparent 70%)',
            pointerEvents: 'none',
            willChange: 'transform, opacity'
          }}
        />
        <motion.div
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '40%', left: '50%',
            width: 300, height: 300, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(96,165,250,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
            willChange: 'transform'
          }}
        />

        {/* Floating particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 10, -20, 0],
              opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: p.delay,
            }}
            style={{
              position: 'absolute',
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.4)',
              pointerEvents: 'none',
              willChange: 'transform, opacity'
            }}
          />
        ))}

        {/* Floating code tags */}
        {floatingTags.map((tag, i) => (
          <motion.div
            key={tag.text}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.15, 0.25, 0.15, 0],
              y: [0, -15, 5, -10, 0],
            }}
            transition={{
              duration: 8 + i * 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.8,
            }}
            style={{
              position: 'absolute',
              left: tag.x, top: tag.y,
              fontSize: 14, fontFamily: 'monospace',
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 600,
              transform: `rotate(${tag.rotate}deg)`,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '0.05em',
              willChange: 'transform, opacity'
            }}
          >
            {tag.text}
          </motion.div>
        ))}

        {/* Main content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}
        >
          {/* Badge with pulse */}
          <motion.div variants={childVariants} style={{ marginBottom: 40 }}>
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(8px)',
                padding: '10px 24px', borderRadius: 9999,
                fontSize: 14, fontWeight: 600, color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                willChange: 'transform, opacity'
              }}
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ display: 'inline-flex', willChange: 'transform' }}
              >
                <Sparkles style={{ width: 18, height: 18 }} />
              </motion.span>
              2025 全新課程上線
            </motion.span>
          </motion.div>

          {/* Main Heading with gradient text effect on key words */}
          <motion.h1
            variants={childVariants}
            style={{
              fontFamily: "'Noto Sans TC', sans-serif",
              fontWeight: 800, lineHeight: 1.25,
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              color: '#fff', marginBottom: 32,
              maxWidth: 900, marginLeft: 'auto', marginRight: 'auto',
            }}
          >
            我們用
            <motion.span
              animate={{ color: ['#ef4444', '#f87171', '#ef4444'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline', willChange: 'color', fontWeight: 900 }}
            >
              6 個月
            </motion.span>
            時間
            <br />
            手把手帶你成為
            <br />
            <motion.span
              animate={{
                opacity: [0.85, 1, 0.85]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{ color: '#fbbf24', display: 'inline', willChange: 'opacity' }}
            >
              後端工程師
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={childVariants}
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
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={childVariants}
            style={{
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'center',
              gap: 16,
              padding: '0 16px',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.97 }}
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
                transition: 'box-shadow 0.3s',
              }}
              className="sm:!w-auto sm:!min-w-[200px]"
            >
              立即了解課程
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2, backgroundColor: 'rgba(255,255,255,0.15)' }}
              whileTap={{ scale: 0.97 }}
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
                transition: 'all 0.3s',
              }}
              className="sm:!w-auto sm:!min-w-[200px]"
            >
              查看完整課綱
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ marginTop: 64 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: 28, height: 44, borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.3)',
                margin: '0 auto',
                display: 'flex', justifyContent: 'center', paddingTop: 8,
              }}
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: 4, height: 10, borderRadius: 2,
                  background: 'rgba(255,255,255,0.6)',
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ===== Challenges Section ===== */}
      <div id="highlights" className="section-padding" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}>
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 64 }}
          >
            <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1e293b' }}>
              想成為後端工程師的
              <span style={{ color: '#2563eb' }}> 隱藏挑戰</span>
            </h2>
            <p className="section-subheading" style={{ marginTop: 16 }}>
              這些痛點，我們深知。課程設計就是為了一一擊破！
            </p>
          </motion.div>

          {/* Challenge Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 24,
          }}>
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8, boxShadow: '0 12px 40px rgba(37,99,235,0.12)' }}
                  className="card-bordered"
                  style={{ padding: 36, textAlign: 'center', transition: 'box-shadow 0.3s' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{
                      width: 72, height: 72, borderRadius: 20,
                      background: item.bg, color: item.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}
                  >
                    <Icon style={{ width: 36, height: 36 }} strokeWidth={1.5} />
                  </motion.div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
