import Blob from './Blob.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import { PROJECTS } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <Blob name="projects__blob" />
      <div className="wrap">
        <div className="sec-head center">
          <Eyebrow>Selected work</Eyebrow>
          <Reveal as="h2">Projects we brought to life</Reveal>
          <Reveal as="p">
            Feature animation, series, characters and full-CG production — a look at what we've
            been building.
          </Reveal>
        </div>

        <div className="grid">
          {PROJECTS.map(({ src, alt, title, meta, wide }, i) => (
            <Reveal
              as="a"
              key={src + title}
              href="#"
              className={wide ? 'card card--wide' : 'card'}
              delay={i * 60}
            >
              <img src={src} alt={alt} />
              <div className="card__meta">
                <b>{title}</b>
                <span>{meta}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
