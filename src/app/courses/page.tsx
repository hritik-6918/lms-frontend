'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Course {
  _id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
}

export default function CourseCatalog() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // Fetch courses from API
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Course Catalog</h1>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course._id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Instructor: {course.instructor}</p>
            <Link href={`/courses/${course._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-2 inline-block">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

