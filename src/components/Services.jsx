import Blob from './Blob.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import { SERVICES } from '../data/services.js'

export default function Services() {
  return (
    <section id="services">
      <Blob name="services__blob" />
      <Blob name="services__blob-2" />
      <div className="wrap">
        <div className="sec-head center">
          <Eyebrow>What we do</Eyebrow>
          <Reveal as="h2">Services</Reveal>
          <Reveal as="p">
            From a first sketch to the final render — we can take on one stage or the whole pipeline.
          </Reveal>
        </div>

        <div className="svc">
          {SERVICES.map(({ Icon, title, text }, i) => (
            <Reveal className="svc__item" key={title} delay={i * 60}>
              <div className="svc__ico">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
