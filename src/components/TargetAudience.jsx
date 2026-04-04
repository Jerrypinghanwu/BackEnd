import { Sparkles, Rocket, TrendingUp, UserCheck } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const audiences = [
  {
    icon: Sparkles,
    color: '#3b82f6',
    bg: '#eff6ff',
    title: '程式零基礎，想掌握核心技能的你',
    desc: '即使沒有任何背景，只要對開發充滿熱情，我們將帶領你從基礎紮根，在 AI 浪潮中建立不可取代的硬實力。',
  },
  {
    icon: Rocket,
    color: '#f97316',
    bg: '#fff7ed',
    title: '渴望實戰，想成為全方位工程師的你',
    desc: '不再只是紙上談兵！透過親手打造企業級的電商與票務系統，累積高品質的專案作品集，讓你出師即具備業界即戰力。',
  },
  {
    icon: TrendingUp,
    color: '#10b981',
    bg: '#ecfdf5',
    title: '追求突破，想透過轉職實現加薪的你',
    desc: '專為尋求薪資天花板突破的開發者設計。無論你是前端想跨域後端，或是跨領域轉職，我們助你成功卡位高薪職缺，翻轉職涯身價。',
  },
  {
    icon: UserCheck,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    title: '不限背景，跨年齡層的轉職先行者',
    desc: '學習永不嫌晚，我們的學員橫跨 20 至 55 歲，遍佈台灣各產業。只要你有心轉型，這裡就是你最強大的技術後盾。',
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
            🚀 <span style={{ color: '#2563eb' }}>適合對象</span>
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            無論你是初學者還是尋求轉職，我們都為你準備了最專業的職涯路徑
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card fade-up ${gridInView ? 'in-view' : ''} delay-${idx + 1}`}
                style={{ padding: '40px 24px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: item.bg, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                  flexShrink: 0
                }}>
                  <Icon style={{ width: 28, height: 28 }} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1e293b', marginBottom: 16, lineHeight: 1.4 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, flexGrow: 1 }}>
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
