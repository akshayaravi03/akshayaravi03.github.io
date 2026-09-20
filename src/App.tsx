import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <motion.img
        src="/images/lobby.webp"
        alt="Interior lobby design"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          maxWidth: '960px',
          borderRadius: '8px',
        }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        style={{
          fontSize: '1.5rem',
          fontWeight: 500,
          letterSpacing: '0.02em',
          margin: 0,
          color: 'red',
        }}
      >
        Akshaya Ravi Design Studio
      </motion.h1>
    </>
  )
}

export default App
