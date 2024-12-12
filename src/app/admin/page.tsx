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

export default function AdminDashboard() {
  const [courses, setCourses] = useState<Course[]>([])

  useEffect(() => {
    // Fetch courses from API
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data))
  }, [])

  const deleteCourse = async (id: string) => {
    await fetch(`/api/courses/${id}`, { method: 'DELETE' })
    setCourses(courses.filter(course => course._id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <Link href="/admin/add-course" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">
        Add New Course
      </Link>
      <ul className="space-y-4">
        {courses.map(course => (
          <li key={course._id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p>{course.description}</p>
            <p>Duration: {course.duration}</p>
            <p>Instructor: {course.instructor}</p>
            <div className="mt-2">
              <Link href={`/admin/edit-course/${course._id}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2">
                Edit
              </Link>
              <button onClick={() => deleteCourse(course._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

