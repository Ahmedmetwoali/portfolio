import Navigation from '@/app/components/ui/Navigation'
import Hero from '@/app/components/sections/Hero'
import Impact from '@/app/components/sections/Impact'
import Projects from '@/app/components/sections/Projects'
import Timeline from '@/app/components/sections/Timeline'
import Contact from '@/app/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Impact />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <footer className="py-8 text-center text-gray-500 border-t border-zinc-900">
        <p>© 2025 Ahmed Metwoali. All rights reserved.</p>
      </footer>
    </>
  )
}