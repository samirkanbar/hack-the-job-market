import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployerDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('events');

  const events = [
    {
      id: 1,
      title: 'Cloud Hackathon',
      date: 'Feb 15, 2026',
      registrations: 45,
      status: 'Upcoming'
    },
    {
      id: 2,
      title: 'Engineering Mixer',
      date: 'Feb 20, 2026',
      registrations: 32,
      status: 'Upcoming'
    }
  ];

  const matchedStudents = [
    {
      id: 1,
      name: 'Alex Chen',
      hustleStat: 42,
      badges: ['Team Player', 'Problem Solver'],
      eventsAttended: 8,
      raidQuality: 'High',
      endorsements: 3
    },
    {
      id: 2,
      name: 'Jordan Smith',
      hustleStat: 38,
      badges: ['Curious Mind', 'Leader'],
      eventsAttended: 6,
      raidQuality: 'High',
      endorsements: 2
    },
    {
      id: 3,
      name: 'Sam Patel',
      hustleStat: 35,
      badges: ['Problem Solver', 'Communicator'],
      eventsAttended: 7,
      raidQuality: 'Medium',
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
        <div className="card" style={{ marginBottom: '30px' }}>
          <h1 style={{ marginBottom: '10px' }}>AWS Recruiting</h1>
          <p style={{ color: '#718096' }}>Find motivated students through real interactions</p>
        </div>

        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <button 
            className={`btn ${activeTab === 'events' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('events')}
          >
            My Events
          </button>
          <button 
            className={`btn ${activeTab === 'students' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setActiveTab('students')}
          >
            Matched Students
          </button>
          <button className="btn btn-primary" style={{ marginLeft: 'auto' }}>
            Create New Event
          </button>
        </div>

        {activeTab === 'events' && (
          <div className="grid grid-2">
            {events.map(event => (
              <div key={event.id} className="card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <h3>{event.title}</h3>
                  <span className="badge badge-blue">{event.status}</span>
                </div>
                <div style={{ fontSize: '14px', color: '#718096', marginBottom: '15px' }}>
                  <div>{event.date}</div>
                  <div>{event.registrations} students registered</div>
                </div>
                <button className="btn btn-primary">Manage Event</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'students' && (
          <div>
            <div className="card" style={{ marginBottom: '20px', padding: '15px' }}>
              <p style={{ fontSize: '14px', color: '#718096' }}>
                Students ranked by engagement quality and quest completion at your events
              </p>
            </div>
            
            <div className="grid">
              {matchedStudents.map(student => (
                <div key={student.id} className="card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ marginBottom: '10px' }}>{student.name}</h3>
                      <div style={{ marginBottom: '10px' }}>
                        {student.badges.map((badge, i) => (
                          <span key={i} className="badge badge-blue">{badge}</span>
                        ))}
                      </div>
                      <div style={{ fontSize: '14px', color: '#718096' }}>
                        <div>Hustle Stat: {student.hustleStat}</div>
                        <div>Events Attended: {student.eventsAttended}</div>
                        <div>Your Endorsements: {student.endorsements}</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span className={`badge ${student.raidQuality === 'High' ? 'badge-green' : 'badge-blue'}`}>
                        {student.raidQuality} Quality
                      </span>
                      <button 
                        className="btn btn-primary" 
                        style={{ marginTop: '10px' }}
                        onClick={() => navigate(`/profile/${student.id}`)}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployerDashboard;
