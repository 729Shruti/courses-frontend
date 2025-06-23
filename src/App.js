import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
import CoursesPage from './pages/CoursesPage';
import CourseInstancesPage from './pages/CourseInstancesPage';
import './styles/layout.css';

function App() {
  return (
    <Router>
      <div className="main-layout">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/courses" />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/instances" element={<CourseInstancesPage />} />
          </Routes>
        </main>
        {/* Footer can go here later */}
      </div>
    </Router>
  );
}

export default App;
