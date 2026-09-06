import { useEffect, useRef, useState } from 'react'

export default function useTopSentinel() {
  const ref = useRef(null)
  const [passed, setPassed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(([entry]) => setPassed(!entry.isIntersecting), {
      threshold: 0,
    })

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, passed]
}
