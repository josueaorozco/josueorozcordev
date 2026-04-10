import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiLanguage, HiCommandLine } from 'react-icons/hi2'

const STATS = [
  { value: '3+', label: 'Años de experiencia' },
  { value: 'L2/L3', label: 'Soporte técnico' },
  { value: 'Scrum', label: 'Metodología ágil' },
]

const FACTS = [
  { icon: HiLanguage,    text: 'Español (nativo) · Inglés B1 (in corso) · Italiano (livello intermedio)' },
  { icon: HiCommandLine, text: 'Python · Kotlin · JavaScript · PL/SQL' },
]

export default function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="about" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}>

        {/* Section label — breadcrumb style */}
        <div className="flex items-center gap-2 mb-8 font-mono text-xs" style={{ color: '#4a4a4a' }}>
          <span style={{ color: '#CE9178' }}>portfolio</span>
          <span>/</span>
          <span style={{ color: '#9CDCFE' }}>about</span>
          <span>/</span>
          <span style={{ color: '#D16969' }}>index.ts</span>
          <div className="flex-1 h-px ml-4" style={{ background: 'rgba(209,105,105,0.15)' }} />
          <span className="text-xs" style={{ color: '#3d3d3d' }}>01</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }} className="section-title mb-6">
              Construyo con{' '}
              <span className="gradient-text">propósito</span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }} className="space-y-4 text-sm leading-relaxed" style={{ color: '#6A6A6A' }}>
              <p>
                Soy un ingeniero de software impulsado por la innovación tecnológica.
                Me especializo en soluciones de plataforma escalables, combinando
                proficiencia técnica con pensamiento creativo.
              </p>
              <p>
                Actualmente soy <span style={{ color: '#D4D4D4' }}>Full Stack developer</span> y
                lidero el backend del{' '}
                <span style={{ color: '#D4D4D4' }}>e-commerce de Jamar</span>, integro SDKs
                de terceros y brindo soporte técnico de nivel 2 y 3.
              </p>
              <p>
                Aplico <span style={{ color: '#D4D4D4' }}>Scrum</span> para potenciar
                la colaboración en equipo y la entrega continua.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }} className="mt-8 space-y-3">
              {FACTS.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(209,105,105,0.1)', border: '1px solid rgba(209,105,105,0.2)' }}>
                    <Icon size={13} style={{ color: '#D16969' }} />
                  </div>
                  <span className="text-sm" style={{ color: '#6A6A6A' }}>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: stats + achievement */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.6 }} className="space-y-4">

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {STATS.map(({ value, label }, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-xl p-4 text-center"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                  <div className="text-2xl font-black mb-1 gradient-text">{value}</div>
                  <div className="text-xs leading-tight" style={{ color: '#4a4a4a' }}>{label}</div>
                </motion.div>
              ))}
            </div>

            {/* Achievement card — VS Code notification style */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface2)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: '#D16969' }} />
                <span className="text-xs font-mono" style={{ color: '#858585' }}>achievement.log</span>
              </div>
              <div className="p-4">
                <p className="text-xs font-mono mb-1" style={{ color: '#6A9955' }}>{`// Logro destacado`}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#858585' }}>
                  Implementación de seguridad en portal cliente, liderazgo en migración
                  Salesforce Frontline e integración de{' '}
                  <span style={{ color: '#CE9178' }}>Credolab SDK</span> +{' '}
                  <span style={{ color: '#4FC1FF' }}>AWS Cognito</span> en la app de Jamar.
                </p>
              </div>
            </motion.div>

            {/* Mini terminal */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.65 }}
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--bg-dark)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-2 px-4 py-2 border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface2)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: '#FF5F57' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#FEBC2E' }} />
                <div className="w-2 h-2 rounded-full" style={{ background: '#28C840' }} />
                <span className="text-xs font-mono ml-2" style={{ color: '#3d3d3d' }}>bash</span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1.5">
                <div style={{ color: '#4EC9B0' }}>$ whoami</div>
                <div style={{ color: '#858585' }}>josue_orozco — software_analyst</div>
                <div style={{ color: '#4EC9B0' }}>$ cat skills.txt | grep active</div>
                <div style={{ color: '#858585' }}>Python · Kotlin · FastAPI · AWS · Scrum</div>
                <div className="flex items-center gap-1">
                  <span style={{ color: '#4EC9B0' }}>$</span>
                  <span className="typewriter-cursor" style={{ color: '#D4D4D4' }}></span>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
