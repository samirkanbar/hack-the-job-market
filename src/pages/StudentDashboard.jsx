import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('quests');
  const [chatOpen, setChatOpen] = useState(false);

  const studentData = {
    name: 'Alex Chen',
    hustleStat: 42,
    tokens: 850,
    level: 7,
    xpCurrent: 650,
    xpNeeded: 1000,
    university: 'Florida State University',
    major: 'Computer Science',
    graduationYear: 2026,
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
      title: 'AWS Cloud Hackathon',
      company: 'AWS',
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
            <div className="card" style={{ marginBottom: '30px', background: '#f5e6d3', border: '4px solid #8b4513' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                    <div style={{ 
                      width: '100px', 
                      height: '100px', 
                      background: '#d2691e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '50px',
                      border: '5px solid #8b4513',
                      boxShadow: '8px 8px 0 #8b4513'
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
                  <div className="stat-card" style={{ minWidth: '140px', background: '#daa520', borderColor: '#8b4513', boxShadow: '8px 8px 0 #8b4513' }}>
                    <div className="stat-value">💎 {studentData.tokens}</div>
                    <div className="stat-label">Tokens</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 900, color: '#8b4513', textShadow: '3px 3px 0 #cd853f' }}>
              � University Info
            </h2>
            <div className="card" style={{ 
              background: '#f5e6d3',
              border: '4px solid #8b4513',
              marginBottom: '30px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: '#782f40',
                  border: '4px solid #8b4513',
                  boxShadow: '6px 6px 0 #8b4513',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px'
                }}>
                  🏛️
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ 
                    fontSize: '20px', 
                    marginBottom: '10px',
                    color: '#8b4513',
                    fontFamily: "'Press Start 2P', monospace"
                  }}>
                    {studentData.university}
                  </h3>
                  <div style={{ 
                    fontSize: '14px',
                    fontFamily: "'Courier New', monospace",
                    color: '#8b4513',
                    lineHeight: '1.8'
                  }}>
                    <div><strong>Major:</strong> {studentData.major}</div>
                    <div><strong>Expected Graduation:</strong> {studentData.graduationYear}</div>
                  </div>
                </div>
                <div style={{
                  background: '#782f40',
                  color: '#cda434',
                  padding: '15px 20px',
                  border: '4px solid #8b4513',
                  boxShadow: '6px 6px 0 #8b4513',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontSize: '10px',
                    fontFamily: "'Press Start 2P', monospace",
                    marginBottom: '5px',
                    textShadow: '2px 2px 0 #8b4513'
                  }}>
                    GO NOLES!
                  </div>
                  <div style={{
                    fontSize: '24px'
                  }}>
                    🍢
                  </div>
                </div>
              </div>
            </div>

            <h2 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 900, color: '#8b4513', textShadow: '3px 3px 0 #cd853f' }}>
              🏆 Your Badges
            </h2>
            <div className="grid grid-2" style={{ marginBottom: '30px' }}>
              {studentData.badges.map((badge, i) => (
                <div key={i} className="card" style={{ 
                  background: '#f5e6d3',
                  border: '4px solid #8b4513',
                  textAlign: 'center',
                  padding: '30px'
                }}>
                  <div style={{ fontSize: '64px', marginBottom: '15px' }}>{badge.emoji}</div>
                  <h3 className={`badge badge-${badge.color}`} style={{ fontSize: '18px', padding: '10px 20px', marginBottom: '10px' }}>
                    {badge.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#8b4513', fontWeight: 600 }}>
                    Earned by attending {Math.floor(Math.random() * 5) + 3} events
                  </p>
                </div>
              ))}
            </div>

            <h2 style={{ marginBottom: '20px', fontSize: '28px', fontWeight: 900, color: '#8b4513', textShadow: '3px 3px 0 #cd853f' }}>
              📊 Your Stats
            </h2>
            <div className="grid grid-2">
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎯</div>
                <div className="stat-value" style={{ color: '#fff8dc' }}>{completedQuests.length + 5}</div>
                <div className="stat-label" style={{ color: '#fff8dc' }}>Total Quests Completed</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>⭐</div>
                <div className="stat-value" style={{ color: '#fff8dc' }}>{completedQuests.reduce((sum, q) => sum + q.endorsements, 0) + 8}</div>
                <div className="stat-label" style={{ color: '#fff8dc' }}>Employer Endorsements</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>📅</div>
                <div className="stat-value" style={{ color: '#fff8dc' }}>12</div>
                <div className="stat-label" style={{ color: '#fff8dc' }}>Events Attended</div>
              </div>
              <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🏢</div>
                <div className="stat-value" style={{ color: '#fff8dc' }}>8</div>
                <div className="stat-label" style={{ color: '#fff8dc' }}>Companies Met</div>
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
                    background: '#daa520',
                    color: '#fff8dc',
                    padding: '8px 16px',
                    fontWeight: 900,
                    fontSize: '16px',
                    border: '4px solid #8b4513',
                    whiteSpace: 'nowrap',
                    boxShadow: '4px 4px 0 #8b4513',
                    textShadow: '2px 2px 0 #8b4513',
                    fontFamily: "'Press Start 2P', monospace"
                  }}>
                    💎 {quest.tokens}
                  </div>
                </div>
                <p style={{ color: '#d2691e', marginBottom: '10px', fontWeight: 700, fontSize: '16px' }}>🏢 {quest.company}</p>
                <p style={{ fontSize: '15px', marginBottom: '15px', lineHeight: '1.5' }}>{quest.description}</p>
                <div style={{ 
                  background: '#f5e6d3', 
                  padding: '12px', 
                  marginBottom: '15px',
                  border: '3px solid #8b4513',
                  boxShadow: '4px 4px 0 #cd853f'
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
                borderLeft: '8px solid #cd853f',
                background: '#f5e6d3'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ 
                    fontSize: '40px',
                    background: '#fff8dc',
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '4px solid #8b4513',
                    boxShadow: '4px 4px 0 #8b4513'
                  }}>
                    ✅
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '4px' }}>{quest.title}</h3>
                    <p style={{ color: '#8b4513', fontWeight: 700 }}>🏢 {quest.company}</p>
                  </div>
                </div>
                <div style={{ 
                  background: '#fff8dc', 
                  padding: '12px', 
                  border: '3px solid #8b4513',
                  boxShadow: '4px 4px 0 #cd853f',
                  marginBottom: '10px'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px' }}>
                    📅 {quest.date}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#8b4513' }}>
                    ⭐ {quest.endorsements} employer endorsements
                  </div>
                </div>
                <div style={{ 
                  background: '#daa520',
                  color: '#fff8dc',
                  padding: '12px',
                  fontWeight: 900,
                  fontSize: '18px',
                  textAlign: 'center',
                  border: '4px solid #8b4513',
                  boxShadow: '6px 6px 0 #8b4513',
                  textShadow: '2px 2px 0 #8b4513',
                  fontFamily: "'Press Start 2P', monospace"
                }}>
                  💎 +{quest.tokens} Tokens Earned!
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AI Career Coach Floating Button */}
      {!chatOpen && (
        <div 
          onClick={() => setChatOpen(true)}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '70px',
            height: '70px',
            background: '#d2691e',
            border: '4px solid #8b4513',
            boxShadow: '6px 6px 0 #8b4513',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '36px',
            transition: 'all 0.1s',
            zIndex: 1000
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translate(-3px, -3px)';
            e.currentTarget.style.boxShadow = '9px 9px 0 #8b4513';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translate(0, 0)';
            e.currentTarget.style.boxShadow = '6px 6px 0 #8b4513';
          }}
        >
          🤖
        </div>
      )}

      {/* AI Career Coach Chat Window */}
      {chatOpen && (
        <div style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '400px',
          height: '550px',
          background: '#fff8dc',
          border: '4px solid #8b4513',
          boxShadow: '8px 8px 0 #8b4513',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column'
        }}>
          {/* Chat Header */}
          <div style={{
            background: '#d2691e',
            padding: '15px',
            borderBottom: '4px solid #8b4513',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '24px' }}>🤖</span>
              <div>
                <div style={{ 
                  color: '#fff8dc', 
                  fontWeight: 900, 
                  fontSize: '12px',
                  fontFamily: "'Press Start 2P', monospace",
                  textShadow: '2px 2px 0 #8b4513'
                }}>
                  CAREER COACH
                </div>
                <div style={{ 
                  color: '#fff8dc', 
                  fontSize: '8px',
                  fontFamily: "'Press Start 2P', monospace"
                }}>
                  AI POWERED
                </div>
              </div>
            </div>
            <button 
              onClick={() => setChatOpen(false)}
              style={{
                background: '#8b4513',
                color: '#fff8dc',
                border: '3px solid #fff8dc',
                padding: '5px 10px',
                cursor: 'pointer',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                boxShadow: '3px 3px 0 #a0522d'
              }}
            >
              X
            </button>
          </div>

          {/* Chat Messages */}
          <div style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            <div style={{
              background: '#f5e6d3',
              padding: '15px',
              border: '3px solid #8b4513',
              boxShadow: '4px 4px 0 #cd853f'
            }}>
              <div style={{ 
                fontSize: '10px', 
                fontFamily: "'Press Start 2P', monospace",
                lineHeight: '1.8',
                color: '#8b4513'
              }}>
                👋 Hey {studentData.name}! I'm your AI Career Coach.
              </div>
            </div>

            <div style={{
              background: '#f5e6d3',
              padding: '15px',
              border: '3px solid #8b4513',
              boxShadow: '4px 4px 0 #cd853f'
            }}>
              <div style={{ 
                fontSize: '10px', 
                fontFamily: "'Press Start 2P', monospace",
                lineHeight: '1.8',
                color: '#8b4513',
                marginBottom: '15px'
              }}>
                What can I help you with today?
              </div>
              
              {/* Option Buttons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button style={{
                  background: '#d2691e',
                  color: '#fff8dc',
                  border: '3px solid #8b4513',
                  padding: '12px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '8px',
                  boxShadow: '4px 4px 0 #8b4513',
                  textAlign: 'left',
                  transition: 'all 0.1s',
                  lineHeight: '1.6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0 #8b4513';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0 #8b4513';
                }}
                >
                  📝 Update My Resume
                </button>

                {/* <button style={{
                  background: '#cd853f',
                  color: '#fff8dc',
                  border: '3px solid #8b4513',
                  padding: '12px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '8px',
                  boxShadow: '4px 4px 0 #8b4513',
                  textAlign: 'left',
                  transition: 'all 0.1s',
                  lineHeight: '1.6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0 #8b4513';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0 #8b4513';
                }}
                >
                  📊 Check Progress to Dream Job
                </button> */}

                <button style={{
                  background: '#daa520',
                  color: '#fff8dc',
                  border: '3px solid #8b4513',
                  padding: '12px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '8px',
                  boxShadow: '4px 4px 0 #8b4513',
                  textAlign: 'left',
                  transition: 'all 0.1s',
                  lineHeight: '1.6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0 #8b4513';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0 #8b4513';
                }}
                >
                  🎯 Find Quests for My Goals
                </button>

                <button style={{
                  background: '#a0522d',
                  color: '#fff8dc',
                  border: '3px solid #8b4513',
                  padding: '12px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '8px',
                  boxShadow: '4px 4px 0 #8b4513',
                  textAlign: 'left',
                  transition: 'all 0.1s',
                  lineHeight: '1.6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0 #8b4513';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0 #8b4513';
                }}
                >
                  🏢 Get Company Insights
                </button>

                <button style={{
                  background: '#ff8c42',
                  color: '#fff8dc',
                  border: '3px solid #8b4513',
                  padding: '12px',
                  cursor: 'pointer',
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '8px',
                  boxShadow: '4px 4px 0 #8b4513',
                  textAlign: 'left',
                  transition: 'all 0.1s',
                  lineHeight: '1.6'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-2px, -2px)';
                  e.currentTarget.style.boxShadow = '6px 6px 0 #8b4513';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(0, 0)';
                  e.currentTarget.style.boxShadow = '4px 4px 0 #8b4513';
                }}
                >
                  💡 Career Path Advice
                </button>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div style={{
            padding: '15px',
            borderTop: '4px solid #8b4513',
            background: '#f5e6d3'
          }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input 
                type="text"
                placeholder="Type your goals..."
                style={{
                  flex: 1,
                  padding: '10px',
                  border: '3px solid #8b4513',
                  background: '#fff8dc',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '12px',
                  color: '#8b4513'
                }}
              />
              <button style={{
                background: '#d2691e',
                color: '#fff8dc',
                border: '3px solid #8b4513',
                padding: '10px 15px',
                cursor: 'pointer',
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '10px',
                boxShadow: '4px 4px 0 #8b4513'
              }}>
                SEND
              </button>
            </div>
            <div style={{
              marginTop: '10px',
              fontSize: '8px',
              fontFamily: "'Press Start 2P', monospace",
              color: '#8b4513',
              lineHeight: '1.6'
            }}>
              💡 Try: "I want to work at Google as a SWE"
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
