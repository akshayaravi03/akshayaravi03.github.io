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
            display: 'block',
          }}
        />
      </div>
    </>
  )
}

export default App
