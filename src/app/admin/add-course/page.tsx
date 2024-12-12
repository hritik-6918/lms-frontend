'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddCourse() {
  const router = useRouter()
  const [course, setCourse] = useState({
    title: '',
    description: '',
    duration: '',
    instructor: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCourse({ ...course, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course)
    })
    router.push('/admin')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Course</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={course.title}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea
            id="description"
            name="description"
            value={course.description}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1"
          ></textarea>
        </div>
        <div>
          <label htmlFor="duration" className="block mb-1">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={course.duration}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <div>
          <label htmlFor="instructor" className="block mb-1">Instructor</label>
          <input
            type="text"
            id="instructor"
            name="instructor"
            value={course.instructor}
            onChange={handleChange}
            required
            className="w-full border rounded px-2 py-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Course
        </button>
      </form>
    </div>
  )
}

