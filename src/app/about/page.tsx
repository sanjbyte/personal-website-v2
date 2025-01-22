import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <main className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Sanjnah</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Sanjnah is a Data Security PM at Salesforce, passionate about the intersection of user behavior and
          technology, particularly in privacy and security.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          With a background in research and a keen interest in usable privacy, Sanjnah has contributed to several
          publications in the field of cybersecurity and privacy.
        </p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  )
}

