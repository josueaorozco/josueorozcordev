import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const EDUCATION = [
  { year: '2024', degree: 'Ingeniería de Sistemas',                  institution: 'Politécnico de la Costa Atlántica', type: 'Título',    color: '#D16969', icon: '🎓' },
  { year: '2024', degree: 'Diplomado en Gestión de Proyectos',       institution: 'Politécnico de la Costa Atlántica', type: 'Diplomado', color: '#CE9178', icon: '📋' },
  { year: '2022', degree: 'Tecnólogo en Desarrollo de Software',     institution: 'Politécnico de la Costa Atlántica', type: 'Tecnología',color: '#4EC9B0', icon: '💻' },
  { year: '2022', degree: 'Diplomado en Desarrollo de Apps Móviles', institution: 'Politécnico de la Costa Atlántica', type: 'Diplomado', color: '#4FC1FF', icon: '📱' },
]

export default function Education() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="education" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-8 font-mono text-xs" style={{ color: '#4a4a4a' }}>
          <span style={{ color: '#CE9178' }}>portfolio</span><span>/</span>
          <span style={{ color: '#9CDCFE' }}>education</span><span>/</span>
          <span style={{ color: '#D16969' }}>degrees.ts</span>
          <div className="flex-1 h-px ml-4" style={{ background: 'rgba(79,193,255,0.15)' }} />
          <span style={{ color: '#3d3d3d' }}>04</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }} className="section-title mb-16">
          Formación{' '}<span className="gradient-text">académica</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {EDUCATION.map((edu, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="rounded-xl overflow-hidden group cursor-default"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${edu.color}35` }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>

              {/* Tab header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b"
                style={{ background: 'var(--surface2)', borderColor: 'var(--border)' }}>
                <span className="text-xs font-mono" style={{ color: '#3d3d3d' }}>
                  {edu.degree.toLowerCase().replace(/ /g, '_').slice(0, 22)}.md
                </span>
                <span className="ml-auto text-xs font-mono px-2 py-0.5 rounded"
                  style={{ background: `${edu.color}12`, color: edu.color, border: `1px solid ${edu.color}22` }}>
                  {edu.year}
                </span>
              </div>

              <div className="p-5 flex items-start gap-4">
                <div className="text-2xl w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${edu.color}12`, border: `1px solid ${edu.color}20` }}>
                  {edu.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: '#D4D4D4' }}>{edu.degree}</h3>
                  <p className="text-xs font-mono mb-3" style={{ color: '#4a4a4a' }}>{edu.institution}</p>
                  <span className="text-xs px-2.5 py-1 rounded-md font-mono"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', color: '#4a4a4a' }}>
                    {edu.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
