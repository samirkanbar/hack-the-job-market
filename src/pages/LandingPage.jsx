import { useNavigate } from 'react-router-dom';

function LandingPage({ setUserType }) {
  const navigate = useNavigate();

  const handleLogin = (type) => {
    setUserType(type);
    navigate(`/${type}`);
  };

  return (
    <div>
      <nav className="nav">
        <div className="nav-content">
          <div className="logo">applIRL</div>
        </div>
      </nav>
      
      <div className="container" style={{ textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '80px', marginBottom: '20px' }}>🎯</div>
        <h1 style={{ 
          fontSize: '56px', 
          marginBottom: '20px', 
          color: 'white',
          fontWeight: 900,
          textShadow: '4px 4px 0 rgba(0,0,0,0.2)'
        }}>
          Connect Through Real Events
        </h1>
        <p style={{ 
          fontSize: '22px', 
          color: 'white', 
          marginBottom: '60px', 
          maxWidth: '700px', 
          margin: '0 auto 60px',
          fontWeight: 600,
          textShadow: '2px 2px 0 rgba(0,0,0,0.2)'
        }}>
          Cut through the noise of job boards. Complete quests, earn badges, unlock opportunities! 🚀
        </p>

        <div className="grid grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="card" style={{ 
            padding: '50px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            border: '4px solid #fbbf24'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎓</div>
            <h2 style={{ marginBottom: '20px', color: '#92400e', fontSize: '32px', fontWeight: 900 }}>
              For Students
            </h2>
            <p style={{ marginBottom: '30px', color: '#78350f', fontSize: '18px', fontWeight: 600 }}>
              Complete quests, earn badges, unlock opportunities by showing up and participating! 💪
            </p>
            <button className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }} onClick={() => handleLogin('student')}>
              🚀 Student Login
            </button>
          </div>

          <div className="card" style={{ 
            padding: '50px',
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            border: '4px solid #3b82f6'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🏢</div>
            <h2 style={{ marginBottom: '20px', color: '#1e3a8a', fontSize: '32px', fontWeight: 900 }}>
              For Employers
            </h2>
            <p style={{ marginBottom: '30px', color: '#1e40af', fontSize: '18px', fontWeight: 600 }}>
              Host events, define quests, meet students who demonstrate real initiative! 🤝
            </p>
            <button className="btn btn-primary" style={{ fontSize: '18px', padding: '16px 32px' }} onClick={() => handleLogin('employer')}>
              🎯 Employer Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
