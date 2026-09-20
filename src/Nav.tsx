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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        flexWrap: 'wrap',
        padding: '2rem 2rem 1rem',
        fontFamily: "'EB Garamond', Georgia, serif",
      }}
    >
      <a
        href="/"
        style={{
          fontWeight: 400,
          fontSize: '2.75rem',
          letterSpacing: '-0.01em',
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
          gap: '2rem',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: '0.85rem',
                letterSpacing: '0.03em',
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
