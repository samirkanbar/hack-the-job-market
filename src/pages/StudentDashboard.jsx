import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('quests');

  const studentData = {
    name: 'Alex Chen',
    hustleStat: 42,
    tokens: 850,
    level: 7,
    xpCurrent: 650,
    xpNeeded: 1000,
    badges: [
      { name: 'Team Player', color: 'blue', emoji: '🤝' },
      { name: 'Problem Solver', color: 'green', emoji: '🧩' },
      { name: 'Curious Mind', color: 'purple', emoji: '🔍' },
      { name: 'Early Bird', color: 'yellow', emoji: '🌅' },
      { name: 'Networker', color: 'orange', emoji: '🌐' }
    ]
  };

  const quests = [
    {
      id: 1,
      title: 'Google Cloud Hackathon',
      company: 'Google',
      date: 'Feb 15, 2026',
      location: 'Campus Center',
      tokens: 200,
      type: 'Hackathon',
      description: 'Build a cloud-native app in 24 hours'
    },
    {
      id: 2,
      title: 'Meta Networking Mixer',
      company: 'Meta',
      date: 'Feb 20, 2026',
      location: 'Tech Hub',
      tokens: 100,
      type: 'Networking',
      description: 'Meet engineers and recruiters from Meta'
    },
    {
      id: 3,
      title: 'Startup Career Fair',
      company: 'Multiple Startups',
      date: 'Feb 25, 2026',
      location: 'Student Union',
      tokens: 150,
      type: 'Career Fair',
      description: 'Explore opportunities at 20+ startups'
    }
  ];

  const completedQuests = [
    {
      id: 4,
      title: 'Amazon Tech Talk',
      company: 'Amazon',
      date: 'Feb 1, 2026',
      tokens: 100,
      endorsements: 2
    }
  ];

  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">applIRL</div>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Logout
          </button>
        </div>
      </nav>

      <div className="container">

        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <button 
            className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('profile')}
          >
            👤 Profile
          </button>
          <button 
            className={`btn ${activeTab === 'quests' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('quests')}
          >
            🎯 Available Quests
          </button>
          <button 
            className={`btn ${activeTab === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('completed')}
          >
            ✅ Completed
          </button>
        </div>

        {activeTab === 'profile' && (
          <div>
            <div className="card" style={{ marginBottom: '30px', background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)', border: '4px solid #fbbf24' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ 
                      width: '100px', 
                      height: '100px', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '50px',
                      border: '5px solid white',
                      boxShadow: '0 6px 16px rgba(0,0,0,0.3)'
                    }}>
                      👨‍💻
                    </div>
                    <div>
                      <h1 style={{ marginBottom: '8px', fontSize: '36px' }}>{studentData.name}</h1>
                      <div className="level-badge">
                        <span className="fire-icon">🔥</span>
                        Level {studentData.level}
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontWeight: 700, fontSize: '16px' }}>XP Progress to Level {studentData.level + 1}</span>
                      <span style={{ fontWeight: 700, fontSize: '16px' }}>{studentData.xpCurrent} / {studentData.xpNeeded}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${(studentData.xpCurrent / studentData.xpNeeded) * 100}%` }}>
                        {Math.round((studentData.xpCurrent / studentData.xpNeeded) * 100)}%
                      </div>
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '15px' }}>
                  <div className="stat-card" style={{ minWidth: '140px' }}>
                    <div className="stat-value">{studentData.hustleStat}</div>
                    <div className="stat-label">🔥 Hustle</div>
                  </div>
                  <div className="stat-card" style={{ minWidth: '140px', background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', borderColor: '#6d28d9', boxShadow: '0 6px 0 #5b21b6' }}>
                    <div className="stat-value">💎 {studentData.tokens}</div>
                    <div className="stat-label">Tokens</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 900, color: 'white', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
              🏆 Your Badges
            </h2>
            <div className="grid grid-2" style={{ marginBottom: '30px' }}>
              {studentData.badges.map((badge, i) => (
                <div key={i} className="card" style={{ 
                  background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  border: '3px solid #fbbf24',
                  textAlign: 'center',
                  padding: '30px'
                }}>
                  <div style={{ fontSize: '64px', marginBottom: '15px' }}>{badge.emoji}</div>
                  <h3 className={`badge badge-${badge.color}`} style={{ fontSize: '18px', padding: '10px 20px', marginBottom: '10px' }}>
                    {badge.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#78350f', fontWeight: 600 }}>
                    Earned by attending {Math.floor(Math.random() * 5) + 3} events
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 900, color: 'white', textShadow: '2px 2px 0 rgba(0,0,0,0.2)' }}>
              📊 Your Stats
            </h2>
            <div className="grid grid-2">
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎯</div>
                <div className="stat-value" style={{ color: '#667eea' }}>{completedQuests.length + 5}</div>
                <div className="stat-label" style={{ color: '#2d3748' }}>Total Quests Completed</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>⭐</div>
                <div className="stat-value" style={{ color: '#f59e0b' }}>{completedQuests.reduce((sum, q) => sum + q.endorsements, 0) + 8}</div>
                <div className="stat-label" style={{ color: '#2d3748' }}>Employer Endorsements</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>📅</div>
                <div className="stat-value" style={{ color: '#10b981' }}>12</div>
                <div className="stat-label" style={{ color: '#2d3748' }}>Events Attended</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🏢</div>
                <div className="stat-value" style={{ color: '#8b5cf6' }}>8</div>
                <div className="stat-label" style={{ color: '#2d3748' }}>Companies Met</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'quests' && (
          <div className="grid grid-2">
            {quests.map(quest => (
              <div key={quest.id} className="card" style={{ borderLeft: '6px solid #10b981' }}>
                <div className="quest-type">⚡ {quest.type}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'start' }}>
                  <h3 style={{ fontSize: '22px', fontWeight: 800 }}>{quest.title}</h3>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '16px',
                    fontWeight: 900,
                    fontSize: '16px',
                    border: '2px solid #6d28d9',
                    whiteSpace: 'nowrap'
                  }}>
                    💎 {quest.tokens}
                  </div>
                </div>
                <p style={{ color: '#667eea', marginBottom: '10px', fontWeight: 700, fontSize: '16px' }}>🏢 {quest.company}</p>
                <p style={{ fontSize: '15px', marginBottom: '15px', lineHeight: '1.5' }}>{quest.description}</p>
                <div style={{ 
                  background: '#f3f4f6', 
                  padding: '12px', 
                  borderRadius: '12px', 
                  marginBottom: '15px',
                  border: '2px solid #e5e7eb'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 600 }}>
                    <div style={{ marginBottom: '4px' }}>📅 {quest.date}</div>
                    <div>📍 {quest.location}</div>
                  </div>
                </div>
                <button 
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '16px' }}
                  onClick={() => navigate(`/quest/${quest.id}`)}
                >
                  🚀 Start Quest
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'completed' && (
          <div className="grid grid-2">
            {completedQuests.map(quest => (
              <div key={quest.id} className="card" style={{ 
                borderLeft: '6px solid #10b981',
                background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ 
                    fontSize: '40px',
                    background: 'white',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '3px solid #10b981'
                  }}>
                    ✅
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>{quest.title}</h3>
                    <p style={{ color: '#065f46', fontWeight: 700 }}>🏢 {quest.company}</p>
                  </div>
                </div>
                <div style={{ 
                  background: 'white', 
                  padding: '12px', 
                  borderRadius: '12px',
                  border: '2px solid #10b981',
                  marginBottom: '10px'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                    📅 {quest.date}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#059669' }}>
                    ⭐ {quest.endorsements} employer endorsements
                  </div>
                </div>
                <div style={{ 
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '12px',
                  fontWeight: 900,
                  fontSize: '18px',
                  textAlign: 'center',
                  border: '3px solid #6d28d9'
                }}>
                  💎 +{quest.tokens} Tokens Earned!
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default StudentDashboard;
