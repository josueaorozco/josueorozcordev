import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'

const SKILL_GROUPS = [
  {
    category: 'Lenguajes',
    color: '#D16969',
    tokenColor: 'tok-keyword',
    skills: [
      { name: 'Python',     level: 90 },
      { name: 'Kotlin',     level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'PL/SQL',     level: 88 },
      { name: 'Java',       level: 70 },
      { name: 'Apex',       level: 65 },
    ],
  },
  {
    category: 'Frameworks',
    color: '#CE9178',
    tokenColor: 'tok-string',
    skills: [
      { name: 'FastAPI',         level: 88 },
      { name: 'Ionic',           level: 82 },
      { name: 'Angular',         level: 78 },
      { name: 'JetPack Compose', level: 75 },
      { name: 'Oracle Forms',    level: 70 },
    ],
  },
  {
    category: 'Bases de datos',
    color: '#4EC9B0',
    tokenColor: 'tok-class',
    skills: [
      { name: 'Oracle DB',   level: 90 },
      { name: 'PostgreSQL',  level: 85 },
      { name: 'DynamoDB',    level: 72 },
    ],
  },
  {
    category: 'Cloud & Tools',
    color: '#4FC1FF',
    tokenColor: 'tok-var',
    skills: [
      { name: 'AWS Cognito',  level: 80 },
      { name: 'Salesforce',   level: 75 },
      { name: 'Scrum / Agile', level: 88 },
      { name: 'Git',          level: 85 },
    ],
  },
]

const SOFT_SKILLS = [
  'Liderazgo', 'Empatía', 'Comunicación efectiva',
  'Resolución de problemas', 'Toma de decisiones', 'Desarrollo de equipos',
]

function SkillBar({ name, level, color, delay, isVisible }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-mono" style={{ color: '#858585' }}>{name}</span>
        <span className="text-xs font-mono" style={{ color: '#3d3d3d' }}>{level}</span>
      </div>
      <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div className="h-full rounded-full"
          style={{ background: color }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-8 font-mono text-xs" style={{ color: '#4a4a4a' }}>
          <span style={{ color: '#CE9178' }}>portfolio</span><span>/</span>
          <span style={{ color: '#9CDCFE' }}>skills</span><span>/</span>
          <span style={{ color: '#D16969' }}>stack.json</span>
          <div className="flex-1 h-px ml-4" style={{ background: 'rgba(209,105,105,0.15)' }} />
          <span style={{ color: '#3d3d3d' }}>03</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }} className="section-title mb-16">
          Stack{' '}<span className="gradient-text">técnico</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div key={group.category}
              initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
              className="rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>

              {/* VS Code panel header */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{ background: 'var(--surface2)', borderColor: 'var(--border)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: group.color }} />
                <span className={`text-xs font-mono ${group.tokenColor}`}>{group.category}</span>
              </div>

              <div className="p-5 space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level}
                    color={group.color} delay={gi * 0.1 + si * 0.06 + 0.2} isVisible={isVisible} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="rounded-xl overflow-hidden"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-2 px-4 py-2.5 border-b"
            style={{ background: 'var(--surface2)', borderColor: 'var(--border)' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: '#6A9955' }} />
            <span className="text-xs font-mono tok-comment">soft_skills.md</span>
          </div>
          <div className="p-5 flex flex-wrap gap-2">
            {SOFT_SKILLS.map((s, i) => (
              <motion.span key={s} initial={{ opacity: 0, scale: 0.85 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="px-3 py-1.5 rounded-lg text-sm font-mono"
                style={{ background: 'rgba(106,153,85,0.08)', border: '1px solid rgba(106,153,85,0.2)', color: '#6A9955' }}>
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
