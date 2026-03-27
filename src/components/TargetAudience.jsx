import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, Users } from 'lucide-react';

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
  return (
    <section id="audience" className="section-padding" style={{ background: '#fff' }}>
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
            誰適合<span style={{ color: '#2563eb' }}>此培訓</span>？
          </h2>
          <p className="section-subheading" style={{ marginTop: 16 }}>
            無論你是初學者還是想進階的工程師，我們都為你準備了最適合的學習路徑
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="card"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
