import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="flex items-start gap-8 mb-8">
        <Avatar className="w-24 h-24 rounded-full border-2 border-gray-200">
          <AvatarImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sanjnah%20image.jpg-rG22jxDN9JPC78PR38rGlAM4yYZA3z.jpeg"
            alt="Sanjnah"
          />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="space-y-4">
          <div>
            <h1 className="text-4xl font-bold mb-2">Sanjnah</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Fascinated with the intersection of user behavior and technology, particularly one that pertains to
              privacy and security. My hobbies include reading, hiking and strength training. I try to bake, but more
              often than not end-up watching British Bake-Off instead of actually baking stuff.
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link href="https://www.linkedin.com/in/sanjnah-anand/" target="_blank">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link href="https://x.com/asanjnah" target="_blank">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full" asChild>
              <Link href="https://github.com/sanjbyte" target="_blank">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Writing Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Writings</h2>
        </div>
        <div className="grid gap-6">
          <Link
            href="https://theprivacyjournal.substack.com/"
            target="_blank"
            className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-white overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Privacy%20Journal%20logo-Oj7WpYugUvKgONQxLHf2dbouuuVu3U.png"
                  alt="The Privacy Journal"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">The Privacy Journal</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                I write about user privacy, security and products.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Building for Fun Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">Building for fun</h2>
          <Link
            href="/projects"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 inline-flex items-center"
          >
            View all <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <Link
            href="https://www.reddit.com/r/FillInTheFun/"
            target="_blank"
            className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-white overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/reddit%20logo-64e8oWKXrMoRKblOXVNxTkbXfrI5k7.png"
                  alt="Reddit Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">Fill in the Fun</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A word game built using Reddit API. Try it out!
              </p>
            </div>
          </Link>
          <Link
            href="https://chromewebstore.google.com/detail/datadaddy/ikniekgahfjpmijjfflkkcfpmcjbhamj"
            target="_blank"
            className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-white overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/datadaddyccpa-kqaSZZ6m6KKoxOOjmzaa6XNKlA9wlM.png"
                  alt="DataDaddy Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">DataDaddy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                A chrome extension to assist California Residents in automating DSAR requests. Built it for college
                project.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Research Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Research</h2>
          <Link
            href="/publications"
            className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 inline-flex items-center"
          >
            View all <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6">
          <Link
            href="/publications"
            className="flex gap-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-lg bg-white overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-18%20at%205.09.40%E2%80%AFPM-PTYoJCLPO9rptiLFJaopJVzepFU8aS.png"
                  alt="CyLab Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                CyLab Security & Privacy Institute
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Usable privacy and security research supervised by Dr. Lorrie Cranor at the CuPS Lab, Carnegie Mellon
                University
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>Copyright © 2025 Sanjnah</p>
      </footer>
    </div>
  )
}

