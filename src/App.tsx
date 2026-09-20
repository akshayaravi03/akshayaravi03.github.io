import { motion } from 'framer-motion'

function App() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        fontSize: '1.5rem',
        fontWeight: 500,
        letterSpacing: '0.02em',
        margin: 0,
      }}
    >
      Akshaya Ravi Design Studio
    </motion.h1>
  )
}

export default App
