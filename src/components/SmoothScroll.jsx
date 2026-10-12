import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  const { pathname, hash } = useLocation()
  const lenisRef = useRef(null)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduce.matches) return undefined

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 1,
    })
    lenisRef.current = lenis

    let raf = 0
    const tick = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      lenis.scrollTo(el, { offset: -72, duration: 1.15 })
    }

    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      lenisRef.current = null
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    const jump = () => {
      if (cancelled) return
      const lenis = lenisRef.current
      if (!hash) {
        if (lenis) lenis.scrollTo(0, { immediate: true })
        window.scrollTo(0, 0)
        return
      }
      const el = document.querySelector(hash)
      if (!el) return
      if (lenis) {
        lenis.scrollTo(el, { offset: -72, immediate: true })
        return
      }
      const y = el.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo(0, Math.max(0, y))
    }
    const id = requestAnimationFrame(() => requestAnimationFrame(jump))
    return () => {
      cancelled = true
      cancelAnimationFrame(id)
    }
  }, [pathname, hash])

  return null
}
