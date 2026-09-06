import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import useTopSentinel from '../hooks/useTopSentinel.js'

export default function Layout() {
  const { pathname } = useLocation()
  const [sentinelRef, scrolled] = useTopSentinel()
  const isHome = pathname === '/'

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <>
      <div ref={sentinelRef} className="scroll-sentinel" aria-hidden="true" />
      <Header transparent={isHome && !scrolled} />
      <main className={isHome ? undefined : 'page'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
