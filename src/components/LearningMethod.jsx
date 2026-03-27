import { motion } from 'framer-motion';
import { Video, ListChecks, MessageCircleQuestion } from 'lucide-react';

const methods = [
  {
    icon: Video,
    color: '#2563eb',
    bg: '#eff6ff',
    title: '直播、影音教學雙管齊下',
    points: [
      '預習課程：報名課程即可獲得課前預習，提早註冊直接贏在起跑點',
      '直播互動：除了看老師 Live Coding，還能隨時在直播間發問，即時獲得解答！',
    ],
  },
  {
    icon: ListChecks,
    color: '#f97316',
    bg: '#fff7ed',
    title: '每日、每週任務',
    points: [
      '每日任務：每天一個小任務，無痛養成你的原子習慣',
      '每週任務：接近實戰的作業設計，另有真人助教批改並給予實戰回饋',
    ],
  },
  {
    icon: MessageCircleQuestion,
    color: '#10b981',
    bg: '#ecfdf5',
    title: '助教服務',
    points: [
      '程式卡關抱大腿：提供線上程式助教發問，幫助學習不卡關',
      '作業批改服務：每週都有課程作業，提交後將獲得批改回饋',
    ],
  },
];

export default function LearningMethod() {
  return (
    <section id="learning" className="section-padding" style={{ background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <h2 className="section-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#1e293b' }}>
            在課程中，你會<span style={{ color: '#2563eb' }}>怎麼學習</span>？
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            多元學習方式，讓你從預習到實戰全面覆蓋
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {methods.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card"
                style={{ padding: 36 }}
              >
                <div style={{
                  width: 64, height: 64, borderRadius: 16,
                  background: item.bg, color: item.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 28,
                }}>
                  <Icon style={{ width: 32, height: 32 }} strokeWidth={1.8} />
                </div>

                <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1e293b', marginBottom: 20 }}>
                  {item.title}
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {item.points.map((pt) => (
                    <li key={pt} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      fontSize: 14, color: '#475569', lineHeight: 1.7,
                    }}>
                      <span style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: item.color, flexShrink: 0, marginTop: 7,
                      }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
