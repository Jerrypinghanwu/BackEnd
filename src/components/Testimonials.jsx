import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

/* Animated counter hook */
function useCountUp(target, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startCounting || hasRun.current) return;
    hasRun.current = true;

    const startTime = performance.now();
    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [startCounting, target, duration]);

  return count;
}

function AnimatedStat({ numericValue, suffix, label, delay, isInView }) {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [isInView, delay]);

  const count = useCountUp(numericValue, 2000, started);

  const isDecimal = numericValue % 1 !== 0;
  const displayValue = isDecimal ? count.toFixed(1) : Math.round(count);

  return (
    <div
      className={`fade-up-sm ${isInView ? 'in-view' : ''}`}
      style={{ textAlign: 'center', minWidth: 140, transitionDelay: `${delay / 1000}s` }}
    >
      <div style={{ fontSize: 'clamp(32px, 8vw, 42px)', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>
        {displayValue}{suffix}
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 10 }}>
        {label}
      </div>
    </div>
  );
}

const statsData = [
  { numericValue: 98, suffix: '%', label: '學員滿意度', delay: 0 },
  { numericValue: 300, suffix: '+', label: '累計培訓學員', delay: 200 },
  { numericValue: 87, suffix: '%', label: '結業後半年內轉職成功率', delay: 400 },
  { numericValue: 4.9, suffix: '', label: '平均課程評分', delay: 600 },
];

const testimonials = [
  {
    name: '陳柏翰',
    role: '前端轉後端工程師',
    company: '目前任職於某知名科技公司',
    photo: '/images/student1.png',
    rating: 5,
    text: '原本只會寫 React，對後端一竅不通。經過一年的培訓，我不但學會了 Node.js、PostgreSQL、AWS 部署，還完成了一個完整的電商專案。現在我已經成功轉職後端工程師，薪水也翻了將近一倍！課程的實戰設計真的是最大的優勢。',
    highlight: '成功轉職，薪水翻倍',
  },
  {
    name: '林雅婷',
    role: '全端開發工程師',
    company: '新創團隊技術負責人',
    photo: '/images/student2.png',
    rating: 5,
    text: '我是非本科出身，之前自學了半年都覺得很迷惘。兆宇培育的課程有系統地帶我從基礎到進階，每週的作業和助教批改讓我進步飛快。直播課程可以即時問問題，這點真的很棒。現在我在新創公司負責整個後端架構，非常感謝這段學習經歷。',
    highlight: '非本科成功轉職',
  },
  {
    name: '張家豪',
    role: '後端資深工程師',
    company: '金融科技公司',
    photo: '/images/student3.png',
    rating: 5,
    text: '本來在公司只負責維護舊系統，想要提升技術卻不知道從何下手。參加培訓後，學到了 Docker、AWS、CI/CD 等現代化技術，專題作品也讓我的履歷更加亮眼。面試的時候，面試官對我的專題評價很高，順利拿到了更好的 offer。',
    highlight: '技術升級，成功跳槽',
  },
];

export default function Testimonials() {
  const { ref: titleRef, isInView: titleInView } = useInViewAnimation();
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation({ margin: '-50px' });
  const { ref: statsRef, isInView: statsInView } = useInViewAnimation({ margin: '-100px' });

  return (
    <section id="testimonials" style={{
      background: 'linear-gradient(180deg, #fff 0%, #eff6ff 50%, #fff 100%)',
      padding: 'clamp(60px, 10vw, 100px) clamp(16px, 4vw, 24px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Title */}
        <div
          ref={titleRef}
          className={`fade-up-sm ${titleInView ? 'in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            color: '#1e293b',
          }}>
            學員真實<span style={{ color: '#2563eb' }}>心得回饋</span>
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            聽聽已結業的學員們怎麼說，他們的經歷就是最好的證明
          </p>
        </div>

        {/* Testimonial Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className={`card fade-up ${gridInView ? 'in-view' : ''} delay-${idx + 1}`}
              style={{
                padding: 36,
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Quote icon */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                color: '#e2e8f0',
              }}>
                <Quote style={{ width: 40, height: 40 }} strokeWidth={1} />
              </div>

              {/* Profile */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 16,
                marginBottom: 24,
              }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  overflow: 'hidden', flexShrink: 0,
                  border: '3px solid #dbeafe',
                  boxShadow: '0 4px 12px rgba(37,99,235,0.1)',
                  background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  <span style={{
                    fontSize: 22, fontWeight: 700, color: '#fff',
                    position: 'absolute',
                  }}>
                    {t.name.charAt(0)}
                  </span>
                  <img
                    src={t.photo}
                    alt={t.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      position: 'relative', zIndex: 1,
                    }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', marginBottom: 4 }}>
                    {t.name}
                  </h3>
                  <p style={{ fontSize: 13, color: '#2563eb', fontWeight: 600, marginBottom: 2 }}>
                    {t.role}
                  </p>
                  <p style={{ fontSize: 12, color: '#94a3b8' }}>
                    {t.company}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    style={{ width: 18, height: 18, color: '#f59e0b', fill: '#f59e0b' }}
                  />
                ))}
              </div>

              {/* Highlight badge */}
              <div style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                background: '#eff6ff',
                color: '#2563eb',
                fontSize: 13,
                fontWeight: 600,
                padding: '6px 14px',
                borderRadius: 8,
                marginBottom: 16,
              }}>
                {t.highlight}
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: 15, color: '#475569',
                lineHeight: 1.9, flex: 1,
              }}>
                「{t.text}」
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats — animated counting */}
        <div
          ref={statsRef}
          className="stats-bar"
          style={{
            display: 'flex', flexWrap: 'wrap',
            justifyContent: 'center', gap: 'clamp(24px, 5vw, 48px)',
            marginTop: 'clamp(48px, 8vw, 80px)',
            padding: 'clamp(36px, 6vw, 52px) clamp(20px, 4vw, 32px)',
            background: 'linear-gradient(135deg, #2563eb, #3b82f6)',
            borderRadius: 'clamp(16px, 3vw, 24px)',
            boxShadow: '0 8px 40px rgba(37,99,235,0.25)',
          }}
        >
          {statsData.map((stat) => (
            <AnimatedStat
              key={stat.label}
              numericValue={stat.numericValue}
              suffix={stat.suffix}
              label={stat.label}
              delay={stat.delay}
              isInView={statsInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
