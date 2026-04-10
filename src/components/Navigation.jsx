import { useState, useEffect, useRef } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'
import { HiXMark, HiBars3, HiUser, HiBriefcase, HiBolt, HiAcademicCap, HiEnvelope } from 'react-icons/hi2'

const NAV_ITEMS = [
  { id: 'about',      label: 'Sobre mí',    icon: HiUser },
  { id: 'experience', label: 'Experiencia', icon: HiBriefcase },
  { id: 'skills',     label: 'Habilidades', icon: HiBolt },
  { id: 'education',  label: 'Educación',   icon: HiAcademicCap },
  { id: 'contact',    label: 'Contacto',    icon: HiEnvelope },
]

function DockItem({ item, isActive, mouseX, onClick }) {
  const ref = useRef(null)
  const scale = useSpring(1, { stiffness: 300, damping: 20 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    if (!mouseX || !ref.current) return
    const unsubscribe = mouseX.onChange((x) => {
      const bounds = ref.current?.getBoundingClientRect()
      if (!bounds) return
      const center = bounds.left + bounds.width / 2
      const proximity = Math.max(0, 1 - Math.abs(x - center) / 130)
      scale.set(1 + proximity * 0.5)
    })
    return unsubscribe
  }, [mouseX, scale])

  const Icon = item.icon

  return (
    <motion.button ref={ref} style={{ scale }} whileTap={{ scale: 0.9 }}
      onClick={() => onClick(item.id)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col items-center">

      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-mono whitespace-nowrap pointer-events-none"
            style={{ background: 'var(--surface2)', border: '1px solid var(--border)', color: 'var(--text-dim)' }}>
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          background: isActive ? 'rgba(209,105,105,0.15)' : 'rgba(255,255,255,0.04)',
          border: isActive ? '1px solid rgba(209,105,105,0.4)' : '1px solid rgba(255,255,255,0.07)',
          transition: 'all 0.2s',
        }}>
        <Icon size={18} style={{ color: isActive ? '#D16969' : 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }} />
        {isActive && (
          <motion.span layoutId="activeIndicator"
            className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
            style={{ background: '#D16969' }} />
        )}
      </motion.div>
    </motion.button>
  )
}

export default function Navigation() {
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mouseX = useSpring(0, { stiffness: 150, damping: 25 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const scrollY = window.scrollY + window.innerHeight / 2
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id)
        if (el && el.offsetTop <= scrollY) { setActive(NAV_ITEMS[i].id); return }
      }
      setActive('')
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop dock */}
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(-999)}
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 200 }}
        className="hidden md:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-50 items-end gap-2 px-4 py-3 rounded-2xl"
        style={{
          background: scrolled ? 'rgba(15,15,15,0.92)' : 'rgba(15,15,15,0.75)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
          transition: 'background 0.3s',
        }}>
        {NAV_ITEMS.map((item) => (
          <DockItem key={item.id} item={item} isActive={active === item.id} mouseX={mouseX} onClick={scrollTo} />
        ))}
      </motion.nav>

      {/* Mobile button */}
      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center"
        style={{ background: '#D16969', boxShadow: '0 6px 24px rgba(209,105,105,0.35)' }}>
        <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          {mobileOpen ? <HiXMark size={22} color="white" /> : <HiBars3 size={22} color="white" />}
        </motion.div>
      </motion.button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 z-40"
            style={{ background: 'var(--bg)', backdropFilter: 'blur(20px)' }}>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
              className="flex flex-col items-center justify-center h-full gap-3 px-8">
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: '#3d3d3d' }}>NAVEGACIÓN</p>
              {NAV_ITEMS.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.button key={item.id} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 24 }} transition={{ delay: i * 0.07 }}
                    onClick={() => scrollTo(item.id)}
                    className="w-full max-w-xs flex items-center gap-4 px-5 py-3.5 rounded-xl"
                    style={{
                      background: active === item.id ? 'rgba(209,105,105,0.1)' : 'var(--surface)',
                      border: active === item.id ? '1px solid rgba(209,105,105,0.3)' : '1px solid rgba(255,255,255,0.07)',
                    }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(209,105,105,0.12)' }}>
                      <Icon size={16} style={{ color: '#D16969' }} />
                    </div>
                    <span className="text-base font-medium" style={{ color: active === item.id ? '#D16969' : '#858585' }}>
                      {item.label}
                    </span>
                  </motion.button>
                )
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
