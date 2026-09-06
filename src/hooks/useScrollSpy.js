import { useEffect, useState } from 'react'

export default function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.3 },
    )

    sections.forEach(section => io.observe(section))
    return () => io.disconnect()
  }, [ids])

  return active
}
