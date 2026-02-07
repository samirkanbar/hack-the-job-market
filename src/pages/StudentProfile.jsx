import { useNavigate, useParams } from 'react-router-dom';

function StudentProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const student = {
    name: 'Alex Chen',
    hustleStat: 42,
    tokens: 850,
    badges: [
      { name: 'Team Player', color: 'blue', description: 'Demonstrated collaboration at 5+ events' },
      { name: 'Problem Solver', color: 'green', description: 'Completed technical challenges' },
      { name: 'Curious Mind', color: 'purple', description: 'Attended diverse company events' }
    ],
    completedQuests: [
      { title: 'Amazon Tech Talk', company: 'Amazon', date: 'Feb 1, 2026', endorsements: 2 },
      { title: 'Microsoft Hackathon', company: 'Microsoft', date: 'Jan 20, 2026', endorsements: 3 },
      { title: 'Startup Networking', company: 'Various', date: 'Jan 15, 2026', endorsements: 1 }
    ],
    eventsAttended: 8,
    totalEndorsements: 6
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">applIRL</div>
          <button className="btn btn-secondary" onClick={() => navigate('/employer')}>
            Back to Dashboard
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="card">
          <h1 style={{ marginBottom: '20px' }}>{student.name}</h1>

          <div className="grid grid-2" style={{ marginBottom: '30px' }}>
            <div className="stat-card card">
              <div className="stat-value">{student.hustleStat}</div>
              <div className="stat-label">Hustle Stat</div>
            </div>
            <div className="stat-card card">
              <div className="stat-value">{student.eventsAttended}</div>
              <div className="stat-label">Events Attended</div>
            </div>
            <div className="stat-card card">
              <div className="stat-value">{student.tokens}</div>
              <div className="stat-label">Tokens Earned</div>
            </div>
            <div className="stat-card card">
              <div className="stat-value">{student.totalEndorsements}</div>
              <div className="stat-label">Endorsements</div>
            </div>
          </div>

          <h3 style={{ marginBottom: '15px' }}>Earned Badges</h3>
          <div className="grid grid-2" style={{ marginBottom: '30px' }}>
            {student.badges.map((badge, i) => (
              <div key={i} className="card">
                <span className={`badge badge-${badge.color}`} style={{ fontSize: '14px' }}>
                  {badge.name}
                </span>
                <p style={{ fontSize: '14px', color: '#718096', marginTop: '10px' }}>
                  {badge.description}
                </p>
              </div>
            ))}
          </div>

          <h3 style={{ marginBottom: '15px' }}>Quest History</h3>
          <div className="grid">
            {student.completedQuests.map((quest, i) => (
              <div key={i} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>
                    <h4>{quest.title}</h4>
                    <p style={{ color: '#718096', fontSize: '14px' }}>{quest.company} • {quest.date}</p>
                  </div>
                  <span className="badge badge-green">{quest.endorsements} endorsements</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
