import { Link, useLocation } from 'react-router-dom';
import '../../styles/nav.css';

export default function HeaderNav() {
  const location = useLocation();

  return (
    <div className="header-nav">
      <Link to="/courses" className="nav-link">
        <button className={`nav-btn ${location.pathname === '/courses' ? 'active' : ''}`}>
          Courses
        </button>
      </Link>
      <Link to="/instances" className="nav-link">
        <button className={`nav-btn ${location.pathname === '/instances' ? 'active' : ''}`}>
          Course Instances
        </button>
      </Link>
    </div>
  );
}
