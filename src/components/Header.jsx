import useMobileMenu from '../hooks/useMobileMenu.js'
import useScrollSpy from '../hooks/useScrollSpy.js'
import { LOGO, NAV_LINKS } from '../data/site.js'

const SPY_IDS = NAV_LINKS.map(link => link.id)

export default function Header() {
  const { open, toggle, close } = useMobileMenu()
  const active = useScrollSpy(SPY_IDS)

  return (
    <header className={open ? 'is-open' : undefined}>
      <nav className="nav">
        <a href="#home" className="nav__logo" onClick={close}>
          <img src={LOGO} alt="Animakers Studio" />
        </a>

        <div className="nav__menu" id="navmenu">
          <div className="nav__links">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'is-active' : undefined}
                onClick={close}
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" className="btn btn--primary nav__cta" onClick={close}>
            Contact Us
          </a>
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
