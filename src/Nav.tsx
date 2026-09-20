const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Nav() {
  return (
    <nav
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
      }}
    >
      <a
        href="/"
        style={{
          fontFamily: "'Nunito', system-ui, sans-serif",
          fontWeight: 800,
          fontSize: '1.15rem',
          letterSpacing: '0.01em',
          color: '#f9f3f0',
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
                color: '#f9f3f0',
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
