import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import StudentDashboard from './pages/StudentDashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import QuestDetails from './pages/QuestDetails';
import StudentProfile from './pages/StudentProfile';

function App() {
  const [userType, setUserType] = useState(null); // 'student' or 'employer'

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage setUserType={setUserType} />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/employer" element={<EmployerDashboard />} />
        <Route path="/quest/:id" element={<QuestDetails />} />
        <Route path="/profile/:id" element={<StudentProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
