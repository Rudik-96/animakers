import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import Blob from './Blob.jsx'
import Reveal from './Reveal.jsx'
import { PROJECTS, findProject } from '../data/projects.js'

function Arrow({ direction }) {
  const d = direction === 'prev' ? 'm14.5 5-7 7 7 7' : 'm9.5 5 7 7-7 7'
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = findProject(slug)
  const project = PROJECTS[index]

  const prev = index > 0 ? PROJECTS[index - 1] : PROJECTS[PROJECTS.length - 1]
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : PROJECTS[0]

  useEffect(() => {
    if (!project) return
    const onKey = e => {
      if (e.key === 'ArrowLeft') document.querySelector('.pager__btn--prev')?.click()
      if (e.key === 'ArrowRight') document.querySelector('.pager__btn--next')?.click()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [project])

  if (!project) return <Navigate to="/projects" replace />

  const { title, meta, src, alt, year, role, scope, description } = project

  return (
    <section className="project">
      <Blob name="projects__blob" />

      <Link to={`/projects/${prev.slug}`} className="pager__btn pager__btn--prev" aria-label={`Previous project: ${prev.title}`}>
        <Arrow direction="prev" />
      </Link>
      <Link to={`/projects/${next.slug}`} className="pager__btn pager__btn--next" aria-label={`Next project: ${next.title}`}>
        <Arrow direction="next" />
      </Link>

      <div className="wrap">
        <Reveal as={Link} to="/projects" className="backlink">
          <Arrow direction="prev" />
          All projects
        </Reveal>

        <div className="sec-head">
          <Reveal as="span" className="eyebrow"><i />{meta}</Reveal>
          <Reveal as="h2">{title}</Reveal>
        </div>

        <Reveal className="project__hero">
          <img src={src} alt={alt} />
        </Reveal>

        <div className="project__body">
          <div className="project__text">
            {description.map(paragraph => (
              <Reveal as="p" key={paragraph.slice(0, 24)}>{paragraph}</Reveal>
            ))}
          </div>

          <Reveal className="project__facts">
            <div className="fact"><b>Year</b><span>{year}</span></div>
            <div className="fact"><b>Our role</b><span>{role}</span></div>
            <div className="fact"><b>Scope</b><span>{scope}</span></div>
          </Reveal>
        </div>

        <Reveal className="pager">
          <Link to={`/projects/${prev.slug}`} className="pager__link">
            <Arrow direction="prev" />
            <span><b>Previous</b>{prev.title}</span>
          </Link>
          <Link to={`/projects/${next.slug}`} className="pager__link pager__link--next">
            <span><b>Next</b>{next.title}</span>
            <Arrow direction="next" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
