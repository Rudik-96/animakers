import Reveal from './Reveal.jsx'

export default function Eyebrow({ children }) {
  return (
    <Reveal as="span" className="eyebrow">
      <i />
      {children}
    </Reveal>
  )
}
