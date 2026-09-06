import Blob from './Blob.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import { ABOUT_PHOTOS, STATS } from '../data/site.js'

export default function About() {
  return (
    <section id="about">
      <Blob name="about__blob" />
      <div className="wrap">
        <div className="about">
          <div className="about__text">
            <div className="sec-head" style={{ marginBottom: 26 }}>
              <Eyebrow>About us</Eyebrow>
              <Reveal as="h2">
                Two brothers,<br />one animation studio
              </Reveal>
            </div>

            <Reveal as="p">
              Animakers is a 3D animation studio founded in <strong>2023</strong> out of a deep love
              for animation, visual storytelling, and the desire to create something truly awesome.
              Behind the studio are us — brothers <strong>Bagrat and Vahan Maysuryan</strong>.
            </Reveal>
            <Reveal as="p">
              Over <strong>10 years in the industry</strong>: we've gone from artists and animators
              to art directors, working on a wide range of projects. Founding the studio was the
              natural next step — a way to bring our own ideas to life within a team of like-minded
              creatives.
            </Reveal>
            <Reveal as="p">
              Yes, we're a young studio — and that's our strength. We're not afraid to experiment,
              we seek out fresh approaches, and we love unconventional solutions.
            </Reveal>

            <Reveal className="about__quote">
              We believe animation is not just movement.<br />
              <span>It's emotion. It's story. It's the kind of magic that stays with the viewer.</span>
            </Reveal>

            <Reveal className="stats">
              {STATS.map(({ value, label }) => (
                <div className="stat" key={label}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="about__grid">
            {ABOUT_PHOTOS.map(({ src, alt }) => (
              <figure key={src}>
                <img src={src} alt={alt} />
              </figure>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
