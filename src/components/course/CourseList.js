import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/courseList.css';

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/course/all')
      .then(res => {
        setCourses(res.data);
      })
      .catch(err => {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses');
      });
  }, []);

  return (
    <div className="course-list">
      <h3>Available Courses</h3>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <ul>
          {courses.map(course => (
            <li key={course.id}>
              <strong>{course.title}</strong> ({course.code})<br />
              Prerequisites: {
                course.prerequisites?.length > 0
                  ? course.prerequisites.map(p => `${p.title} (${p.code})`).join(', ')
                  : 'None'
              }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
