import { motion, AnimatePresence } from 'framer-motion'
import { HiSun, HiMoon } from 'react-icons/hi2'
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className="fixed top-5 right-5 z-50 w-10 h-10 rounded-xl flex items-center justify-center"
      style={{
        background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)',
        border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
        transition: 'background 0.3s, border-color 0.3s',
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1   }}
          exit={{    rotate:  30, opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.2 }}
        >
          {isDark
            ? <HiSun  size={18} style={{ color: '#DCDCAA' }} />
            : <HiMoon size={18} style={{ color: '#569CD6' }} />
          }
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}
