import { ShoppingCart, PlayCircle, Ticket, Rocket, BookOpen } from 'lucide-react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const projects = [
  {
    icon: ShoppingCart,
    number: 1,
    title: '電商交易平台',
    color: '#2563eb',
    bg: '#eff6ff',
    challenges: ['產品訂單設計', '第三方金流串接', '購物車'],
  },
  {
    icon: PlayCircle,
    number: 2,
    title: '影音課程平台',
    color: '#8b5cf6',
    bg: '#f5f3ff',
    challenges: ['影音串流技術', '影音播放介面', '課程管理架構'],
  },
  {
    icon: Ticket,
    number: 3,
    title: '活動票務系統',
    color: '#f97316',
    bg: '#fff7ed',
    challenges: ['票務交易', '第三方支付', '行動取票介面'],
  },
  {
    icon: Rocket,
    number: 4,
    title: '群眾募資網站',
    color: '#ec4899',
    bg: '#fdf2f8',
    challenges: ['SEO', '資金數據計算', '產品交付流程'],
  },
  {
    icon: BookOpen,
    number: 5,
    title: '知識內容訂閱服務',
    color: '#10b981',
    bg: '#ecfdf5',
    challenges: ['易用的頁面編輯器', '訂閱制服務設計', '會員管理機制'],
  },
];

export default function Projects() {
  const { ref: titleRef, isInView: titleInView } = useInViewAnimation();
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation({ margin: '-40px' });

  return (
    <section id="projects" className="section-padding" style={{
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
            導入 AI 加值服務，
            <br />
            成為業界<span style={{ color: '#2563eb' }}>搶手人才</span>
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            多人組隊，從各商務主題中挑選其一進行開發
          </p>
        </div>

        {/* Project Cards — responsive grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.title}
                className={`card fade-up ${gridInView ? 'in-view' : ''} delay-${idx + 1}`}
                style={{ padding: 32, textAlign: 'center' }}
              >
                {/* Icon */}
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: proj.bg, color: proj.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <Icon style={{ width: 28, height: 28 }} strokeWidth={1.8} />
                </div>

                {/* Number label */}
                <div style={{ fontSize: 12, fontWeight: 700, color: proj.color, marginBottom: 8, letterSpacing: '0.08em' }}>
                  主題 {proj.number}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1e293b', marginBottom: 20 }}>
                  {proj.title}
                </h3>

                {/* Challenges */}
                <div>
                  {proj.challenges.map((ch) => (
                    <div key={ch} style={{
                      fontSize: 13, color: '#64748b',
                      padding: '10px 0',
                      borderBottom: '1px solid #f1f5f9',
                    }}>
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
