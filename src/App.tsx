import { motion } from 'framer-motion'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <main
        style={{
          flex: 1,
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '2rem 1rem',
        }}
      >
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
      </main>
    </>
  )
}

export default App
