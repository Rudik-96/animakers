import { useCallback, useEffect, useState } from 'react'

const DESKTOP = '(min-width:981px)'

export default function useMobileMenu() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const toggle = useCallback(() => setOpen(v => !v), [])

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') close() }
    const mq = matchMedia(DESKTOP)
    const onDesktop = e => { if (e.matches) close() }

    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onDesktop)
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onDesktop)
    }
  }, [close])

  return { open, toggle, close }
}
