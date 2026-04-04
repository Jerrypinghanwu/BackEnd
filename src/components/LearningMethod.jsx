import { Video, PlayCircle, GraduationCap, Lightbulb } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const methods = [
  {
    icon: Video,
    color: '#4285f4', // Google Blue
    bg: '#f8f9fa',
    title: '專業視訊即時授課',
    points: [
      {
        label: 'Google Meet 實時互動',
        text: '我們採用 Google Meet 等專業視訊軟體，由真人老師線上即時教學。不只是單向聽課，更能隨時與老師交流，享受最高互動性的學習體驗。'
      },
      {
        label: '即時問題解答',
        text: '上課遇到卡關？你可以隨時舉手發問，老師會針對你的疑問現場示範與解惑，確保當下就能吸收。'
      },
    ],
  },
  {
    icon: PlayCircle,
    color: '#ea4335', // Google Red
    bg: '#f8f9fa',
    title: '全程錄影輕鬆複習',
    points: [
      {
        label: '課後錄影檔提供',
        text: '每堂課結束後都會提供完整的課程錄影檔，方便你針對不熟悉的片段重複觀看。'
      },
      {
        label: '打破時空限制',
        text: '無論是想溫故知新，還是當天臨時有事請假，錄影檔讓你學習進度不中斷，隨時隨地都能補課。'
      },
    ],
  },
  {
    icon: GraduationCap,
    color: '#34a853', // Google Green
    bg: '#f8f9fa',
    title: '專業顧問陪伴學習',
    points: [
      {
        label: '專屬顧問全程協助',
        text: '學習路上不孤單！我們提供專業顧問老師，針對你上課遇到的任何困難給予即時協助。'
      },
      {
        label: '陪伴式學習體驗',
        text: '從開課到結業，顧問老師將一路陪伴並追蹤你的學習狀況，確保你遇到的技術或操作難題都能迎刃而解。'
      },
    ],
  },
];

export default function LearningMethod() {
  const { ref: titleRef, isInView: titleInView } = useInViewAnimation();
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation({ margin: '-50px' });

  return (
    <section id="learning" className="section-padding" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Title */}
        <div
          ref={titleRef}
          className={`fade-up-sm ${titleInView ? 'in-view' : ''}`}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1e293b' }}>
            在課程中，你會<span style={{ color: '#2563eb' }}>怎麼學習</span>？
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            多元學習方式，讓你從即時互動到課後複習全面覆蓋
          </p>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`card fade-up ${gridInView ? 'in-view' : ''} delay-${idx + 1}`}
                style={{ 
                  padding: '40px 32px', 
                  background: item.bg,
                  borderTop: `5px solid ${item.color}`,
                  borderRadius: 20,
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: '#fff', color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.04)'
                }}>
                  <Icon style={{ width: 28, height: 28 }} strokeWidth={2} />
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1e293b', marginBottom: 24 }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <span style={{ 
                        fontSize: 15, 
                        fontWeight: 700, 
                        color: '#334155',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: item.color }} />
                        {pt.label}
                      </span>
                      <p style={{ 
                         fontSize: 14, 
                         color: '#64748b', 
                         lineHeight: 1.6,
                         paddingLeft: 14
                      }}>
                        {pt.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reminder */}
        <div 
          className={`fade-up ${gridInView ? 'in-view' : ''}`}
          style={{ 
            marginTop: 64, 
            padding: '24px 32px',
            background: 'rgba(37, 99, 235, 0.05)',
            borderRadius: 16,
            border: '1px dashed rgba(37, 99, 235, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            transitionDelay: '0.4s'
          }}
        >
          <Lightbulb style={{ color: '#2563eb', flexShrink: 0 }} size={24} />
          <p style={{ fontSize: 16, color: '#1e3a8a', fontWeight: 600, margin: 0 }}>
            <span style={{ color: '#2563eb' }}>溫馨提醒：</span> 所有的教學環節都設計為「高互動性」，就是要讓你問到懂、學到會！
          </p>
        </div>
      </div>
    </section>
  );
}
