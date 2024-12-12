import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Learning Management System</h1>
      <div className="flex space-x-4">
        <Link href="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Admin Dashboard
        </Link>
        <Link href="/courses" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Course Catalog
        </Link>
      </div>
    </main>
  )
}

