import { Compass, Palette } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const supports = [
  {
    icon: Compass,
    color: '#2563eb',
    bg: '#eff6ff',
    title: '專題教練',
    desc: '讓有專業工作經驗的老司機教練，引導團隊進行專案開發方向與時程追蹤。',
  },
  {
    icon: Palette,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    title: 'UI 設計助教',
    desc: '將會由合作的 UI 設計助教團隊，檢視您開發的 Web 設計是否符合使用者體驗與邏輯。',
  },
];

const steps = [
  { step: 1, title: '作品主題選擇', color: '#2563eb' },
  { step: 2, title: '進度追蹤', color: '#f97316' },
  { step: 3, title: '設計助教檢核', color: '#8b5cf6' },
  { step: 4, title: '網站開發', color: '#10b981', details: ['版面製作', 'API 串接', '資料庫設計', '細節優化'] },
  { step: 5, title: '作品發表', color: '#ec4899', details: ['簡報製作', '專題發表', '準備求職'] },
];

export default function Instructors() {
  const { ref: titleRef, isInView: titleInView } = useInViewAnimation();
  const { ref: supportsRef, isInView: supportsInView } = useInViewAnimation();
  const { ref: stepsTitle, isInView: stepsTitleInView } = useInViewAnimation();
  const { ref: stepsGrid, isInView: stepsGridInView } = useInViewAnimation();

  return (
    <section id="instructors" className="section-padding" style={{
      background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Title */}
        <div
          ref={titleRef}
          className={`fade-up-sm ${titleInView ? 'in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1e293b' }}>
            專業人士全程陪跑，
            <br />
            從 0 到 1 完成<span style={{ color: '#2563eb' }}>企業級作品</span>
          </h2>
        </div>

        {/* Support Cards */}
        <div ref={supportsRef} className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-20">
          {supports.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card flex flex-col sm:flex-row items-start gap-6 p-8 sm:p-10 fade-up ${supportsInView ? 'in-view' : ''} delay-${idx + 1}`}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  background: item.bg, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon style={{ width: 28, height: 28 }} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1e293b', marginBottom: 12 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Steps Section */}
        <div
          ref={stepsTitle}
          className={`fade-up-sm ${stepsTitleInView ? 'in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <h3 className="section-heading" style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)', color: '#1e293b' }}>
            專題怎麼做？
          </h3>
          <p style={{ color: '#64748b', marginTop: 12, fontSize: 16 }}>
            由專題教練引導，透過五大步驟完成團隊專題
          </p>
        </div>

        <div ref={stepsGrid} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.step}
              className={`card fade-scale ${stepsGridInView ? 'in-view' : ''} delay-${idx + 1}`}
              style={{ padding: 28, textAlign: 'center' }}
            >
              <div style={{ fontSize: 24, fontWeight: 800, color: s.color, marginBottom: 12 }}>
                Step {s.step}
              </div>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: s.details ? 16 : 0 }}>
                {s.title}
              </h4>
              {s.details && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                  {s.details.map((d) => (
                    <span key={d} style={{ fontSize: 13, color: '#64748b' }}>{d}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
