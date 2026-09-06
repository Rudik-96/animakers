import { LOGO } from '../data/site.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <img src={LOGO} alt="Animakers Studio" />
        <p>© {new Date().getFullYear()} Animakers Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
