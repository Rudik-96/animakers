import { useEffect, useRef, useState } from 'react'

export default function useReveal() {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShown(true)
        io.unobserve(el)
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px' },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, shown]
}
