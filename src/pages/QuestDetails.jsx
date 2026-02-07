import { useNavigate, useParams } from 'react-router-dom';

function QuestDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const quest = {
    title: 'Google Cloud Hackathon',
    company: 'Google',
    date: 'Feb 15, 2026',
    time: '9:00 AM - 9:00 PM',
    location: 'Campus Center, Room 301',
    tokens: 200,
    description: 'Join us for a 24-hour hackathon where you\'ll build cloud-native applications using Google Cloud Platform. Work in teams, solve real problems, and showcase your skills.',
    requirements: [
      'Attend the full event duration',
      'Work collaboratively in a team',
      'Present your project to judges',
      'Get your QR code scanned by a Google recruiter'
    ],
    badges: ['Team Player', 'Problem Solver', 'Technical Skills'],
    spots: 50,
    registered: 45
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">applIRL</div>
          <button className="btn btn-secondary" onClick={() => navigate('/student')}>
            Back to Dashboard
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="card" style={{ borderLeft: '8px solid #10b981' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎯</div>
              <h1 style={{ marginBottom: '10px', fontSize: '36px', fontWeight: 900 }}>{quest.title}</h1>
              <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '24px', fontWeight: 700 }}>
                🏢 {quest.company}
              </h3>
            </div>
            <div style={{ 
              background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
              color: 'white',
              padding: '16px 24px',
              borderRadius: '20px',
              fontWeight: 900,
              fontSize: '24px',
              border: '3px solid #6d28d9',
              boxShadow: '0 6px 0 #5b21b6',
              textAlign: 'center'
            }}>
              💎 {quest.tokens}
              <div style={{ fontSize: '12px', marginTop: '4px' }}>TOKENS</div>
            </div>
          </div>

          <div style={{ 
            marginBottom: '30px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            padding: '20px',
            borderRadius: '16px',
            border: '3px solid #fbbf24'
          }}>
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 800 }}>📅 Event Details</h3>
            <div style={{ fontWeight: 600, fontSize: '16px' }}>
              <p style={{ marginBottom: '8px' }}>📅 <strong>Date:</strong> {quest.date}</p>
              <p style={{ marginBottom: '8px' }}>⏰ <strong>Time:</strong> {quest.time}</p>
              <p style={{ marginBottom: '8px' }}>📍 <strong>Location:</strong> {quest.location}</p>
              <p>👥 <strong>Spots Available:</strong> {quest.spots - quest.registered} / {quest.spots}</p>
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 800 }}>📖 Description</h3>
            <p style={{ lineHeight: '1.8', fontSize: '16px' }}>{quest.description}</p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 800 }}>✅ Quest Requirements</h3>
            <div style={{ 
              background: '#f3f4f6',
              padding: '20px',
              borderRadius: '16px',
              border: '2px solid #e5e7eb'
            }}>
              {quest.requirements.map((req, i) => (
                <div key={i} style={{ 
                  marginBottom: '12px',
                  padding: '12px',
                  background: 'white',
                  borderRadius: '12px',
                  fontWeight: 600,
                  border: '2px solid #d1d5db'
                }}>
                  ✓ {req}
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ marginBottom: '15px', fontSize: '20px', fontWeight: 800 }}>🏆 Badges You Can Earn</h3>
            <div>
              {quest.badges.map((badge, i) => (
                <span key={i} className="badge badge-purple" style={{ fontSize: '16px', padding: '10px 20px' }}>
                  🏅 {badge}
                </span>
              ))}
            </div>
          </div>

          <button className="btn btn-primary" style={{ 
            width: '100%', 
            padding: '20px', 
            fontSize: '20px',
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            border: 'none',
            boxShadow: '0 6px 0 #047857'
          }}>
            🚀 Register for Quest
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestDetails;
