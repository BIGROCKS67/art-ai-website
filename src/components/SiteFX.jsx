import SmoothScroll from './SmoothScroll'

export default function SiteFX() {
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <SmoothScroll />
      <div className="site-grain" aria-hidden="true" />
    </>
  )
}
