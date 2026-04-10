import { useEffect, useRef } from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const move = (e) => {
      if (el) { el.style.left = `${e.clientX}px`; el.style.top = `${e.clientY}px` }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={ref} className="cursor-glow hidden md:block" />
}

function Divider() {
  const { theme } = useTheme()
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px" style={{
        background: theme === 'dark'
          ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)'
          : 'linear-gradient(90deg, transparent, rgba(0,0,0,0.08), transparent)'
      }} />
    </div>
  )
}

function AppInner() {
  const { theme } = useTheme()
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', transition: 'background 0.3s' }}>
      <CursorGlow />
      <ThemeToggle />
      <Navigation />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Skills />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}
