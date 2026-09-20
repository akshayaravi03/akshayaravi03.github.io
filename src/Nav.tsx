import { useState } from 'react'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Nav() {
  const [isHovered, setIsHovered] = useState(false)
  const textColor = isHovered ? '#633b2f' : '#f9f3f0'

  return (
    <nav
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        padding: '2rem 3rem',
        background: isHovered ? '#f9f3f0' : 'transparent',
        transition: 'background 1s ease',
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "'Italiana', Georgia, serif",
          fontWeight: 400,
          fontSize: '1.6rem',
          letterSpacing: '0.02em',
          color: textColor,
          textDecoration: 'none',
          transition: 'color 1s ease',
        }}
      >
        Akshaya Ravi
      </a>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '2.25rem',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: textColor,
                textDecoration: 'none',
                transition: 'color 1s ease',
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
