import { useEffect, useState } from 'react'

function Loader() {
  const [progress, setProgress] = useState(0)
  const [fadingOut, setFadingOut] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let cancelled = false

    const trackImageLoad = async () => {
      try {
        const res = await fetch('/images/lobby.webp')
        const total = Number(res.headers.get('content-length')) || 0
        const reader = res.body?.getReader()
        let received = 0
        if (reader && total) {
          for (;;) {
            const { done, value } = await reader.read()
            if (done) break
            received += value.length
            if (!cancelled) setProgress(Math.min(99, Math.round((received / total) * 100)))
          }
        }
      } catch {
        // ignore network errors, fall back to the minimum-delay below
      }
    }

    const minimumDelay = new Promise((resolve) => setTimeout(resolve, 900))

    Promise.all([trackImageLoad(), minimumDelay]).then(() => {
      if (cancelled) return
      setProgress(100)
      setFadingOut(true)
      setTimeout(() => {
        if (!cancelled) setHidden(true)
      }, 600)
    })

    return () => {
      cancelled = true
    }
  }, [])

  if (hidden) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: '#f9f3f0',
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
          color: '#633b2f',
        }}
      >
        {progress}%
      </span>
    </div>
  )
}

export default Loader
