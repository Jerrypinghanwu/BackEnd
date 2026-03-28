import { Code2, ArrowUpRight, Users } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const audiences = [
  {
    icon: Code2,
    color: '#2563eb',
    bg: '#eff6ff',
    title: '具基礎框架經驗的開發者',
    desc: '具備 3 個月以上使用 Vue.js、React 或 Angular 進行 API 介接的實務工作經驗',
  },
  {
    icon: ArrowUpRight,
    color: '#f97316',
    bg: '#fff7ed',
    title: '尋求突破的工程師',
    desc: '目前月薪 3~5 萬的前、後端工程師，渴望挑戰更高薪資與技術成長',
  },
  {
    icon: Users,
    color: '#10b981',
    bg: '#ecfdf5',
    title: '想學習團隊協作的開發者',
    desc: '缺乏 5~10 人以上團隊協作經驗，希望提升軟體開發流程中的協作能力',
  },
];

export default function TargetAudience() {
  const { ref: titleRef, isInView: titleInView } = useInViewAnimation();
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation({ margin: '-50px' });

  return (
    <section id="audience" className="section-padding" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Title */}
        <div
          ref={titleRef}
          className={`fade-up-sm ${titleInView ? 'in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1e293b' }}>
            誰適合<span style={{ color: '#2563eb' }}>此培訓</span>？
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            無論你是初學者還是想進階的工程師，我們都為你準備了最適合的學習路徑
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card fade-up ${gridInView ? 'in-view' : ''} delay-${idx + 1}`}
                style={{ padding: 44, textAlign: 'center' }}
              >
                <div style={{
                  width: 72, height: 72, borderRadius: 20,
                  background: item.bg, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px',
                }}>
                  <Icon style={{ width: 32, height: 32 }} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1e293b', marginBottom: 16 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.8 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
