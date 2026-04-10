import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiEnvelope } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const ROLES = [
  'Full Stack Developer',
  'Backend Engineer',
  'API Builder',
  'Problem Solver',
]

function TypewriterText({ texts }) {
  const [displayed, setDisplayed] = useState('')
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState('typing')

  useEffect(() => {
    const current = texts[index]
    let timeout
    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setPhase('pausing'), 1800)
      }
    } else if (phase === 'pausing') {
      timeout = setTimeout(() => setPhase('erasing'), 200)
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setIndex((i) => (i + 1) % texts.length)
        setPhase('typing')
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, phase, index, texts])

  return <span className="typewriter-cursor" style={{ color: '#4FC1FF' }}>{displayed}</span>
}

// VS Code code snippet decoration
function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 2 }}
      transition={{ delay: 1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.02 }}
      className="code-card w-full max-w-xs select-none"
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
    >
      <div className="code-card-header">
        <div className="code-card-dot" style={{ background: '#FF5F57' }} />
        <div className="code-card-dot" style={{ background: '#FEBC2E' }} />
        <div className="code-card-dot" style={{ background: '#28C840' }} />
        <div className="code-card-tab">josue_orozco.py</div>
      </div>
      <div className="code-card-body">
        <div className="code-line-nums">
          {[1,2,3,4,5,6,7,8,9,10,11].map(n => <div key={n}>{n}</div>)}
        </div>
        <div>
          <div><span className="tok-keyword">class </span><span className="tok-class">Engineer</span><span className="tok-punct">:</span></div>
          <div><span className="tok-comment">    # Barranquilla, Colombia</span></div>
          <div><span className="tok-prop">    name </span><span className="tok-punct">= </span><span className="tok-string">"Josué Orozco"</span></div>
          <div><span className="tok-prop">    role </span><span className="tok-punct">= </span><span className="tok-string">"Software Analyst"</span></div>
          <div></div>
          <div><span className="tok-keyword">    def </span><span className="tok-fn">stack</span><span className="tok-punct">(</span><span className="tok-self">self</span><span className="tok-punct">):</span></div>
          <div><span className="tok-keyword">        return </span><span className="tok-punct">[</span></div>
          <div><span className="tok-string">            "Python"</span><span className="tok-punct">, </span><span className="tok-string">"Kotlin"</span><span className="tok-punct">,</span></div>
          <div><span className="tok-string">            "FastAPI"</span><span className="tok-punct">, </span><span className="tok-string">"AWS"</span></div>
          <div><span className="tok-punct">        ]</span></div>
          <div></div>
        </div>
      </div>
    </motion.div>
  )
}

// Background orbs — dark red tones
function Orbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-15%] right-[-5%] w-[550px] h-[550px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(209,105,105,0.18) 0%, transparent 70%)', filter: 'blur(90px)', animation: 'float 9s ease-in-out infinite' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(206,145,120,0.12) 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 11s ease-in-out infinite reverse' }} />
    </div>
  )
}

export default function Hero() {
  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
  const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-grid overflow-hidden px-6">
      <Orbs />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-24 pb-32 md:py-32">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          {/* Left: text */}
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Badge */}
            <motion.div variants={item} className="flex mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono"
                style={{ background: 'rgba(209,105,105,0.1)', border: '1px solid rgba(209,105,105,0.25)', color: '#D16969' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="hidden sm:inline">Disponible · contact@josueorozcor.dev</span>
                <span className="sm:hidden">Disponible para proyectos</span>
              </span>
            </motion.div>

            {/* Terminal prompt + role */}
            <motion.div variants={item} className="font-mono text-sm mb-3 flex items-center gap-2" style={{ color: '#6A9955' }}>
              <span style={{ color: '#4EC9B0' }}>~/portfolio</span>
              <span style={{ color: '#808080' }}>on</span>
              <span style={{ color: '#CE9178' }}>main</span>
              <span style={{ color: '#808080' }}>❯</span>
            </motion.div>

            <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-4">
              <span style={{ color: '#D4D4D4' }}>Josué</span>
              <br />
              <span className="gradient-text">Orozco</span>
            </motion.h1>

            <motion.div variants={item} className="text-lg md:text-xl font-mono mb-6 flex items-center gap-2" style={{ color: '#4a4a4a' }}>
              <span style={{ color: '#569CD6' }}>const</span>
              <span style={{ color: '#9CDCFE' }}> role</span>
              <span style={{ color: '#808080' }}> = </span>
              <span style={{ color: '#CE9178' }}>"</span>
              <TypewriterText texts={ROLES} />
              <span style={{ color: '#CE9178' }}>"</span>
            </motion.div>

            <motion.p variants={item} className="text-sm md:text-base max-w-lg mb-10 leading-relaxed" style={{ color: '#6A6A6A' }}>
              Construyo soluciones móviles y de plataforma escalables.
              Especialista en Python, Kotlin, AWS y SQL.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 mb-10">
              <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                onClick={scrollToAbout}
                className="px-6 py-2.5 rounded-lg font-semibold text-white text-sm flex items-center gap-2"
                style={{ background: '#D16969', boxShadow: '0 4px 20px rgba(209,105,105,0.3)' }}>
                Ver mi trabajo
              </motion.button>
              <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="mailto:contact@josueorozcor.dev"
                className="px-6 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-2"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#858585' }}>
                <HiEnvelope size={15} />
                Contactar
              </motion.a>
            </motion.div>

            {/* Social */}
            <motion.div variants={item} className="flex gap-3">
              {[
                { icon: FaGithub,    href: 'https://github.com/josueaorozco',             label: 'GitHub' },
                { icon: FaLinkedin,  href: 'https://co.linkedin.com/in/josueorozcor',      label: 'LinkedIn' },
                { icon: FaInstagram, href: 'https://www.instagram.com/josueorozcor/',      label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#4a4a4a' }}>
                  <Icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: code card (desktop only) */}
          <div className="hidden md:block">
            <CodeCard />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: 'rgba(255,255,255,0.15)' }}>
        <span className="text-xs font-mono tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <HiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
