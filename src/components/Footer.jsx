import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <>
      <footer className="border-t py-6 px-6" style={{ borderColor: 'var(--border)', background: 'var(--bg-dark)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold"
              style={{ background: '#D16969', color: 'white' }}>J</div>
            <span className="text-sm font-mono font-semibold" style={{ color: '#858585' }}>josue_orozco</span>
            <span className="text-xs font-mono" style={{ color: '#3d3d3d' }}>~</span>
            <span className="text-xs font-mono" style={{ color: '#4EC9B0' }}>main</span>
          </div>

          <p className="text-xs font-mono" style={{ color: '#3d3d3d' }}>
            © {new Date().getFullYear()} — React + Vite + Netlify
          </p>

          <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="text-xs font-mono flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
            style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}>
            ↑ back to top
          </motion.button>
        </div>
      </footer>

      {/* VS Code status bar */}
      <div className="vscode-statusbar">
        <span>⎇ main</span>
        <span>Ln 1, Col 1</span>
        <span>UTF-8</span>
        <span className="ml-auto">josueorozcordev</span>
        <span>React</span>
        <span>Spaces: 2</span>
      </div>
    </>
  )
}
