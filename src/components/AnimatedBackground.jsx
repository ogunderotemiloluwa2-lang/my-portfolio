import './AnimatedBackground.css'

export default function AnimatedBackground() {
  return (
    <div className="animated-background" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-glow" />
    </div>
  )
}
