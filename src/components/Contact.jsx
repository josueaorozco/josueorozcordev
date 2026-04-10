import { useState } from 'react'
import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { HiEnvelope, HiArrowUpRight } from 'react-icons/hi2'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const CONTACT_ITEMS = [
  { icon: HiEnvelope, label: 'Email', value: 'josueorozcor@gmail.com', href: 'mailto:josueorozcor@gmail.com', color: '#D16969' },
]

const SOCIAL = [
  { icon: FaGithub,    href: 'https://github.com/josueaorozco',            label: 'GitHub',    color: '#858585' },
  { icon: FaLinkedin,  href: 'https://co.linkedin.com/in/josueorozcor',    label: 'LinkedIn',  color: '#4FC1FF' },
  { icon: FaInstagram, href: 'https://www.instagram.com/josueorozcor/',    label: 'Instagram', color: '#E1306C' },
]

function FormField({ label, id, type = 'text', multiline, placeholder }) {
  const base = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: '#D4D4D4',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s, background 0.2s',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '14px',
    width: '100%',
  }
  const focus = { borderColor: 'rgba(209,105,105,0.5)', background: 'rgba(209,105,105,0.04)' }
  const blur  = { borderColor: 'rgba(255,255,255,0.08)', background: '#1e1e1e' }

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-mono uppercase tracking-wider" style={{ color: '#4a4a4a' }}>
        {label}
      </label>
      {multiline
        ? <textarea id={id} name={id} rows={5} placeholder={placeholder} style={base} resize="none"
            onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur)} />
        : <input   id={id} name={id} type={type} placeholder={placeholder} style={base}
            onFocus={e => Object.assign(e.target.style, focus)} onBlur={e => Object.assign(e.target.style, blur)} />
      }
    </div>
  )
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal()
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.target
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString(),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto pb-40">
      <motion.div ref={ref}>
        <motion.div initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : {}}
          className="flex items-center gap-2 mb-8 font-mono text-xs" style={{ color: '#4a4a4a' }}>
          <span style={{ color: '#CE9178' }}>portfolio</span><span>/</span>
          <span style={{ color: '#9CDCFE' }}>contact</span><span>/</span>
          <span style={{ color: '#D16969' }}>form.tsx</span>
          <div className="flex-1 h-px ml-4" style={{ background: 'rgba(209,105,105,0.15)' }} />
          <span style={{ color: '#3d3d3d' }}>05</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }} className="section-title mb-4">
          Hablemos de tu{' '}<span className="gradient-text">próximo proyecto</span>
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }} className="text-sm mb-16 max-w-lg" style={{ color: '#4a4a4a' }}>
          Disponible para proyectos freelance y colaboraciones. No dudes en escribirme.
        </motion.p>

        <div className="grid md:grid-cols-[1fr_340px] gap-8 items-start">
          {/* Form */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-xl overflow-hidden"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>

            <div className="flex items-center gap-2 px-4 py-2.5 border-b"
              style={{ background: 'var(--surface2)', borderColor: 'var(--border)' }}>
              <div className="w-2 h-2 rounded-full" style={{ background: '#D16969' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#FEBC2E' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#28C840' }} />
              <span className="text-xs font-mono ml-2" style={{ color: '#858585' }}>contact_form.tsx</span>
            </div>

            <div className="p-6">
              {status === 'sent' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center">
                  <div className="text-3xl mb-3">✅</div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>¡Mensaje enviado!</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Te responderé pronto.</p>
                </motion.div>
              ) : status === 'error' ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center">
                  <div className="text-3xl mb-3">❌</div>
                  <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text)' }}>Algo salió mal</h3>
                  <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>Por favor intenta de nuevo o escríbeme directo al email.</p>
                  <button onClick={() => setStatus('idle')} className="text-sm underline" style={{ color: '#D16969' }}>Intentar de nuevo</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" className="space-y-4">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField label="Nombre" id="name" placeholder="Tu nombre" />
                    <FormField label="Email"  id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <FormField label="Asunto"  id="subject" placeholder="¿En qué puedo ayudarte?" />
                  <FormField label="Mensaje" id="message" multiline placeholder="Cuéntame sobre tu proyecto..." />

                  <motion.button type="submit" disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                    className="w-full py-3 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{ background: '#D16969', boxShadow: '0 4px 20px rgba(209,105,105,0.25)' }}>
                    {status === 'sending' ? (
                      <><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                          <path fill="currentColor" d="M4 12a8 8 0 018-8v8z" className="opacity-75" />
                        </svg>Enviando...</>
                    ) : (
                      <>Enviar mensaje <HiArrowUpRight size={15} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Sidebar info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }} className="space-y-3">

            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="flex items-center gap-3 p-3.5 rounded-xl"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}12` }}>
                  <Icon size={14} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs font-mono mb-0.5 uppercase tracking-wider" style={{ color: '#3d3d3d' }}>{label}</p>
                  {href
                    ? <a href={href} className="text-sm font-medium" style={{ color: '#858585' }}>{value}</a>
                    : <span className="text-sm font-medium" style={{ color: '#858585' }}>{value}</span>}
                </div>
              </motion.div>
            ))}

            <div className="pt-2">
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: '#3d3d3d' }}>Social</p>
              <div className="flex gap-2">
                {SOCIAL.map(({ icon: Icon, href, label, color }) => (
                  <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: '#1e1e1e', border: '1px solid rgba(255,255,255,0.08)' }}
                    title={label}>
                    <Icon size={16} style={{ color }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
