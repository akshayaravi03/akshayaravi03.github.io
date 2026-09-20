import { motion } from 'framer-motion'
import Nav from './Nav'

function App() {
  return (
    <>
      <Nav />
      <motion.img
        src="/images/lobby.webp"
        alt="Interior lobby design"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          width: '100%',
          display: 'block',
        }}
      />
    </>
  )
}

export default App
