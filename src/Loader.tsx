import { useEffect, useState } from 'react'

const DURATION_MS = 2000

function Loader() {
  const [progress, setProgress] = useState(0)
  const [fadingOut, setFadingOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let cancelled = false
    let frame: number

    const start = performance.now()
    const tick = (now: number) => {
      if (cancelled) return
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / DURATION_MS) * 100))
      setProgress(pct)
      if (pct < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        setFadingOut(true)
        setTimeout(() => {
          if (!cancelled) setHidden(true)
        }, 600)
      }
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
    }
  }, [])

  if (hidden) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: '#633b2f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.6s ease',
        pointerEvents: fadingOut ? 'none' : 'auto',
      }}
    >
      <span
        style={{
          fontFamily: "'Italiana', Georgia, serif",
          fontSize: '1.25rem',
          letterSpacing: '0.05em',
          color: '#f9f3f0',
        }}
      >
        {progress}%
      </span>
    </div>
  )
}

export default Loader
