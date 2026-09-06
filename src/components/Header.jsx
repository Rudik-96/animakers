import { NavLink } from 'react-router-dom'
import useMobileMenu from '../hooks/useMobileMenu.js'
import { LOGO, NAV_LINKS } from '../data/site.js'

export default function Header({ transparent = false }) {
  const { open, toggle, close } = useMobileMenu()
  const isTransparent = transparent && !open

  const classes = ['site-header', isTransparent ? 'is-transparent' : '', open ? 'is-open' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={classes}>
      <nav className="nav">
        <NavLink to="/" className="nav__logo" onClick={close}>
          <img src={LOGO} alt="Animakers Studio" />
        </NavLink>

        <div className="nav__menu" id="navmenu">
          <div className="nav__links">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                onClick={close}
              >
                {label}
              </NavLink>
            ))}
          </div>
          <NavLink to="/contact" className="btn btn--primary nav__cta" onClick={close}>
            Contact Us
          </NavLink>
        </div>

        <button
          type="button"
          className="burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="navmenu"
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  )
}
