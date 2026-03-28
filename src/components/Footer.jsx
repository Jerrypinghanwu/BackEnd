export default function Footer() {
  const footerLinks = [
    {
      title: '課程相關',
      links: [
        { label: '課程大綱', id: 'curriculum' },
        { label: '學習方式', id: 'learning' },
        { label: '專題實作', id: 'projects' },
        { label: '講師介紹', id: 'instructors' },
      ],
    },
    {
      title: '支援服務',
      links: [
        { label: '常見問答', id: '#' },
        { label: '聯繫我們', id: '#' },
        { label: '隱私政策', id: '#' },
        { label: '服務條款', id: '#' },
      ],
    },
  ];

  const scrollToSection = (id) => {
    if (id === '#') return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#0f172a',
      color: '#94a3b8',
      padding: 'clamp(48px, 8vw, 80px) clamp(16px, 4vw, 24px) 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 48,
          marginBottom: 64,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
                兆宇培育
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 2, maxWidth: 320 }}>
              全方位後端開發實戰課程，從 Java 基礎到 Spring Boot、CI/CD 自動化與 PM 專案管理，打造業界即戰力。
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 style={{ color: '#fff', fontWeight: 600, fontSize: 16, marginBottom: 20 }}>
                {group.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      style={{
                        fontSize: 14, color: '#94a3b8', background: 'none',
                        border: 'none', padding: 0, cursor: 'pointer',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                      onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + bottom */}
        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: 32,
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: 16,
        }}>
          <p style={{ fontSize: 14, color: '#64748b' }}>
            © {new Date().getFullYear()} 兆宇培育. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            {['Facebook', 'Instagram', 'LinkedIn'].map((name) => (
              <a
                key={name}
                href="#"
                style={{ fontSize: 14, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = '#64748b'}
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
