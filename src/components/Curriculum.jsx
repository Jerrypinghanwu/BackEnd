import { useState } from 'react';
import { useInViewAnimation } from '../hooks/useInViewAnimation';

const tracks = {
  standard: {
    label: 'Standard',
    title: 'Java 後端基礎實務班',
    subtitle: 'Junior Developer Track',
    color: '#38bdf8', /* Brighter cyan for visibility on blue background */
    bg: '#eff6ff',
    items: [
      {
        number: 1,
        title: 'Java 程式語言基礎',
        color: '#2563eb',
        details: [
          'Java 開發環境配置 (JDK, Eclipse)',
          '資料型別、變數與運算子',
          '流程控制：條件語句與迴圈控制',
          '陣列與基本演算法練習',
        ],
      },
      {
        number: 2,
        title: '物件導向程式設計 (OOP)',
        color: '#2563eb',
        details: [
          '類別與物件 (Class & Object) 核心概念',
          '封裝、繼承、多型實作',
          '常用內建類別與集合架構 (List, Map, Set)',
          '異常處理機制',
        ],
      },
      {
        number: 3,
        title: 'Linux 系統基礎',
        color: '#2563eb',
        details: [
          'Linux 歷史與 Ubuntu 環境安裝',
          '基本指令操作 (File & Directory Management)',
          '權限管理與使用者設定',
        ],
      },
      {
        number: 4,
        title: '基礎研發技能',
        color: '#2563eb',
        details: [
          'UML 系統建模基礎 (類圖、序列圖)',
          'Git 版本控制實務 (init, commit, push, merge)',
          'GitHub 協作流程',
        ],
      },
    ],
  },
  advanced: {
    label: 'Advanced',
    title: '高階後端架構進階班',
    subtitle: 'Advanced Architect Track',
    color: '#fb923c', /* Brighter orange for visibility */
    bg: '#fff7ed',
    items: [
      {
        number: 1,
        title: 'Spring Boot 核心技術',
        color: '#f97316',
        details: [
          'Spring Boot 自動配置與依賴注入 (DI)',
          'Thymeleaf 範本引擎與動態網頁設計',
          '監聽器與攔截器應用',
          'RESTful API 完整設計實作',
        ],
      },
      {
        number: 2,
        title: '企業級場景與資料庫實務',
        color: '#f97316',
        details: [
          'MySQL 資料庫設計與優化',
          'Spring Data JPA 數據存取技術',
          'Flyway/Liquibase 資料庫遷移管理',
          'Spring Security 與 JWT 認證授權機制',
        ],
      },
      {
        number: 3,
        title: 'Linux 進階與自動化維運',
        color: '#f97316',
        details: [
          'VIM 進階編輯技巧',
          'Shell Script 自動化腳本編寫',
          'Linux 系統效能監控與管理',
        ],
      },
      {
        number: 4,
        title: 'CI/CD 持續整合與部署',
        color: '#f97316',
        details: [
          'Jenkins 自動化建置流程配置',
          '參數化建置與矩陣測試',
          '自動化部署策略與持續交付 (CD) 流程',
        ],
      },
    ],
  },
};

export default function Curriculum() {
  const [activeTrack, setActiveTrack] = useState('standard');
  const { ref: titleRef, isInView: titleInView } = useInViewAnimation();
  const { ref: gridRef, isInView: gridInView } = useInViewAnimation({ margin: '-40px' });

  const currentTrack = tracks[activeTrack];

  return (
    <section id="curriculum" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)',
        padding: 'clamp(40px, 7vw, 64px) clamp(16px, 4vw, 24px)',
        position: 'relative'
      }}>
        <div
          ref={titleRef}
          className={`fade-up-sm ${titleInView ? 'in-view' : ''}`}
          style={{ maxWidth: 1200, margin: '0 auto', textAlign: 'center' }}
        >
          <h2 className="section-heading" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            color: '#fff', marginBottom: 16, lineHeight: 1.1,
            fontWeight: 900, letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}>
            <span style={{ 
              color: currentTrack.color,
              textShadow: `0 0 30px ${currentTrack.color}66`
            }}>{currentTrack.label}</span> 專業課程架構
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: '#94a3b8', fontWeight: 500 }}>
            {currentTrack.title} — {currentTrack.subtitle}
          </p>
        </div>

        {/* Track Switcher */}
        <div style={{
          display: 'flex', justifyContent: 'center', marginTop: 32, gap: 8,
          padding: 6, background: 'rgba(255, 255, 255, 0.08)', borderRadius: 16,
          width: 'fit-content', margin: '32px auto 0', border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)', boxBlur: '10px'
        }}>
          {Object.keys(tracks).map((key) => {
            const isActive = activeTrack === key;
            return (
              <button
                key={key}
                onClick={() => setActiveTrack(key)}
                className="track-bubble-btn"
                style={{
                  padding: '12px 32px', borderRadius: 12, fontSize: 16, fontWeight: 700,
                  cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: isActive ? '#fff' : 'transparent',
                  color: isActive ? tracks[key].color : 'rgba(255, 255, 255, 0.6)',
                  border: 'none',
                  boxShadow: isActive ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : 'none',
                  display: 'flex', alignItems: 'center', gap: 8,
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                }}
              >
                {isActive && (
                  <span style={{ 
                    width: 8, height: 8, borderRadius: '50%', 
                    background: tracks[key].color, display: 'inline-block' 
                  }} />
                )}
                {tracks[key].label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Cards Section */}
      <div style={{ padding: '48px 20px 64px', background: '#f8fafc' }}>
        <div ref={gridRef} style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentTrack.items.map((item, idx) => (
              <div
                key={`${activeTrack}-${item.number}`}
                className={`card fade-up ${gridInView ? 'in-view' : ''} delay-${idx + 1}`}
                style={{ padding: 40, border: activeTrack === 'advanced' ? '1px solid #fed7aa' : '1px solid #e2e8f0' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: currentTrack.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, fontWeight: 800, color: '#fff', flexShrink: 0,
                    boxShadow: `0 8px 16px -4px ${currentTrack.color}33`
                  }}>
                    {item.number}
                  </div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1e293b' }}>
                    {item.title}
                  </h3>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {item.details.map((text) => (
                    <li key={text} style={{
                      display: 'flex', alignItems: 'flex-start', gap: 14,
                      fontSize: 16, color: '#475569', lineHeight: 1.6,
                    }}>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: currentTrack.color, flexShrink: 0, marginTop: 10,
                        opacity: 0.6
                      }} />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
