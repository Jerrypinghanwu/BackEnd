import { motion } from 'framer-motion';

const curricula = [
  {
    number: 1,
    title: 'Java 程式語言',
    color: '#2563eb',
    items: [
      '語言基礎：歷史與應用、開發環境建置、資料型別與變數',
      '運算子與流程控制：條件語句 if / switch 應用',
      '迴圈控制：for、while 迴圈與 break / continue 實作',
      '陣列操作：一維與多維陣列、初始化與遍歷應用',
    ],
  },
  {
    number: 2,
    title: 'Linux 系統操作',
    color: '#f97316',
    items: [
      'Linux 基礎：起源背景、核心特點與伺服器 / 嵌入式應用領域',
      'VMware 虛擬化：虛擬機器建立、快照備份與還原管理',
      'Ubuntu 安裝配置：映像檔製作、系統安裝與使用者權限設定',
      'Shell 命令操作：基本命令 ls / cd / cp / mv、文件與目錄管理',
    ],
  },
  {
    number: 3,
    title: 'Jenkins CI/CD',
    color: '#8b5cf6',
    items: [
      'Jenkins 基礎：概念介紹、安裝配置與項目結構解析',
      '建置流程：基本建置設定與參數化工作配置',
      '進階應用：矩陣建置、常用插件安裝與使用',
      '自動化部署：持續交付概念、自動化部署流程實施',
    ],
  },
  {
    number: 4,
    title: 'UML 建模與 Git 版本控制',
    color: '#10b981',
    items: [
      'UML 建模工具：Eclipse UML Studio 安裝與基本操作',
      'UML 圖表設計：類圖、用例圖與序列圖繪製實作',
      'Git 基礎：版本控制概念、基本命令與工作流程',
      'Git 進階：分支管理、合併衝突解決、遠端倉庫與標籤管理',
    ],
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Blue gradient banner */}
      <div style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #3b82f6 100%)',
        padding: '80px 24px',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 1200, margin: '0 auto' }}
        >
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.75rem)',
            color: '#fff', textAlign: 'center', lineHeight: 1.4,
          }}>
            有系統地培養您掌握
            <br />
            <span style={{ color: '#fbbf24' }}>後端 & 雲端架構部署</span> 的核心領域！
          </h2>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="section-padding" style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            {curricula.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="card"
                style={{ padding: 36, display: 'flex', flexDirection: 'column' }}
              >
                {/* Number + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: item.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, fontWeight: 700, color: '#fff', flexShrink: 0,
                  }}>
                    {item.number}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1e293b' }}>
                    {item.title}
                  </h3>
                </div>

                {/* Items */}
                <ul style={{ flex: 1, listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {item.items.map((text) => (
                    <li key={text} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      fontSize: 15, color: '#334155', lineHeight: 1.7,
                    }}>
                      <span style={{
                        width: 7, height: 7, borderRadius: '50%',
                        background: item.color, flexShrink: 0, marginTop: 9,
                        opacity: 0.7,
                      }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
