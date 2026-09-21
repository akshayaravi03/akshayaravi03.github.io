import { motion } from 'framer-motion'
import Nav from './Nav'

function App() {
  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Nav />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '200px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0))',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />
        <motion.img
          src="/images/lobby.webp"
          alt="Interior lobby design"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '48% 50%',
            display: 'block',
          }}
        />
      </div>
    </>
  )
}

export default App
