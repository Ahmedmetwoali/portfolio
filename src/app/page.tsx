import Navigation from './components/ui/Navigation'
import Hero from './components/sections/Hero'
import Impact from './components/sections/Impact'
import Projects from './components/sections/Projects'
import Timeline from './components/sections/Timeline'
import Contact from './components/sections/Contact'

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