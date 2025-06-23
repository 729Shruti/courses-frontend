// src/pages/CoursesPage.jsx
import React, { useEffect, useState } from 'react';
import CourseCard from '../components/course/CourseCard';
import axios from 'axios';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/course/all')
      .then(response => {
        const data = response.data;

        const enriched = data.map(course => enrichCourse(course, data));
        setCourses(enriched);
      })
      .catch(error => {
        console.error('Error fetching courses:', error);
      });
  }, []);


  function enrichCourse(course, allCourses) {
    return {
      ...course,
      code: course.courseId,
      hasInstances: course.hasInstances ?? false, 
      prerequisites: course.prerequisites.map(pr => {
        const match = allCourses.find(c => c.id === pr.id);
        return match ? match : { id: pr.id };
      })
    };
  }

  return (
    <div className="course-page" style={{ padding: '20px' }}>
      <h2>Available Courses</h2>
      {courses.length > 0 ? (
        courses.map(course => (
          <CourseCard key={course.courseId} course={course} />
        ))
      ) : (
        <p>Loading courses...</p>
      )}
    </div>
  );
}
