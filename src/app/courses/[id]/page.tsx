'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

interface Course {
  _id: string;
  title: string;
  description: string;
  duration: string;
  instructor: string;
}

export default function CourseDetails() {
  const { id } = useParams()
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    // Fetch course details from API
    fetch(`/api/courses/${id}`)
      .then(res => res.json())
      .then(data => setCourse(data))
  }, [id])

  const enrollCourse = async () => {
    await fetch(`/api/enroll/${id}`, { method: 'POST' })
    alert('Enrolled successfully!')
  }

  if (!course) return <div>Loading...</div>

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{course.title}</h1>
      <p className="mb-2">{course.description}</p>
      <p className="mb-2">Duration: {course.duration}</p>
      <p className="mb-4">Instructor: {course.instructor}</p>
      <button onClick={enrollCourse} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Enroll
      </button>
    </div>
  )
}

