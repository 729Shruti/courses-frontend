// src/components/course/CourseCard.jsx
import React from 'react';
import '../../styles/courseCard.css';

export default function CourseCard({ course }) {
  const { title, code, prerequisites } = course;

  return (
    <div className="course-card">
      <h3>{title} ({code})</h3>

      <p><strong>Prerequisites:</strong></p>
      {prerequisites && prerequisites.length > 0 ? (
        <ul>
          {prerequisites.map((pr) => (
            <li key={pr.id}>
              {pr.title ? `${pr.title} (${pr.code})` : `Course ID: ${pr.id}`}
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontStyle: 'italic', color: '#9ca3af' }}>None</p>
      )}

      <button
        className="delete-btn"
        disabled={course.hasInstances}
      >
        {course.hasInstances ? "Cannot Delete" : "Delete"}
      </button>
    </div>
  );
}
