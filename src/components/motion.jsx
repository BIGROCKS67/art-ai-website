import { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView, useReducedMotion } from 'framer-motion'

export const EASE = [0.23, 1, 0.32, 1]

export function Reveal({ children, delay = 0, className, as = 'div', ...rest }) {
  const reduce = useReducedMotion()
  const Tag = motion[as] || motion.div
  return (
    <Tag
      className={className}
      style={{ overflow: 'visible' }}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px' }}
      transition={{ duration: 0.85, ease: EASE, delay: Math.min(delay, 0.28) }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function MediaReveal({ children, className, ...rest }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  if (reduce) {
    return (
      <div className={className} {...rest}>
        {children}
      </div>
    )
  }
  return (
    <div ref={ref} className={className} {...rest}>
      <motion.div
        style={{ height: '100%' }}
        initial={{ clipPath: 'inset(100% 0 0 0)' }}
        animate={{ clipPath: inView ? 'inset(0% 0 0 0)' : 'inset(100% 0 0 0)' }}
        transition={{ duration: 1.05, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function LineReveal({ lines, className = '', as = 'h1', when = 'mount' }) {
  const reduce = useReducedMotion()
  const Static = as === 'h2' ? 'h2' : as === 'p' ? 'p' : 'h1'
  const Tag = reduce ? Static : motion[as] || motion.h1

  return (
    <Tag className={className}>
      {lines.map((line, i) => {
        const cls = `hero-line${line.mark ? ' hero-line--mark' : ''}`
        if (reduce) {
          return (
            <span key={`${line.text}-${i}`} className={cls}>
              {line.text}
            </span>
          )
        }
        const motionProps = when === 'view'
          ? {
              initial: { y: '112%' },
              whileInView: { y: '0%' },
              viewport: { once: true, margin: '-8% 0px' },
            }
          : {
              initial: { y: '112%' },
              animate: { y: '0%' },
            }
        return (
          <span key={`${line.text}-${i}`} className="hero-line-mask">
            <motion.span
              className={cls}
              {...motionProps}
              transition={{ duration: 0.95, ease: EASE, delay: 0.05 + i * 0.09 }}
            >
              {line.text}
            </motion.span>
          </span>
        )
      })}
    </Tag>
  )
}

export function SplitTitle({ children, className = '', as = 'h1' }) {
  const reduce = useReducedMotion()
  const [simple, setSimple] = useState(true)
  const Tag = motion[as] || motion.h1
  const words = String(children).trim().split(/\s+/)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 720px), (prefers-reduced-motion: reduce)')
    const update = () => setSimple(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  if (reduce || simple) {
    const Static = as === 'h1' ? 'h1' : as === 'p' ? 'p' : 'h2'
    const S = Static
    return <S className={className}>{children}</S>
  }

  return (
    <Tag className={`split-title ${className}`.trim()}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="split-word">
          <motion.span
            className="split-word-inner"
            initial={{ y: '108%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 0.95, ease: EASE, delay: 0.12 + i * 0.045 }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}

export function CountUp({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setVal(to)
      return
    }
    const controls = animate(0, to, {
      duration: 1.2,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  return (
    <span ref={ref} className="tnum">
      {val}
      {suffix}
    </span>
  )
}
