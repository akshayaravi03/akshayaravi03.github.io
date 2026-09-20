const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Nav() {
  return (
    <nav
      style={{
        width: '100%',
        boxSizing: 'border-box',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        padding: '2rem 3rem',
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 300,
          fontSize: '1.75rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#111111',
          textDecoration: 'none',
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
                color: '#111111',
                textDecoration: 'none',
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
