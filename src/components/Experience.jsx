import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiBriefcase } from 'react-icons/hi2'

const EXPERIENCES = [
  {
    period: 'Sep 2023 — Presente',
    role: 'Software Analyst',
    company: 'Jamar',
    type: 'Full-time',
    color: '#D16969',
    bullets: [
      'Liderazgo del backend del e-commerce de Jamar: arquitectura, APIs REST y optimización de rendimiento.',
      'Desarrollo Full Stack con integración de SDKs de terceros (Credolab, AWS Cognito).',
      'Manejo de incidencias de nivel 2 y 3 y resolución de bugs en producción.',
      'Colaboración con equipos técnicos multidisciplinarios para integraciones sin fricción.',
      'Mantenimiento de documentación técnica para soporte y escalabilidad.',
    ],
    tags: ['Kotlin', 'Python', 'AWS', 'FastAPI', 'Ionic', 'Angular', 'Salesforce'],
  },
  {
    period: 'Jun 2022 — Sep 2023',
    role: 'JR Software Analyst',
    company: 'Jamar',
    type: 'Full-time',
    color: '#CE9178',
    bullets: [
      'Desarrollo de APIs y procedimientos de base de datos para integraciones eficientes.',
      'Optimización de consultas SQL y colaboración en proyectos multidisciplinarios.',
      'Creación de pruebas unitarias y documentación técnica.',
    ],
    tags: ['Python', 'PL/SQL', 'Oracle', 'PostgreSQL', 'FastAPI'],
  },
]

function ExperienceCard({ exp, index, isVisible }) {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 md:pl-0">

      {/* Mobile timeline dot */}
      <div className="md:hidden absolute left-0 top-7 w-2.5 h-2.5 rounded-full border-2 z-10"
        style={{ borderColor: exp.color, background: 'var(--bg)' }} />
      {/* Mobile vertical line between cards */}
      <div className="md:hidden absolute left-[4px] top-10 bottom-0 w-px -mb-4"
        style={{ background: `linear-gradient(to bottom, ${exp.color}60, transparent)` }} />

      <div className="md:grid md:grid-cols-[180px_1fr] md:gap-10 items-start">
        {/* Date */}
        <div className="mb-3 md:mb-0 md:text-right md:pt-5">
          <span className="text-xs font-mono" style={{ color: '#3d3d3d' }}>{exp.period}</span>
        </div>

        {/* Card */}
        <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }}
          className="rounded-xl overflow-hidden group"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)', transition: 'border-color 0.3s' }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${exp.color}40` }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>

          {/* Card header — VS Code tab style */}
          <div className="flex items-center gap-3 px-5 py-2.5 border-b"
            style={{ background: 'var(--surface2)', borderColor: 'var(--border)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
            <span className="text-xs font-mono" style={{ color: '#858585' }}>
              {exp.role.toLowerCase().replace(/ /g, '_')}.md
            </span>
            <span className="ml-auto text-xs px-2 py-0.5 rounded font-mono"
              style={{ background: `${exp.color}15`, color: exp.color, border: `1px solid ${exp.color}25` }}>
              {exp.type}
            </span>
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-md flex items-center justify-center"
                style={{ background: `${exp.color}18` }}>
                <HiBriefcase size={13} style={{ color: exp.color }} />
              </div>
              <div>
                <h3 className="text-base font-bold" style={{ color: '#D4D4D4' }}>{exp.role}</h3>
                <p className="text-xs font-mono" style={{ color: exp.color }}>{exp.company}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.bullets.map((b, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: '#6A6A6A' }}>
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {exp.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-md font-mono"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#4a4a4a' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="experience" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-8 font-mono text-xs" style={{ color: '#4a4a4a' }}>
          <span style={{ color: '#CE9178' }}>portfolio</span><span>/</span>
          <span style={{ color: '#9CDCFE' }}>experience</span><span>/</span>
          <span style={{ color: '#D16969' }}>timeline.ts</span>
          <div className="flex-1 h-px ml-4" style={{ background: 'rgba(206,145,120,0.15)' }} />
          <span style={{ color: '#3d3d3d' }}>02</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }} className="section-title mb-16">
          Trayectoria{' '}
          <span className="gradient-text">profesional</span>
        </motion.h2>

        <div className="relative">
          <div className="hidden md:block absolute left-[180px] top-0 bottom-0 w-px ml-5 timeline-line" />
          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
